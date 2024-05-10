"use client";

import { rooms } from "@/lib/room-data";
import SingleRoomCard from "./single-room-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RoomsAndSuites = () => {
  return (
    <section className="w-full h-full mb-10 md:mb-28">
      <div className="container mx-auto w-full h-full px-6">
        <div className="w-full h-full mb-5 md:mb-10 flex items-end justify-between">
          <div className="flex flex-col gap-y-3 text-left">
            <h2 className="text-4xl font-medium">Our Rooms & Suites</h2>
            <p className="text-base md:text-lg">
              Discover your perfect retreat in our selection of luxurious rooms
              and suites.
            </p>
          </div>
          <Button variant="link" asChild>
            <Link href="/rooms">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {rooms.map((room) => {
            return <SingleRoomCard key={room?.title} {...room} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomsAndSuites;
