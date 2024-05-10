"use client";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('/images/hero.jpg')] h-[calc(100vh-80px)] bg-center bg-cover z-10">
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
      <div className="container mx-auto px-6 w-full h-full">
        <div className="h-full flex items-center justify-center text-center">
          <div className="text-white z-20">
            <h1 className="mb-4 leading-tight text-5xl font-extrabold capitalize">
              Weclome to Royal Hotel
            </h1>
            <p className="text-lg mb-4">
              Explore, discover, create memories. Book your adventure.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 rounded-md shadow-sm py-3 px-6">
              Explore Our Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
