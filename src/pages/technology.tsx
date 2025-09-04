import React from "react";
import { useState } from "react";
import data from "../data/data.json";
import NavBar from "../components/navbar";

type Technology = {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
};

export default function TechnologyPage(): React.JSX.Element {
  const technologies: Technology[] = data.technology;
  const [active, setActive] = useState<number>(0);
  const current = technologies[active];

return (
  <div
    className="
      min-h-screen w-full text-white
      bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center
      md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
      lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]
    "
  >
    <NavBar />

    {/* Title row */}
    <div className="flex justify-start items-center gap-6 mt-6 md:mt-10 lg:mt-20 px-6 md:px-10 lg:px-16">
      <div className="text-white font-['Barlow_Condensed'] text-[28px] font-bold tracking-[4.725px] opacity-25">
        03
      </div>
      <div className="text-white font-['Barlow_Condensed'] text-[28px] tracking-[4px]">
        SPACE LAUNCH 101
      </div>
    </div>

    {/* Main content */}
    <main
      className="
        max-w-[1200px] mx-auto
        flex flex-col-reverse lg:flex-row
        items-center lg:items-start
        gap-12 lg:gap-20
        px-6 md:px-10 lg:px-16
        py-12 lg:py-20
      "
    >
      {/* LEFT SIDE: pagination + content */}
      <section className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
        {/* Pagination buttons */}
        <div className="flex lg:flex-col gap-6">
          {technologies.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                w-14 h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center
                text-xl lg:text-3xl font-['Bellefair'] uppercase transition
                ${
                  active === i
                    ? "bg-white text-black"
                    : "border border-white/25 text-white hover:border-white"
                }
              `}
              aria-label={`Show technology ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Tech info */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-[640px]">
          <p className="opacity-50 text-white text-base md:text-lg lg:text-xl font-['Barlow_Condensed'] tracking-[2px] uppercase">
            THE TERMINOLOGY…
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-['Bellefair'] uppercase">
            {current.name}
          </h1>
          <p className="text-[#D0D6F9] text-base md:text-lg leading-relaxed font-['Barlow']">
            {current.description}
          </p>
        </div>
      </section>

      {/* RIGHT SIDE: image */}
      <section className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <picture>
          <source media="(min-width: 1024px)" srcSet={current.images.portrait} />
          <img
            src={current.images.landscape}
            alt={current.name}
            className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] object-contain"
          />
        </picture>
      </section>
    </main>
  </div>
);

}
