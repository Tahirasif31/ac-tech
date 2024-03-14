"use client";
import Image from "next/image";
import { Button } from "./ui/moving-borders";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
export function HeroText() {
  const words = [
    {
      text: "Stay Cool,",
      className: "text-white",
    },
    {
      text: "we'll",
      className: "text-white",
    },
    {
      text: "Fix",
      className: "text-white",
    },
    {
      text: "Your AC",
      className: "text-white",
    },
    {
      text: "Fast.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] z-40">
      <p className="text-neutral-200 text-[13px] sm:text-base  ">
        Efficient solutions for your AC troubles.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={"https://chatwith.io/s/ac-repair-service"} target="_blank">
          <button className="flex gap-1 py-1 align-middle animate-shimmer text-[13px] md:py-[9px] text-white bg-slate-900 justify-center rounded-[1.75rem] border-neutral-200  border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span>Whatsapp</span>
            <Image
              src={"/whatsapp.png"}
              alt="whatsapp"
              className="mt-[2px]"
              width={16}
              height={16}
            />
          </button>
        </Link>
        <Button
          borderRadius="1.75rem"
          height={9}
          className="flex gap-1 dark:bg-slate-900 text-[13px] text-white dark:text-white border-neutral-200 dark:border-slate-800 px-1 md:py-[12px]"
        >
          Book Now
          <Image
            src={"/booking.png"}
            alt="whatsapp"
            className="mt-[2px]"
            width={16}
            height={16}
          />
        </Button>
      </div>
    </div>
  );
}
