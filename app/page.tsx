import Image from "next/image";
import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ExpertsTeam />
    </div>
  );
}
