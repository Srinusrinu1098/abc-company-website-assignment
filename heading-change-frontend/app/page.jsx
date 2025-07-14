import React from "react";
import SignupFormDemo from "../components/SignupFormDemo";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black">
      <div className="w-full max-w-md">
        <SignupFormDemo />
      </div>
    </div>
  );
}

export default Home;
