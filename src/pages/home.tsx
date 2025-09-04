import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="
        min-h-screen w-full flex flex-col text-white
        bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center
        md:bg-[url('/assets/home/background-home-tablet.jpg')]
        lg:bg-[url('/assets/home/background-home-desktop.jpg')]
      "
    >
      {/* Navigation */}
      <NavBar />

      {/* Content */}
      <main
        className="
          flex-1 flex flex-col items-center justify-between gap-12 p-6
          md:justify-center md:gap-20 md:py-32
          lg:flex-row lg:items-end lg:justify-between lg:mx-12
        "
      >
        {/* Text Section */}
        <section
          className="
            flex flex-col gap-6 text-center max-w-[540px]
            lg:text-left
          "
        >
          <h2
            className="
            text-[#D0D6F9] font-['Barlow'] text-[18px] font-normal leading-[180%] self-stretch
              text-base tracking-widest
              md:text-3xl md:tracking-[4px]
            "

          >
            SO, YOU WANT TO TRAVEL TO
          </h2>

          <h1
            className="
              font-['Bellefair'] text-7xl
              md:text-9xl
            "
          >
            SPACE
          </h1>

          <p
            className="
              text-color-blue-300 font-['Barlow']
              md:text-lg md:leading-7
              lg:text-xl lg:leading-loose
              text-[#D0D6F9] text-[18px] font-normal leading-[180%] self-stretch
            "
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Sit back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </section>

        {/* Explore Button */}
        <Link to={"/destination"} aria-label="Explore destination page">

         <div
          className="
            flex justify-center items-center
            lg:justify-end lg:flex-1
          "
        >
          <button
            className="
              w-36 h-36 md:w-64 md:h-64 rounded-full
              bg-white 
              font-['Bellefair'] uppercase tracking-widest
              text-lg md:text-3xl
              text-blue-900
              flex items-center justify-center
              transition-all duration-300
              hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)]
            "
            aria-label="Explore"
          >
            EXPLORE
          </button>
        </div>
        </Link>

      </main>
    </div>
  );
}
