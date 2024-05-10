"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutSectionCard = () => {
  return (
    <div className="mt-10 md:mt-24 mb-52">
      <div className="container mx-auto px-6 w-full h-full">
        <div className="w-full h-full items-center grid grid-cols-1 lg:grid-cols-[620px_1fr] gap-8 lg:gap-48">
          <div className="relative h-[400px] order-2 lg:order-1">
            <div className="absolute w-full top-0 left-0 -translate-x-0 -translate-y-0">
              <div className="relative rounded-lg shadow-sm overflow-hidden w-full h-[300px] sm:w-full sm:h-[400px]">
                <Image
                  src="/images/about.jpg"
                  alt=""
                  fill
                  className="object-cover bg"
                />
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-28 -right-24 border-8 rounded-lg bg-white border-white">
              <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden ">
                <Image src="/images/about-2.jpg" alt="" fill />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xs font-medium text-yellow-500">
              About Royal Hotel
            </h2>
            <h3 className="text-4xl mb-4">
              Luxury Redefined: Royal Excellence
            </h3>
            <p
              className="text-base lg:text-lg  mb-4"
              style={{ lineHeight: "36px" }}
            >
              Experience the ultimate luxury at Royal Hotel, where every moment
              is a royal affair. With a legacy of refined hospitality, we
              redefine extravagance with our personalized services and
              meticulous attention to detail. From our elegantly designed rooms
              to our exquisite dining experiences, we invite you to immerse
              yourself in unparalleled comfort and sophistication. Discover the
              epitome of grandeur and create timeless memories with us at Royal
              Hotel.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-500 hover:opacity-80"
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionCard;
