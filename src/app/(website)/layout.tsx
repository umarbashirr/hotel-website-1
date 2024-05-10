import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { ReactNode } from "react";

const HotelWebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HotelWebsiteLayout;
