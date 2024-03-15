"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Exceptional Service! The team at AC Tech exceeded my expectations with their AC repair and duct cleaning services. Prompt response, thorough inspection, and efficient repairs left my home feeling cooler and fresher than ever. Highly recommend their expertise!",
    name: "Ahmed Abdullah Al-Mansoori",
    title: "Ras Al Khaimah",
  },
  {
    quote:
      "شريك صيانة فعال للشركات! AC Tech كانت شريكنا الموثوق به لسنوات، وتقدم خدمات موثوقة في إصلاح تكييف الهواء وتنظيف الأنابيب. ما زالوا يبهرون بمهنيتهم وخبرتهم",
    name: "عبدالله صالح الفلاسي",
    title: "أم القيوين",
  },
  {
    quote:
      "Reliable Partner for Corporate Maintenance! As a facilities manager, I entrust AC Tech with the maintenance of our corporate AC systems and ductwork. Their team's expertise and dedication ensure that our facilities remain at optimal comfort levels year-round. ",
    name: "Zahraat Al-Sayf",
    title: "Fujairah",
  },
  {
    quote:
      "خدمة بخمس نجوم! لا يمكنني القول بما فيه الكفاية عن [اسم الشركة]. من جدولة الموعد إلى إكمال العمل، قدم فريقهم الاحترافية والخبرة في كل خطوة من الطريق",
    name: "خالد علي الحمادي",
    title: "عجمان",
  },
  {
    quote:
      "Outstanding Experience! I called AC Tech for AC repair and duct cleaning, and I'm incredibly impressed with the quality of their work. ",
    name: "Fatima Mohammed Al-Hashemi",
    title: "Abu Dhabi ",
  },
];
