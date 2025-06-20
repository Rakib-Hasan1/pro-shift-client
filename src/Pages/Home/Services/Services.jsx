import React from "react";
import ServiceCard from "./ServiceCard";
import {
  FaGlobeAsia,
  FaMoneyBillWave,
  FaShippingFast,
  FaUndoAlt,
} from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: FaShippingFast,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: FaGlobeAsia,
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: MdWarehouse,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: FaMoneyBillWave,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: BsBuildings,
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: FaUndoAlt,
    },
  ];
  return (
    <section data-aos="zoom-in-up" className="my-12">
      <h2 className="text-3xl font-extrabold text-center mb-4">Our Services</h2>
      <p className="font-medium text-center max-w-3xl mx-auto mb-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} icon={service.icon} />
        ))}
      </div>
    </section>
  );
};

export default Services;
