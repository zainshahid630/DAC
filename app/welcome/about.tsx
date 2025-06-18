import React, { useState } from "react";
import { NavBar } from "./navBar";

export const About = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  return (
    <div className="flex flex-col bg-white">
      <NavBar />

      {/* Hero Image */}
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/h8iycr9f_expires_30_days.png"
        alt="About Hero"
        className="w-full h-[426px] object-cover"
      />

      {/* Overlay Card Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center px-4 py-20">
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/6zayarvt_expires_30_days.png"
          alt="Team"
          className="w-full max-w-4xl h-auto object-cover"
        />
        <div className="absolute bottom-10 right-10 bg-[#2947A9] text-white p-8 rounded shadow-md max-w-sm">
          <h2 className="text-xl font-bold mb-4">Purpose-Built Capital for Growth</h2>
          <hr className="border-white mb-6" />
          <p className="mb-6 text-sm">
            Brewery Acquisition Corp. (BAC) is focused exclusively on acquiring equity in Ontario-based craft breweries.
            Our team brings deep experience in capital deployment, operational scaling, and retail expansion—backed by over $200M raised and 50+ retail locations developed in the past year.
          </p>
          <button className="bg-white text-[#2947A9] font-bold px-6 py-2 rounded border-2 border-[#2947A9] hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="flex flex-col md:flex-row justify-between items-center bg-cover bg-center text-white px-6 md:px-28 py-24"
        style={{ backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/2ln7v4fd_expires_30_days.png)' }}
      >
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Free consultation with exceptional quality</h3>
          <p className="text-lg">Just one email away: partner@bacorp.ca</p>
        </div>
        <button className="text-white border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-[#2947A9] transition">
          Get your consultation
        </button>
      </div>

      {/* Contact Form */}
      <div className="bg-[#F6F8F7] px-6 sm:px-24 py-16">
        <h2 className="text-2xl sm:text-3xl text-[#282D3D] font-bold text-center mb-4">
          Interested in partnering or learning more?
        </h2>
        <p className="text-center text-[#282D3D] mb-10">
          Please fill out the form below or contact us directly at partner@bacorp.ca
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          <input type="text" placeholder="Your Name*" value={input1} onChange={(e) => setInput1(e.target.value)}
            className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base" />
          <input type="email" placeholder="Email*" value={input2} onChange={(e) => setInput2(e.target.value)}
            className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          <select className="p-3 border border-gray-300 rounded bg-white text-base text-gray-500">
            <option>Reason for Contacting*</option>
          </select>
          <input type="text" placeholder="Phone" value={input3} onChange={(e) => setInput3(e.target.value)}
            className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base" />
        </div>
        <textarea placeholder="Message" rows={5}
          className="w-full max-w-4xl mx-auto block p-3 border border-gray-300 rounded bg-white text-base placeholder-gray-400 mb-3"></textarea>
        <p className="text-sm text-[#C40303] mb-6 pl-4">* indicates a required field</p>
        <div className="text-center">
          <button className="bg-[#2947A9] text-white font-bold px-10 py-3 rounded">Submit</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white px-6 sm:px-24 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <div>
            <h4 className="text-[#2947A9] font-bold">Email:</h4>
            <p className="text-black">partner@bacorp.ca</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <h4 className="text-[#2947A9] font-bold">Newsletter:</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email here" value={input4} onChange={(e) => setInput4(e.target.value)}
                className="p-2 border border-gray-300 rounded text-base" />
              <button className="bg-[#F9995D] text-white font-bold px-4 py-2 rounded">Subscribe</button>
            </div>
          </div>
          <div>
            <h4 className="text-[#2947A9] font-bold mb-2">Social:</h4>
            <div className="flex gap-4">
              <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/hkrdrhd4_expires_30_days.png" alt="FB" className="w-8 h-8" />
              <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/mweiwljf_expires_30_days.png" alt="IG" className="w-8 h-8" />
              <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/ckekvds6_expires_30_days.png" alt="X" className="w-8 h-8" />
            </div>
          </div>
        </div>
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/e95s07tz_expires_30_days.png"
          alt="Logo"
          className="w-28 h-auto mt-10"
        />
        <p className="text-sm text-white bg-[#2947A9] text-center py-4 mt-6">
          BAC © 2025. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};