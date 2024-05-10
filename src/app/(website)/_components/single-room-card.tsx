import { Button } from "@/components/ui/button";
import { Expand, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RoomProps {
  title: string;
  price: string;
  maxPersonsAllowed: number;
  roomSize: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const SingleRoomCard = ({
  title,
  price,
  maxPersonsAllowed,
  roomSize,
  description,
  imageUrl,
  slug,
}: RoomProps) => {
  return (
    <article className="rounded-xl shadow border overflow-hidden flex flex-col">
      <div className="relative w-full h-[300px]">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className=" p-4 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center justify-start space-x-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm">{maxPersonsAllowed} person</span>
            </div>
            <div className="flex items-center">
              <Expand className="w-4 h-4 mr-2" />
              <span className="text-sm">{roomSize} sq. ft.</span>
            </div>
          </div>
        </div>

        <p className="flex-grow text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p>
            ₹{price}
            <span className="text-xs">/night</span>
          </p>
          <Button
            className="bg-yellow-500 hover:bg-yellow-500 hover:opacity-80 flex items-center justify-center"
            size="lg"
            asChild
          >
            <Link href={`/rooms/${slug}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default SingleRoomCard;
