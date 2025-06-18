import React, { useState } from "react";
import { NavBar } from "./navBar";

export const ContactUs = () => {
  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [input3, onChangeInput3] = useState("");
  const [input4, onChangeInput4] = useState("");

  return (
    <div className="flex flex-col bg-white">
      <NavBar />

      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/m0sjceq1_expires_30_days.png"
        className="w-full h-[426px] object-cover"
        alt="Contact Hero"
      />

      {/* Contact Form Section */}
      <section className="w-full bg-[#F6F8F7] px-4 sm:px-8 lg:px-60 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#282D3D] mb-5">
          Interested in partnering or learning more?
        </h2>
        <p className="text-lg text-[#282D3D] mb-10">
          Please fill out the form below or contact us directly at
          partner@bacorp.ca
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mb-6">
          <input
            placeholder="Your Name*"
            value={input1}
            onChange={(e) => onChangeInput1(e.target.value)}
            className="flex-1 p-3 border border-[#E0E2EA] rounded-md text-[#A3AAC1]"
          />
          <input
            placeholder="Email*"
            value={input2}
            onChange={(e) => onChangeInput2(e.target.value)}
            className="flex-1 p-3 border border-[#E0E2EA] rounded-md text-[#A3AAC1]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-6">
          <button
            onClick={() => alert("Pressed!")}
            className="flex-1 flex justify-between items-center border border-[#E0E2EA] rounded-md p-3 text-left text-[#A3AAC1]"
          >
            <span>Reason for Contacting*</span>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/f7kk1uay_expires_30_days.png"
              className="w-5 h-5"
              alt="Dropdown"
            />
          </button>
          <input
            placeholder="Phone"
            value={input3}
            onChange={(e) => onChangeInput3(e.target.value)}
            className="flex-1 p-3 border border-[#E0E2EA] rounded-md text-[#A3AAC1]"
          />
        </div>

        <textarea
          placeholder="Message"
          className="w-full h-32 p-3 border border-[#E0E2EA] rounded-md text-[#A3AAC1] mb-2"
        />

        <p className="text-sm text-red-600 mb-6">* indicates a required field</p>

        <button
          onClick={() => alert("Pressed!")}
          className="bg-[#2947A9] text-white font-bold px-16 py-4 rounded-md"
        >
          Submit
        </button>
      </section>

      {/* CTA Section */}
      <section
        className="flex flex-col lg:flex-row items-center justify-between bg-cover bg-center px-6 lg:px-28 py-24"
        style={{ backgroundImage: "url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/56xucs0w_expires_30_days.png)" }}
      >
        <div className="text-white space-y-4">
          <h3 className="text-3xl font-bold">
            Free consultation with exceptional quality
          </h3>
          <p className="text-xl">Just one email away: partner@bacorp.ca</p>
        </div>
        <button className="mt-6 lg:mt-0 border-2 border-white text-white font-bold px-5 py-3 rounded-md">
          Get your consultation
        </button>
      </section>

      {/* Working Hours and Map */}
      <section className="flex flex-col lg:flex-row gap-8 bg-white px-6 lg:px-16 py-20">
        <div className="bg-[#2947A9] text-white p-10 space-y-5 rounded-md w-full lg:w-1/2">
          <div>
            <h4 className="text-[#F9995D] font-bold text-lg mb-1">Working Hours</h4>
            <p className="text-sm">Monday to Friday 09:00 AM to 06:00 PM</p>
            <p className="text-sm">Saturday & Sunday Off</p>
          </div>
          <div>
            <h4 className="text-[#CC9D2F] text-lg mb-1">Location</h4>
            <p className="text-sm">Ontario, Canada</p>
          </div>
          <div>
            <h4 className="text-[#CC9D2F] text-lg mb-1">Contact Us</h4>
            <p className="text-sm">partner@bacorp.ca</p>
            <p className="text-sm">www.bacorp.ca</p>
          </div>
        </div>
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/9fp3pv1m_expires_30_days.png"
          className="w-full lg:w-1/2 h-auto object-cover rounded-md"
          alt="Map"
        />
      </section>

      {/* Footer */}
      <footer className="bg-white px-6 lg:px-28 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex gap-10 text-[#2947A9] font-bold">
              <span>Email:</span>
              <span className="text-black font-normal">partner@bacorp.ca</span>
            </div>
            <span className="text-[#2947A9] font-bold">Newsletter:</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#2947A9] font-bold">Social:</span>
            <input
              placeholder="Your email here"
              value={input4}
              onChange={(e) => onChangeInput4(e.target.value)}
              className="p-2 border border-[#E0E2EA] rounded-md text-[#A3AAC1]"
            />
            <button className="bg-[#F9995D] text-white font-bold px-5 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-8 ml-2">
          <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/i924knto_expires_30_days.png" className="w-10 h-10" />
          <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/ykwfq52t_expires_30_days.png" className="w-10 h-10" />
          <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/1yfklhfw_expires_30_days.png" className="w-10 h-10" />
        </div>

        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/jqyms64o_expires_30_days.png"
          className="w-32 h-20 mt-6"
          alt="Logo"
        />
      </footer>

      <div className="bg-[#2947A9] text-white text-sm py-5 px-6">
        BAC © 2025. All Rights Reserved
      </div>
    </div>
  );
};