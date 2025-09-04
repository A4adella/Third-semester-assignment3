import React, { useState } from "react";
import data from "../data/data.json";
import NavBar from "../components/navbar";

type CrewMember = {
  name: string;
  images: { png: string; webp?: string };
  role: string;
  bio: string;
};

export default function CrewPage(): React.JSX.Element {
  const crew: CrewMember[] = data.crew;
  const [active, setActive] = useState<number>(0);
  const current = crew[active];

  return (
    <div
      className="
        min-h-screen w-full text-white
        bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center
        md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
        lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]
      "
    >
      <NavBar />

      <main className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-16 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        {/* LEFT SIDE: text */}
        <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10">
          {/* Title row */}
          <div className="flex items-center gap-6">
          <div className="text-white font-['Barlow Condensed'] text-[28px] font-bold leading-normal tracking-[4.725px] opacity-25">
          02
        </div>

        <div className="text-white font-['Barlow Condensed'] text-[28px] font-normal leading-normal tracking-[4px]">
            MEET YOUR CREW
        </div>
          </div>

          {/* Crew details */}
          <div className="flex flex-col gap-6 text-center lg:text-left lg:mt-20">
            <h3 className="opacity-50 text-white text-2xl md:text-3xl font-['Bellefair'] uppercase">
              {current.role}
            </h3>
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-['Bellefair'] uppercase">
              {current.name}
            </h1>
            <p className="text-[#D0D6F9] font-['Barlow'] text-base md:text-lg max-w-[38rem] leading-relaxed">
              {current.bio}
            </p>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-4 mt-6">
            {crew.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  w-3.5 h-3.5 rounded-full transition
                  ${active === i ? "bg-white" : "bg-white/20 hover:bg-white/50"}
                `}
                aria-label={`Show crew member ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* RIGHT SIDE: image */}
        <section className="w-full lg:w-1/2 flex justify-center items-end">
          <div className="relative flex justify-center">
            <img
              src={current.images.png}
              alt={current.name}
              className="w-60 md:w-80 lg:w-[539px] object-contain"
            />
            {/* gradient effect under image */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-black/50" />
          </div>
        </section>
      </main>
    </div>
  );
}
