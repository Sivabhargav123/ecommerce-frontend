import React from "react";
import EcomVideo from "../assets/ecomVideo.mp4";

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden text-white flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={EcomVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
      <div className="relative z-20 text-center space-y-4 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-radial from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
          Welcome to Our Shop!
        </h1>
        <p className="text-lg md:text-xl italic bg-gradient-radial from-red-400 via-black to-white bg-clip-text text-transparent animate-gradient">
          Find the best{" "}
          <span className="font-bold underline decoration-wavy text-white-300">
            products
          </span>{" "}
          here.
        </p>
      </div>
    </section>
  );
};

export default Hero;
