import * as React from "react";
import LandingImg from "../../images/landing.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:flex-row-reverse bg-backgroundLanding min-h-screen overflow-scroll pt-20">
      <div >
        <h1 className="text-4xl font-bold text-heading">
          Imagine if <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
            Snapchat
          </span>{" "}
          <br />
          had events.
        </h1>
        <p className="text-gray1 text-base">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>

      <div className="py-8 px-11">
        <img src={LandingImg} alt="landing-hero" className="mb-12" />
        <div>
        <Link
          to="create"
          className="py-8 px-[21px] rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
        >
          🎉 Create my event
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
