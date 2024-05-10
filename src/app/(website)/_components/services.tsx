"use client";

import { services } from "@/lib/services-data";
import SingleServiceCard from "./single-service-card";

const Services = () => {
  return (
    <section className="w-full h-full py-10 md:py-28 bg-slate-50">
      <div className="container mx-auto w-full h-full px-6">
        <div className="w-full h-full mb-5 md:mb-10 flex flex-col gap-y-4 items-center justify-center text-center">
          <h2 className="text-4xl font-medium">Services & Amenities</h2>
          <p className="text-base md:text-lg">
            Enhance your stay at Royal Hotel with our range of luxurious
            services and amenities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
          {services.map((service) => {
            return <SingleServiceCard key={service?.title} {...service} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
