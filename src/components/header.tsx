"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const routes = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "rooms & suites",
    path: "/rooms",
  },
  {
    label: "blogs",
    path: "/our-blogs",
  },
  {
    label: "contact",
    path: "/contact",
  },
];

const Header = () => {
  const path = usePathname();

  return (
    <header className="bg-white h-20 flex items-center justify-start w-full">
      <div className="container mx-auto px-6 w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <Logo />
          <nav className="hidden md:flex items-center space-x-4">
            {routes.map((item) => {
              return (
                <Link
                  key={item?.path}
                  href={item?.path}
                  className={cn(
                    "capitalize hover:text-yellow-500 text-primary",
                    path === item?.path && "text-yellow-500"
                  )}
                >
                  {item?.label}
                </Link>
              );
            })}
            <Button className="bg-yellow-500 hover:bg-yellow-600" size="lg">
              Book Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
