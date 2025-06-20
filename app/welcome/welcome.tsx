// Part 1: Hero + "What We Offer" Section (Tailwind Responsive)

import React, { useState } from "react";
import { NavBar } from "./navBar";
import Bac from '../mnt/data/bac.png'
import { OurProcess } from "./OurProcess";
import Footer from "./Footer";

export const Welcome = () => {// Part 1–3: Hero + "What We Offer" + Acquisition Criteria + Our Process Section (Tailwind Responsive)
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [input3, setInput3] = useState("");
	const [input4, setInput4] = useState("");
	const [change4 , onChangeInput4]=useState("")
	
	

	  return (
		<div className="flex flex-col bg-white">
		  <div className="flex flex-col w-full">
			<NavBar />
			<div
        className="w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Bac})`,height:'500px' }}

      >
    <div className="absolute inset-0 bg-black/40" />
	<div className="relative w-fit clip-polygon bg-white shadow-xl px-6 py-4 sm:px-10 sm:py-6 text-center mx-auto">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14161E] relative inline-block mx-auto">
    Brewery Acquisition Corp.
    <div className="h-[2px] bg-[#14161E] w-full mt-2 mx-auto" />
  </h1>
  <p className="text-sm sm:text-base text-[#14161E] mt-3 p-2">
    Strategic Capital for Ontario’s Craft Brewing Future
  </p>
</div>


      </div>

	
			{/* What We Offer Section */}
			<section className="w-full flex flex-col items-center bg-white pt-20 pb-24 px-4">
  <h2 className="text-blue-800 text-[40px] sm:text-[60px] font-bold text-center mb-16">
    What We Offer
  </h2>

  <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
    {/* Card 1 */}
    <div className="flex flex-col bg-white border border-gray-300 rounded-md p-6 shadow w-full sm:w-[45%] lg:w-[30%]">
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/33itn8t9_expires_30_days.png"
        className="w-10 h-10 mb-4 ml-2"
        alt="Strategic Capital"
      />
      <h3 className="text-gray-800 text-lg font-bold mb-2 ml-2">Strategic Capital</h3>
      <p className="text-gray-500 text-sm ml-2">
        Immediate funding to support brewery expansion, new product lines, or operational upgrades.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col bg-white border border-gray-300 rounded-md p-6 shadow w-full sm:w-[45%] lg:w-[30%]">
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/yc6ppbvc_expires_30_days.png"
        className="w-10 h-10 mb-4 ml-2"
        alt="Operational Support"
      />
      <h3 className="text-gray-800 text-lg font-bold mb-2 ml-2">Operational Support</h3>
      <p className="text-gray-500 text-sm ml-2">
        Guidance from a team with a proven track record in beverage and retail.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col bg-white border border-gray-300 rounded-md p-6 shadow w-full sm:w-[45%] lg:w-[30%]">
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/mic8wm59_expires_30_days.png"
        className="w-10 h-10 mb-4 ml-2"
        alt="Distribution Enablement"
      />
      <h3 className="text-gray-800 text-lg font-bold mb-2 ml-2">Distribution Enablement</h3>
      <p className="text-gray-500 text-sm ml-2">
        Access to established wholesale and retail distribution networks across regions.
      </p>
    </div>
  </div>
</section>


	
			{/* Acquisition Criteria Section */}
			<section className="bg-[#efefef] flex flex-col items-start px-6 sm:px-16 pt-16 pb-32">
  <h2 className="text-[#2947A9] text-[40px] sm:text-[60px] font-bold mb-6">
    Acquisition Criteria
  </h2>

  <p className="text-[#282D3D] text-xl mb-16 max-w-4xl">
    We’re currently seeking Ontario-based craft breweries that meet the following profile:
  </p>

  <div className="flex flex-col sm:flex-row gap-6 items-start">
    <div className="flex flex-col gap-10 text-[#282D3D] text-lg sm:text-xl max-w-4xl">
      
      <div className="flex items-start gap-4">
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/evoecjwa_expires_30_days.png"
          alt="dot"
          className="w-4 h-4 mt-1"
        />
        <p>Production capacity under 400,000 hectolitres/year</p>
      </div>

      <div className="flex items-start gap-4">
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/rcpuhrlz_expires_30_days.png"
          alt="dot"
          className="w-4 h-4 mt-1"
        />
        <p>Fully operational and brewing-ready facilities</p>
      </div>

      <div className="flex items-start gap-4">
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/d31v7cj6_expires_30_days.png"
          alt="dot"
          className="w-4 h-4 mt-1"
        />
        <p>Ambition to grow with the support of strategic capital and industry expertise</p>
      </div>

    </div>
  </div>
</section>

	
			{/* Our Process Section */}
			<OurProcess />


	  <section className="bg-[#F6F8F7] py-16 px-6 sm:px-32 flex flex-col items-center">
          <h2 className="text-[#282D3D] text-[36px] font-bold text-center mb-6">
            Interested in partnering or learning more?
          </h2>
          <p className="text-[#282D3D] text-lg text-center mb-10">
            Please fill out the form below or contact us directly at <strong>partner@bacorp.ca</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl mb-6">
            <input
              type="text"
              placeholder="Your Name*"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-base text-gray-700"
            />
            <input
              type="email"
              placeholder="Email*"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-base text-gray-700"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl mb-6">
            <select
              className="flex-1 p-3 border border-gray-300 rounded-md text-base text-gray-500"
     
            >
              <option>Reason for Contacting*</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-md text-base text-gray-700"
            />
          </div>

          <textarea
            placeholder="Message"
            className="w-full max-w-4xl p-4 border border-gray-300 rounded-md text-base text-gray-700 mb-4 min-h-[150px]"
          />

          <button

            className="mt-4 bg-[#2947A9] text-white text-lg font-bold px-10 py-4 rounded"
          >
            Submit
          </button>
        </section>
	<Footer input4={change4} onChangeInput4={onChangeInput4} />
		  </div>
		</div>
	  );
	};
	

	