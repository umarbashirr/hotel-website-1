import { Button } from "@/components/ui/button";
import { MoveDiagonal, UserIcon } from "lucide-react";
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

const RoomCard = ({
  title,
  price,
  maxPersonsAllowed,
  roomSize,
  description,
  imageUrl,
  slug,
}: RoomProps) => {
  return (
    <div className="flex justify-start items-start border rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full md:max-w-[350px] h-full">
        <Image src={imageUrl} alt="" fill className="object-cover bg" />
      </div>
      <div className="w-full">
        <div className="p-4 w-full">
          <h2 className="text-2xl font-medium underline text-gray-700">
            {title}
          </h2>
          <div className="text-sm my-4 flex flex-col gap-1 text-muted-foreground">
            <div className="flex items-center justify-start gap-2">
              <UserIcon size={16} />
              <p>{maxPersonsAllowed} Guests max</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <MoveDiagonal size={16} />
              <p>{roomSize} sq. ft. Area</p>
            </div>
          </div>
          <div>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="mr-2 text-yellow-500 text-xl font-bold">
                ₹{price}
              </span>{" "}
              onwards
            </p>
          </div>
          <div className="flex items-center justify-end gap-4 w-full">
            <Button
              className="bg-yellow-500 hover:bg-yellow-500 hover:opacity-80 flex items-center justify-center"
              size="sm"
              asChild
            >
              <Link href={`/rooms/${slug}`}>Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
