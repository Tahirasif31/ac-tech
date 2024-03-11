"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Us",
    description:
      "we're dedicated to keeping you cool and comfortable year-round. With 10 Years of experience in the air conditioning repair industry, our team of certified technicians is committed to delivering top-notch service and solutions tailored to your needs. Whether it's fixing a malfunctioning unit, installing a new system, or providing routine maintenance, we prioritize reliability, efficiency, and customer satisfaction. Trust us to keep your home or business at the perfect temperature, so you can enjoy peace of mind and optimal comfort. Contact us today to experience the difference!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/about-one.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "Our mission at Ac Tech is to provide reliable, efficient, and affordable air conditioning repair services to our valued customers. We strive to ensure optimal comfort and satisfaction by delivering prompt and effective solutions to all AC-related issues. With a focus on professionalism, integrity, and customer-centricity, we aim to exceed expectations and build lasting relationships with our clients. Trust us to keep your home or business cool and comfortable, no matter the season. Your comfort is our priority.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mission-one.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Service Areas",
    description:
      "we proudly serve a wide range of areas across the United Arab Emirates, including Sharjah, Dubai, and several other cities. Our commitment to excellence extends to every corner of the region, ensuring that residents and businesses alike have access to top-notch air conditioning repair services. Whether you're located in bustling urban centers or tranquil suburban neighborhoods, our team is dedicated to providing prompt, reliable, and professional solutions to your AC needs. With our extensive service area coverage, you can trust us to keep you cool and comfortable no matter where you are in the UAE. Contact us today to schedule your appointment and experience the difference of working with AC Tech",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/location.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function About() {
  return <StickyScroll content={content} />;
}
