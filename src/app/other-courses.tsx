"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/blogs/blog1.jpg",
    title: "DBMS lab",
    desc: "Contains all solutions for errors and bugs occurring during Database Management System lab sessions.",
    buttonLabel: "Click here",
  },
  {
    img: "/image/blogs/blog2.png",
    title: "Unix Operating System lab",
    desc: "Contains all solutions for errors and bugs occurring during Unix Operating System lab sessions.",
    buttonLabel: "Click here",
  },
  {
    img: "/image/blogs/blog3.jpeg",
    title: "Java Programming lab",
    desc: "Contains all solutions for errors and bugs occurring during Java Programming lab sessions.",
    buttonLabel: "Click here",
  },
  {
    img: "/image/blogs/blog4.png",
    title: "Android Programming lab",
    desc: "Contains all solutions for errors and bugs occurring during Android Programming lab sessions.",
    buttonLabel: "Click here",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Explore our solutions
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-900 lg:w-6/12"
        >
          Looking for solutions to common lab errors? We have got you covered!
          <br />
          Explore our solutions to common lab errors that frustrate you a lot!
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
