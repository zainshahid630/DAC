// Part 1: Hero + "What We Offer" Section (Tailwind Responsive)

import React, { useState } from "react";
import { NavBar } from "./navBar";
import Bac from '../mnt/data/bac.png'

export const Welcome = () => {// Part 1–3: Hero + "What We Offer" + Acquisition Criteria + Our Process Section (Tailwind Responsive)
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [input3, setInput3] = useState("");
	const [input4, setInput4] = useState("");
	
	

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
  <p className="text-sm sm:text-base text-[#14161E] mt-3">
    Strategic Capital for Ontario’s Craft Brewing Future
  </p>
</div>


      </div>

	
			{/* What We Offer Section */}
			<section className="w-full flex flex-col items-center bg-white pt-20 pb-24 px-4">
			  <h2 className="text-blue-800 text-[40px] sm:text-[60px] font-bold text-center mb-16">
				What We Offer
			  </h2>
			  <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
				{/* Card 1 */}
				<button
				  onClick={() => alert("Pressed!")}
				  className="flex flex-col bg-white border border-gray-300 rounded-md p-6 w-full md:w-72 shadow hover:shadow-lg transition"
				>
				  <img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/33itn8t9_expires_30_days.png"
					className="w-10 h-10 mb-4 ml-2"
					alt="Strategic Capital"
				  />
				  <h3 className="text-gray-800 text-lg font-bold mb-2 ml-2">Strategic Capital</h3>
				  <p className="text-gray-500 text-sm ml-2 w-[233px]">
					Immediate funding to support brewery expansion, new product lines, or operational upgrades.
				  </p>
				</button>
	
				{/* Card 2 */}
				<div className="flex flex-col bg-white border border-gray-300 rounded-md p-6 w-full md:w-72 shadow">
				  <img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/yc6ppbvc_expires_30_days.png"
					className="w-10 h-10 mb-4 ml-2"
					alt="Operational Support"
				  />
				  <h3 className="text-gray-800 text-lg font-bold mb-2 ml-2">Operational Support</h3>
				  <p className="text-gray-500 text-sm ml-2 w-[246px]">
					Guidance from a team with a proven track record in beverage and retail.
				  </p>
				</div>
	
				{/* Card 3 */}
				<div className="flex flex-col bg-white border border-gray-300 rounded-md p-6 w-full md:w-72 shadow">
				  <img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/mic8wm59_expires_30_days.png"
					className="w-10 h-10 mb-4 ml-2"
					alt="Distribution Enablement"
				  />
				  <h3 className="text-gray-800 text-lg font-bold mb-2 ml-2">Distribution Enablement</h3>
				  <p className="text-gray-500 text-sm ml-2 w-[223px]">
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
			  <p className="text-[#282D3D] text-xl mb-16">
				We’re currently seeking Ontario-based craft breweries that meet the following profile:
			  </p>
			  <div className="flex flex-col sm:flex-row gap-6 items-start">
				<div className="flex flex-col items-center gap-10">
				  <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/evoecjwa_expires_30_days.png" alt="dot" className="w-4 h-4" />
				  <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/rcpuhrlz_expires_30_days.png" alt="dot" className="w-4 h-4" />
				  <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/d31v7cj6_expires_30_days.png" alt="dot" className="w-4 h-4" />
				</div>
				<p className="text-[#282D3D] text-lg sm:text-xl max-w-4xl">
				  Production capacity under 400,000 hectolitres/year<br /><br />
				  Fully operational and brewing-ready facilities<br /><br />
				  Ambition to grow with the support of strategic capital and industry expertise
				</p>
			  </div>
			</section>
	
			{/* Our Process Section */}
			<section className="bg-white px-6 sm:px-16 py-20">
			  <div className="flex flex-col lg:flex-row gap-10">
				<div className="flex flex-col gap-16">
				  {/* Step 1 */}
				  <div className="flex flex-col items-start bg-white rounded-md border border-white shadow-md p-8">
					<img
					  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/g8djp9cf_expires_30_days.png"
					  alt="Step 1 Icon"
					  className="w-20 h-20 mb-4"
					/>
					<span className="text-[72px] font-bold text-[#282D3D] mb-4">01</span>
					<div className="flex items-center gap-3">
					  <div className="w-2 h-7 bg-[#F9995D]" />
					  <span className="text-xl text-[#657199]">Initial Inquiry</span>
					</div>
				  </div>
	
				  {/* Step 3 */}
				  <div className="flex flex-col items-start bg-white rounded-md border border-white shadow-md p-8 ml-12">
					<img
					  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/r88nwg34_expires_30_days.png"
					  alt="Step 3 Icon"
					  className="w-20 h-20 mb-4"
					/>
					<span className="text-[72px] font-bold text-[#282D3D] mb-4">03</span>
					<div className="flex items-start gap-3">
					  <div className="w-2 h-14 bg-[#F9995D]" />
					  <span className="text-xl text-[#657199] max-w-xs">
						Due Diligence & Negotiations
					  </span>
					</div>
				  </div>
				</div>
	
				<div className="flex flex-col gap-16">
				  {/* Step 2 */}
				  <div className="flex flex-col items-start bg-white rounded-md border border-white shadow-md p-8">
					<img
					  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/l5bo0mmf_expires_30_days.png"
					  alt="Step 2 Icon"
					  className="w-20 h-20 mb-4"
					/>
					<span className="text-[72px] font-bold text-[#282D3D] mb-4">02</span>
					<div className="flex items-start gap-3">
					  <div className="w-2 h-14 bg-[#F9995D]" />
					  <span className="text-xl text-[#657199] max-w-xs">
						Evaluation & LOI Issuance
					  </span>
					</div>
				  </div>
	
				  {/* Step 4 */}
				  <div className="flex flex-col items-start bg-white rounded-md border border-white shadow-md p-8">
					<img
					  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/xto02uih_expires_30_days.png"
					  alt="Step 4 Icon"
					  className="w-20 h-20 mb-4"
					/>
					<span className="text-[72px] font-bold text-[#282D3D] mb-4">04</span>
					<div className="flex items-start gap-3">
					  <div className="w-2 h-14 bg-[#F9995D]" />
					  <span className="text-xl text-[#657199] max-w-xs">
						Final Agreement & Funding
					  </span>
					</div>
				  </div>
				</div>
	
				<div className="flex flex-col justify-center gap-6 mt-8 lg:mt-28">
				  <h2 className="text-[#2947A9] text-[40px] sm:text-[60px] font-bold">
					Our Process
				  </h2>
				  <p className="text-lg sm:text-xl max-w-md text-black">
					Our streamlined acquisition process allows us to move quickly—from initial interest to funding in as little as 30 to 90 days post-LOI.
				  </p>
				  <button
					onClick={() => alert("Pressed!")}
					className="bg-[#2947A9] text-white text-lg font-bold px-10 py-4 rounded"
				  >
					Contact Us
				  </button>
				</div>
			  </div>
			</section>


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
              onChange={() => alert("Pressed!")}
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

          <p className="text-sm text-red-600 self-start max-w-4xl">
            * indicates a required field
          </p>

          <button
            onClick={() => alert("Pressed!")}
            className="mt-4 bg-[#2947A9] text-white text-lg font-bold px-10 py-4 rounded"
          >
            Submit
          </button>
        </section>
		<footer className="bg-[#2947A9] text-white py-8 px-6 sm:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <span className="text-base">BAC © 2025. All Rights Reserved</span>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/ikawjif9_expires_30_days.png"
                alt="Facebook"
                className="w-6 h-6 object-contain"
              />
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/1xvwforg_expires_30_days.png"
                alt="Twitter"
                className="w-6 h-6 object-contain"
              />
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/n73prckk_expires_30_days.png"
                alt="Instagram"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </footer>
		  </div>
		</div>
	  );
	};
	

	