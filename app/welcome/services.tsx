import React, { useState } from "react";
import { NavBar } from "./navBar";

export const Services = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  return (
    <div className="flex flex-col bg-white">
      <div className="w-full">
        <NavBar />

        {/* Hero Image */}
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/45llfmbe_expires_30_days.png"
          className="w-full h-[426px] object-cover"
          alt="Hero"
        />

        {/* Section 1 */}
        <div className="w-full bg-white py-20">
          <div className="relative flex flex-col items-start mx-4 md:mx-16 mb-40">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/tjlfo9fw_expires_30_days.png"
              className="w-full max-w-4xl h-auto object-cover"
              alt="Strategic Capital"
            />
            <div className="absolute top-16 right-0 w-full md:w-[488px] bg-[#2947A9] rounded shadow-md p-10">
              <h2 className="text-white text-xl md:text-2xl font-bold mb-2">Strategic Capital</h2>
              <div className="h-px w-1/2 bg-white mb-8 ml-1"></div>
              <p className="text-white text-sm md:text-base">
                Immediate funding to support brewery expansion, new product lines, or operational upgrades.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative flex flex-col items-end mx-4 md:mx-20 mb-40">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/mfzb2re4_expires_30_days.png"
              className="w-full max-w-4xl h-auto object-cover"
              alt="Operational Support"
            />
            <div className="absolute top-16 left-0 w-full md:w-[488px] bg-[#2947A9] rounded shadow-md p-10">
              <h2 className="text-white text-xl md:text-2xl font-bold mb-2">Operational Support</h2>
              <div className="h-px w-1/2 bg-white mb-8 ml-1"></div>
              <p className="text-white text-sm md:text-base">
                Guidance from a team with a proven track record in beverage and retail.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative flex flex-col items-start mx-4 md:mx-20">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/hsvmgdqw_expires_30_days.png"
              className="w-full max-w-4xl h-auto object-cover"
              alt="Distribution Enablement"
            />
            <div className="absolute top-16 right-0 w-full md:w-[488px] bg-[#2947A9] rounded shadow-md p-10">
              <h2 className="text-white text-xl md:text-2xl font-bold mb-2">Distribution Enablement</h2>
              <div className="h-px w-3/5 bg-white mb-8 ml-1"></div>
              <p className="text-white text-sm md:text-base">
                Access to established wholesale and retail distribution networks across.
              </p>
            </div>
          </div>
        </div>

        {/* Part 4: Form & Newsletter */}
        <div className="w-full bg-[#F6F8F7] py-16 px-4 md:px-24">
          <h2 className="text-[#282D3D] text-2xl md:text-3xl font-bold text-center mb-6">
            Interested in partnering or learning more?
          </h2>
          <p className="text-[#282D3D] text-center text-base md:text-lg mb-10">
            Please fill out the form below or contact us directly at partner@bacorp.ca
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <input
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded text-sm"
              placeholder="Your Name*"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
            <input
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded text-sm"
              placeholder="Email*"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <select className="w-full md:w-1/2 p-3 border border-gray-300 rounded text-sm text-gray-500">
              <option>Reason for Contacting*</option>
            </select>
            <input
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded text-sm"
              placeholder="Phone"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />
          </div>

          <textarea
            className="w-full p-3 border border-gray-300 rounded text-sm h-40 mb-2"
            placeholder="Message"
          ></textarea>

          <p className="text-red-600 text-sm mb-6">* indicates a required field</p>

          <div className="flex justify-center">
            <button className="bg-[#2947A9] text-white font-bold py-3 px-12 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
