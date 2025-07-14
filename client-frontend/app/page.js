import Image from "next/image";

import React from "react";
import Headers from "./_components/Headers";
import HeroSection from "./_components/HeroSection";
import Footer from "./_components/Footer";

function Home() {
  return (
    <div className="h-[100%]">
      {/* NavBar Section */}
      <Headers />
      {/* Hero Section */}
      <HeroSection />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
