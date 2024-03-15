import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";
import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";
import { GlobeDemo } from "@/components/Globe";
import { LayoutGridDemo } from "@/components/LayoutGrid";

const review = [{}];

const SERVICES = [
  {
    title: "Split / Ac Repair",
    description:
      "Our Split AC repair service offers quick and efficient solutions to keep your cooling system running smoothly. Our expert technicians diagnose and fix issues with precision, ensuring optimal performance and comfort.",
  },
  {
    title: "Split / Ac Installation",
    description:
      "Our Reliable Split AC installation services reliably guarantee efficient cooling. Our skilled technicians provide precise setup, ensuring maximum comfort and optimal performance tailored to your unique environment.",
  },
  {
    title: "Split / Ac Maintenance",
    description:
      "Ensure your Split/AC system operates flawlessly with our maintenance services. Our expert technicians conduct thorough inspections, cleanings, and tune-ups to optimize performance and prolong the lifespan of your unit.",
  },

  {
    title: "Duct Cleaning Service",
    description:
      "Enhance your home's air quality with our professional duct cleaning service. Our experienced team eliminates dust, debris, and allergens, promoting a cleaner and healthier living space for you and your family.",
  },
  {
    title: "Ductwork Inspection / Repair",
    description:
      "Experience improved air circulation and quality with our meticulous ductwork inspection and repair services. Trust our skilled technicians to optimize your duct system for enhanced comfort and efficiency.",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Secure the longevity of your HVAC system with our preventive maintenance plans. Our tailored packages include regular inspections and tune-ups to keep your system running efficiently year-round.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="about">
        <About />
      </section>
      <GlobeDemo />
      <ExpertsTeam />
      <section
        id="services"
        className="mx-auto xl:max-w-[1080px] md:max-w-[1000px]"
      >
        <p className="text-[38px] font-[600] text-center pb-5 md:pb-10">
          Our Services
        </p>
        <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
          {SERVICES.map((ser) => {
            return (
              <Meteor
                key={ser.title}
                title={ser.title}
                description={ser.description}
              />
            );
          })}
        </div>
      </section>
      <BestService />
      <section>
        <p className="text-[38px] font-[600] text-center">
          AC Service&apos;s Matrix
        </p>
        <LayoutGridDemo />
      </section>
      <InfiniteMovingCardsDemo />
    </div>
  );
}
