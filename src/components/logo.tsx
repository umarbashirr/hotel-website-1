"use client";

import { Hotel } from "lucide-react";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="" className="flex items-center space-x-2">
      <Hotel className="w-10 h-10 text-yellow-500" />
      <span className="text-yellow-500 font-bold text-xl">Royal Hotel</span>
    </Link>
  );
};

export default Logo;
