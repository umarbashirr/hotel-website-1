import { rooms } from "@/lib/room-data";
import PageHero from "../_components/page-hero";
import RoomCard from "./_components/room-card";

const RoomsPage = () => {
  return (
    <div>
      <PageHero title="Rooms & Suites" />
      <div className="container mx-auto px-6 w-full h-full">
        <div className="mt-10 md:mt-24 mb-52">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {rooms.map((room) => {
              return <RoomCard key={room?.title} {...room} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
