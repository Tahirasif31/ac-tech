"use client";
import { Button } from "./ui/moving-borders";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
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
    <div className="flex flex-col items-center justify-center h-[40rem] z-50 ">
      <p className="text-neutral-200 text-[13px] sm:text-base  ">
        Efficient solutions for your AC troubles.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="animate-shimmer py-1 text-[13px] md:py-[9px] bg-slate-900 items-center justify-center rounded-[1.75rem] border-neutral-200  border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Whatsapp
        </button>
        <Button
          borderRadius="1.75rem"
          className="dark:bg-slate-900 text-[13px] text-white dark:text-white border-neutral-200 dark:border-slate-800 px-1 py-[12px]"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
