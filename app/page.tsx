import Image from "next/image";
import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";
import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";

const review = [{}];

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ExpertsTeam />
      <div className="mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
        <p className="text-[38px] font-[600] text-center pb-8 md:pb-10">
          Our Services
        </p>
        <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
          <Meteor />
          <Meteor />
          <Meteor />
          <Meteor />
          <Meteor />
          <Meteor />
        </div>
      </div>
      <BestService />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
