"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ServiceProps {
  title: string;
  icon: string;
}

const SingleServiceCard = ({ title, icon }: ServiceProps) => {
  return (
    <article className="p-6 bg-white shadow-sm rounded-lg flex items-center justify-center text-center flex-col space-y-4">
      <Image src={icon} alt={title} width={48} height={48} />
      <h3>{title}</h3>
    </article>
  );
};

export default SingleServiceCard;
