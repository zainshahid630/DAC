import React, { useState } from "react";
import { NavBar } from "./navBar";
import Bac from '../mnt/data/bac.png';

import arrow2 from '../mnt/data/Curved_Arrow_Down.png'
import arrow1 from '../mnt/data/Curved_Arrow_Downward.png'

import ilus from '../mnt/data/illus.png'



export const OurProcess = () => {
  const processSteps = [
    {
      id: "01",
      title: "Initial Inquiry",
      top: "top-[45px]",
      left: "left-0",
      icon: "g8djp9cf",
      arrow: null,
    },
    {
      id: "02",
      title: "Evaluation & LOI Issuance",
      top: "top-[170px]",
      left: "left-[300px]",
      icon: "l5bo0mmf",
      arrow: arrow1,
    },
    {
      id: "03",
      title: "Due Diligence & Negotiations",
      top: "top-[340px]",
      left: "left-0",
      icon: "r88nwg34",
      arrow: arrow2,
    },
    {
      id: "04",
      title: "Final Agreement & Funding",
      top: "top-[510px]",
      left: "left-[300px]",
      icon: "xto02uih",
      arrow: arrow1,
    },
  ];

  return (
  
	  <div className="flex items-center justify-center  bg-gray-100 px-4">
<section className="w-full bg-white px-4 sm:px-16 py-16">
  <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center max-w-[1440px] mx-auto">

    {/* === Mobile Grid Steps (Below sm) === */}
    <div className="w-full block sm:hidden">
      <div className="grid grid-cols-1 gap-8">
        {processSteps.map((step,index) => (
          <div key={step.id} className="relative bg-white border border-neutral-200 shadow-md rounded p-6">
            <img
             src={    index != 1 ? `https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/${step.icon}_expires_30_days.png` :ilus }
             className="absolute w-[48px] h-[48px] -top-6 right-4 object-contain "
              alt="icon"
            />
            <h3 className="text-3xl font-bold text-neutral-800">{step.id}</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-1.5 h-6 bg-orange-400" />
              <span className="text-lg text-neutral-500 font-medium">
                {step.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

	<div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-16 gap-8">
  {/* Left Side: Visual Process Steps */}
  <div className="relative hidden sm:block h-[710px] flex-shrink-0 w-full lg:w-[700px] overflow-x-auto">
    <div className="absolute">
      {processSteps.map((step,index) => (
        <div
          key={step.id}
          className={`absolute ${step.top} ${step.left} w-[320px] h-[200px]`}
        >
         <div className="relative flex flex-col bg-white border border-neutral-200 shadow-md rounded p-6 w-[250px]">
  <img
    src={    index != 1 ? `https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/${step.icon}_expires_30_days.png` :ilus }
    className={`absolute w-[64px] h-[64px] -top-12 object-contain ${
      index === 1 ? 'left-0' : 'right-0'
    }`}
    alt="icon"
  />
  <h3 className="text-4xl font-bold text-neutral-800">{step.id}</h3>
  <div className="flex items-center gap-2 mt-2">
    <div className="w-1.5 h-7 bg-orange-400" />
    <span className="text-xl text-neutral-500 font-medium">
      {step.title}
    </span>
  </div>
</div>

          {step.arrow && (
  <>
    {index === 2 ? (
      <img
        src={step.arrow}
        alt="arrow"
        className="absolute w-[140px] h-[140px] top-[-150px] left-[130px]"
      />
    ) : (
      <img
        src={step.arrow}
        alt="arrow"
        className="absolute w-[140px] h-[140px] top-[-150px] left-[10px]"
      />
    )}
  </>
)}

        </div>
      ))}
    </div>
  </div>

  {/* Right Side: Text Content */}
  <div className="w-full lg:max-w-[400px] px-2 sm:px-0 lg:mb-[250px]">
    <h2 className="text-[#2947A9] text-3xl sm:text-4xl font-bold mb-4">
      Our Process
    </h2>
    <p className="text-sm sm:text-base text-black mb-6">
      Our streamlined acquisition process allows us to move quickly—from initial interest to funding in as little as 30 to 90 days post-LOI.
    </p>
    <button className="bg-[#2947A9] text-white text-sm sm:text-base font-bold px-6 py-3 rounded">
      Contact Us
    </button>
  </div>
</div>

  </div>
</section>
</div>




  );
};
