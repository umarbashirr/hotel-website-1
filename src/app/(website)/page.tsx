import AboutSectionCard from "./_components/about-section-card";
import HeroSection from "./_components/hero-section";
import QuickRoomAvailabilityCheckForm from "./_components/quick-room-availability-check-form";
import RoomsAndSuites from "./_components/rooms-and-suites";
import Services from "./_components/services";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <QuickRoomAvailabilityCheckForm />
      <AboutSectionCard />
      <RoomsAndSuites />
      <Services />
      {/* <BlogsArchive /> */}
    </div>
  );
};

export default HomePage;
