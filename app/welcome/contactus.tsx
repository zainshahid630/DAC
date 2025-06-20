import React, { useState } from "react";
import { NavBar } from "./navBar";
import Footer from "./Footer";
import Bac from '../mnt/data/image_4.png'
export const ContactUs = () => {
  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [input3, onChangeInput3] = useState("");
  const [input4, onChangeInput4] = useState("");
	const [change4 , onChangeInput5]=useState("")
  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <NavBar />

      <div
  className="w-full bg-cover bg-center relative flex items-center justify-center"
  style={{ backgroundImage: `url(${Bac})`, height: '500px' }}
>
  <div className="bg-white rounded-[15px] text-[#2947A9] text-[40px] sm:text-[50px] lg:text-[60px] p-[10px] w-auto font-bold font-[Work Sans] uppercase">
    CONTACT US
  </div>
</div>

      {/* Contact Form Section */}
      <section className="w-full bg-[#F6F8F7] px-4 sm:px-8 lg:px-60 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#282D3D] mb-5">
          Interested in partnering or learning more?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#282D3D] mb-10">
          Please fill out the form below or contact us directly at partner@bacorp.ca
        </p>

        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <input
            placeholder="Your Name*"
            value={input1}
            onChange={(e) => onChangeInput1(e.target.value)}
            className="flex-1 p-3 border border-[#E0E2EA] rounded-md text-sm text-[#282D3D]"
          />
          <input
            placeholder="Email*"
            value={input2}
            onChange={(e) => onChangeInput2(e.target.value)}
            className="flex-1 p-3 border border-[#E0E2EA] rounded-md text-sm text-[#282D3D]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <select
            className="flex-1 p-3 border border-[#E0E2EA] rounded-md text-sm text-gray-500"
          >
            <option>Reason for Contacting*</option>
          </select>
          <input
            placeholder="Phone"
            value={input3}
            onChange={(e) => onChangeInput3(e.target.value)}
            className="flex-1 p-3 border border-[#E0E2EA] rounded-md text-sm text-[#282D3D]"
          />
        </div>

        <textarea
          placeholder="Message"
          className="w-full h-32 p-3 border border-[#E0E2EA] rounded-md text-sm text-[#282D3D] mb-2"
        />

        {/* <p className="text-sm text-red-600 mb-6">* indicates a required field</p> */}

        <button className="bg-[#2947A9] text-white font-bold px-10 sm:px-16 py-3 sm:py-4 rounded-md">
          Submit
        </button>
      </section>

      {/* CTA Section */}
      <section
        className="flex flex-col lg:flex-row items-center justify-between bg-cover bg-center px-6 lg:px-28 py-24 text-white text-center lg:text-left"
        style={{ backgroundImage: "url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/56xucs0w_expires_30_days.png)" }}
      >
        <div className="space-y-4 mb-6 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Free consultation with exceptional quality
          </h3>
          <p className="text-sm sm:text-base md:text-xl">Just one email away: partner@bacorp.ca</p>
        </div>
        <button className="border-2 border-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-[#2947A9] transition">
          Get your consultation
        </button>
      </section>

      {/* Working Hours and Map */}
      <section className="flex flex-col lg:flex-row bg-white px-6 lg:px-16 py-20">
  <div className="bg-[#2947A9] text-white p-8 sm:p-10 space-y-5 rounded-md w-full lg:w-[30%]">
    <div>
      <h4 className="text-[#F9995D] font-bold text-base sm:text-lg mb-1">Working Hours</h4>
      <p className="text-xs sm:text-sm">Monday to Friday 09:00 AM to 06:00 PM</p>
      <p className="text-xs sm:text-sm">Saturday & Sunday Off</p>
    </div>
    <div>
      <h4 className="text-[#CC9D2F] text-base sm:text-lg mb-1">Location</h4>
      <p className="text-xs sm:text-sm">Ontario, Canada</p>
    </div>
    <div>
      <h4 className="text-[#CC9D2F] text-base sm:text-lg mb-1">Contact Us</h4>
      <p className="text-xs sm:text-sm">partner@bacorp.ca</p>
      <p className="text-xs sm:text-sm">www.bacorp.ca</p>
    </div>
  </div>

  <img
    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/9fp3pv1m_expires_30_days.png"
    className="w-full lg:w-[70%] h-auto object-cover rounded-md"
    alt="Map"
  />
</section>


      {/* Footer */}
     <Footer input4={change4} onChangeInput4={onChangeInput5} />
    </div>
  );
};