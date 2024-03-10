import Image from "next/image";
import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ExpertsTeam />
      <div className="mx-auto xl:max-w-[1080px] md:max-w-[1000px]">
        <div className="px-2 sm:px-6 grid md:grid-cols-3 md:gap-2 align-middle items-center sm:grid-cols-2 gap-5 justify-items-center">
          <Meteor />
          <Meteor />
          <Meteor />
          <Meteor />
          <Meteor />
          <Meteor />
        </div>
      </div>
    </div>
  );
}
