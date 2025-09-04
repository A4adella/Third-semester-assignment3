import React, { useState } from "react";
import data from "../data/data.json";
import NavBar from "../components/navbar";

type Destination = {
  name: string;
  images: { png: string; webp?: string };
  description: string;
  distance: string;
  travel: string;
};

export default function DestinationPage(): React.JSX.Element {
  const destinations: Destination[] = data.destinations;
  const [active, setActive] = useState<number>(0);
  const current = destinations[active];

  return (
    <div
      className="
        min-h-screen w-full text-white
        bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center
        md:bg-[url('/assets/destination/background-destination-tablet.jpg')]
        lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]
      "
    >
      <NavBar />

      <main className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-16 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        {/* LEFT SIDE: title + image */}
        <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10">
          {/* title row */}
          <div className="flex items-start gap-6 text-nowrap">
           <div className="text-white font-['Barlow Condensed'] text-[28px] font-bold leading-normal tracking-[4.725px] opacity-25">
          01
        </div>

        <div className="text-white font-['Barlow Condensed'] text-[28px] font-normal leading-normal tracking-[4px]">
            PICK YOUR DESTINATION
        </div>
          </div>

          {/* image */}
          <figure className="flex justify-center lg:justify-start w-full lg:mt-6">
            <img
              src={current.images.png}
              alt={current.name}
              className="w-40 h-40 md:w-80 md:h-80 lg:w-[445px] lg:h-[445px] object-contain"
            />
          </figure>
        </section>

        {/* RIGHT SIDE: details */}
        <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 lg:mt-20">
          {/* tabs */}
          <nav aria-label="Destinations" className="flex gap-6">
            {destinations.map((d, i) => (
              <button
                key={d.name}
                onClick={() => setActive(i)}
                className={`
                  pb-2 border-b-[3px]
                  tracking-widest font-['Barlow Condensed'] uppercase
                  ${
                    active === i
                      ? "border-white text-white hover:cursor-pointer"
                      : "border-transparent text-[#D0D6F9] hover:border-white/50 hover:cursor-pointer"
                  }
                  text-base
                `}
                aria-pressed={active === i}
              >
                {d.name}
              </button>
            ))}
          </nav>

          {/* name */}
          <h1
            className="text-white text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-['Bellefair'] uppercase text-center lg:text-left leading-none"
          >
            {current.name}
          </h1>

          {/* description */}
          <p className="text-[#D0D6F9] font-['Barlow'] text-base md:text-lg max-w-[38rem] text-center lg:text-left leading-relaxed">
            {current.description}
          </p>

          <div className="w-full border-t border-white/20" />

          {/* stats */}
          <dl className="w-full flex flex-col md:flex-row gap-6 md:gap-12 text-center lg:text-left">
            <div className="flex-1">
              <dt className="text-[#D0D6F9] text-sm tracking-widest uppercase font-['Barlow_Condensed']">
                Avg. distance
              </dt>
              <dd className="text-white text-3xl font-['Bellefair'] uppercase">
                {current.distance}
              </dd>
            </div>
            <div className="flex-1">
              <dt className="text-[#D0D6F9] text-sm tracking-widest uppercase font-['Barlow_Condensed']">
                Est. travel time
              </dt>
              <dd className="text-white text-3xl font-['Bellefair'] uppercase">
                {current.travel}
              </dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}
