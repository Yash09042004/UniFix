"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Unifix
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Facing errors during labs? Don't get frustrated... <br />
          Unifix is here for you-An one stop solution for all your common errors and bugs in your lab experiments
          
        </Typography>
        <div>
          <Button variant="gradient" color="white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
