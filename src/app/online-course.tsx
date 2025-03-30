"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
// import BashLogo from "../../public/logos/bash-2.svg";
// import OpenSourceLogo from "@/public/logos/open-source-logo.svg";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: AcademicCapIcon,
    title: "Script Solutions",
    description:
      "Simple script to fix every common errors and bugs in your lab experiments.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Open Source",
    description:
      "This is a free and open-source project. Anyone can contribute to it.",
  },
  {
    icon: InboxIcon,
    title: "Easy to run",
    description: "Just get the script and run it in your terminal as sudo.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Unifix
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 text-2xl max-w-lg px-4 text-left !text-gray-900 lg:px-0  "
          >
            Here, you will find solution scripts for all the common errors and bugs
            that you might encounter during your lab experiments. <br />
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
