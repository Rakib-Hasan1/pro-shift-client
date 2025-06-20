import React from "react";

const Faq = () => {
  return (
    <div data-aos="zoom-in-up" className="my-12">
      <h2 className="font-extrabold text-3xl text-center my-6">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="font-medium text-center max-w-3xl mx-auto my-5">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div className="flex flex-col gap-3">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            The ProShift posture corrector gently aligns your spine by
            supporting your back and shoulders, promoting healthy posture,
            reducing strain, and encouraging long-term muscle memory for
            improved body positioning.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm">
            Yes, ProShift is designed to be adjustable and comfortable, making
            it suitable for all ages and body types. It ensures proper fit and
            support for a wide range of users.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm">
            Yes, ProShift helps relieve back pain by promoting correct posture
            and reducing muscle strain. Consistent use improves spinal
            alignment, posture habits, and overall comfort in daily activities.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm">
            Yes! ProShift includes smart vibration alerts that activate when you
            slouch, reminding you to correct posture in real-time. Adjustable
            sensitivity and Bluetooth connectivity make feedback subtle,
            personalized, and effective for lasting improvement.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm">
            1. Sign up on the product page — usually by entering your email or
            phone number in a “Notify Me When Available” form.
            <br />
            2. We’ll store your contact info securely.
            <br />
            3. Once we restock, we send you a prompt notification with a direct
            link to purchase so you won’t miss out!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
