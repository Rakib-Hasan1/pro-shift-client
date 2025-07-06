import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import LoadingEffect from "../../Shared/LoadingEffect/LoadingEffect";
import useTrackingLogger from "../../../Hooks/UseTrackingLogger";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { logTracking } = useTrackingLogger();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // added loading state

  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingEffect />;
  }

  const amount = parcelInfo.cost;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setLoading(true); // Start loading to disable button and show spinner
    setError(""); // Clear previous error

    try {
      const { error: cardError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (cardError) {
        setError(cardError.message);
        setLoading(false); // Stop loading on error
        return;
      }

      const res = await axiosSecure.post("/create-payment-intent", {
        amountInCents,
        parcelId,
      });

      const clientSecret = res.data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false); // Stop loading on error
        return;
      }

      if (result.paymentIntent.status === "succeeded") {
        const transactionId = result?.paymentIntent.id;

        const paymentData = {
          parcelId,
          email: user?.email,
          amount,
          transactionId: transactionId,
          paymentMethod: result?.paymentIntent.payment_method_types,
        };

        const paymentRes = await axiosSecure.post("/payments", paymentData);

        if (paymentRes.data.insertedId) {
          await Swal.fire({
            icon: "success",
            title: "Payment Successful!",
            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
            confirmButtonText: "Go to My Parcels",
          });

          await logTracking({
            tracking_id: parcelInfo.tracking_id,
            status: "payment_done",
            details: `paid by ${user.displayName}`,
            updated_by: user.email,
          }),
            navigate("/dashboard/myParcels");
        }
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Always stop loading at the end
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded" />
        {error && <p className="text-red-500">{error}</p>}

        {/* Updated Button */}
        <button
          type="submit"
          disabled={!stripe || loading} // disable button if loading
          className="btn btn-primary text-black w-full"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span> // loading animation
          ) : (
            `Pay $${amount}`
          )}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
