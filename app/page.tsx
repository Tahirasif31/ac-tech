import Image from "next/image";
import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { ThreeDCard } from "@/components/ThreeDCard";
import { LampSection } from "@/components/LampSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ExpertsTeam />
    </div>
  );
}
