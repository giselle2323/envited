import * as React from "react";
import { VscChevronRight } from "react-icons/vsc";
import LandingImg from "../../images/event.png";
import Calendar from "../../images/calendar.svg";
import Location from "../../images/location.svg";

function CreateEvent() {
  return (
    <div className="container mx-auto md:px-11 flex flex-col md:flex-row bg-backgroundEvent min-h-screen">
      <div>
        <img src={LandingImg} alt="landing-hero" />
      </div>

      <div className="text-left px-5 py-3">
        <h2 className="font-bold text-heading text-[28px]">Birthday Bash</h2>
        <p className="text-gray2 text-sm">Hosted by Elysia</p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-[20px] justify-between items-center">
            <div className="flex gap-[20px]">
              <div className="w-[48px] h-[48px] rounded-[10px] p-[14px] flex justify-center items-center drop-shadow-iconBox bg-white">
                <img src={Calendar} alt="calendar" />
              </div>
              <div>
                <p className="text-base text-heading">18 August 6:00PM</p>
                <p className="text-sm text-gray2">
                  to 19 August 1:00PM UTC +10
                </p>
              </div>
              
            </div>
            <div>
                <VscChevronRight style={{color: "#BDBDBD"}} />
              </div>
          </div>
          <div className="flex gap-[20px] justify-between items-center">
            <div className="flex gap-[20px]">
              <div className="w-[48px] h-[48px] rounded-[10px] p-[14px] flex justify-center items-center drop-shadow-iconBox bg-white">
                <img src={Location} alt="calendar" />
              </div>
              <div>
                <p className="text-base text-heading">Street name</p>
                <p className="text-sm text-gray2">Suburb, State, Postcode</p>
              </div>
            </div>
            <div>
              <VscChevronRight style={{color: "#BDBDBD"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
