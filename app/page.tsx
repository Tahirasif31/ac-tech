import Image from "next/image";
import { Hero } from "./../components/Hero";
import { About } from "./../components/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
