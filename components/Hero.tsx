"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Nav from "./Nav";
import { HeroText } from "./HeroText";

export function Hero() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?t=st=1709932682~exp=1709936282~hmac=f55fdbe0bb24d43ed658007a8826417f3189e5345d09c54288a3f0372260758a&w=996",
    "https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit_155003-20897.jpg?t=st=1709932902~exp=1709936502~hmac=0433f4a99fe507800eb13182d03d3db568e56a14e0d5c61a130b3a8b6cbdb2c7&w=996",
    "https://plus.unsplash.com/premium_photo-1682098215872-b734c9c3d4a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider
      className="h-[45rem] flex flex-col justify-start w-full"
      images={images}
    >
      <Nav />
      <HeroText />
    </ImagesSlider>
  );
}
