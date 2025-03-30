import React from "react";
import { Typography } from "@material-tailwind/react";

interface BackgroundCardProps {
  title: string;
  children: React.ReactNode;
}

export function BackgroundCard({ title, children }: BackgroundCardProps) {
  return (
    <div className="relative group w-[450px] h-[200px] max-w-4xl mx-auto flex flex-col items-center px-8 py-6 bg-gray-900 rounded-xl border border-transparent overflow-hidden">
      {/* Neon border effect */}
      <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-blue-500 group-hover:translate-x-full transition-transform duration-1000"></span>
      <span className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent to-blue-500 group-hover:-translate-x-full transition-transform duration-1000 delay-500"></span>
      <span className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent to-blue-500 group-hover:translate-y-full transition-transform duration-1000 delay-250"></span>
      <span className="absolute bottom-0 left-0 h-full w-1 bg-gradient-to-t from-transparent to-blue-500 group-hover:-translate-y-full transition-transform duration-1000 delay-750"></span>

      {/* Content */}
      <div className="relative z-10">
        <Typography variant="h2" className="text-center" color="white">
          {title}
        </Typography>
        <Typography
          color="white"
          className="my-2 text-base w-full text-center font-normal"
        >
          {children}
        </Typography>
      </div>
    </div>
  );
}

export default BackgroundCard;