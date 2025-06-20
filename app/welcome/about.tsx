import React, { useState } from "react";
import { NavBar } from "./navBar";
import Footer from "./Footer";
import Bac from '../mnt/data/image.png'

export const About = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [change4 , onChangeInput5]=useState("")

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <NavBar />

      {/* Hero Image */}
      <div
  className="w-full bg-cover bg-center relative flex items-center justify-center"
  style={{ backgroundImage: `url(${Bac})`, height: '500px' }}
>
  <div className="bg-white rounded-[15px] text-[#2947A9] text-[40px] sm:text-[50px] lg:text-[60px] p-[10px] w-auto font-bold font-[Work Sans] uppercase">
    ABOUT US
  </div>
</div>



      {/* Overlay Card Section */}
      <div className="flex justify-center px-4 py-12">
  <div className="relative w-full max-w-5xl">
    <img
      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/6zayarvt_expires_30_days.png"
      alt="Team"
      className="w-full h-auto object-cover rounded"
    />

    <div
      className="
        absolute bottom-3 right-3
        bg-[#2947A9] text-white rounded shadow-md
        p-3 sm:p-4
        w-[90%] max-w-[250px]
      "
    >
      <h2 className="text-[14px] sm:text-base font-bold mb-2 leading-tight">
        Purpose-Built Capital for Growth
      </h2>
      <hr className="border-white mb-3" />
      <p className="text-[11px] sm:text-sm mb-3 leading-tight">
        Brewery Acquisition Corp. (BAC) focuses on Ontario-based craft breweries. With $200M+ raised and 50+ retail locations developed, we scale operational growth and capital deployment.
      </p>
      <button className="bg-white text-[#2947A9] font-bold text-[11px] sm:text-sm px-3 py-1.5 rounded border border-[#2947A9] hover:bg-gray-100">
        Contact Us
      </button>
    </div>
  </div>
</div>


      {/* CTA Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-cover bg-center text-white px-6 md:px-28 py-24" style={{ backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/2ln7v4fd_expires_30_days.png)' }}>
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Free consultation with exceptional quality</h3>
          <p className="text-lg">Just one email away: partner@bacorp.ca</p>
        </div>
        <button className="text-white border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-[#2947A9] transition">
          Get your consultation
        </button>
      </div>

      {/* Contact Form */}
      <div className="bg-[#F6F8F7] px-6 sm:px-10 md:px-24 py-16">
        <h2 className="text-2xl sm:text-3xl text-[#282D3D] font-bold text-center mb-4">
          Interested in partnering or learning more?
        </h2>
        <p className="text-center text-[#282D3D] mb-10">
          Please fill out the form below or contact us directly at partner@bacorp.ca
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          <input type="text" placeholder="Your Name*" value={input1} onChange={(e) => setInput1(e.target.value)} className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base w-full" />
          <input type="email" placeholder="Email*" value={input2} onChange={(e) => setInput2(e.target.value)} className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base w-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          <select className="p-3 border border-gray-300 rounded bg-white text-base text-gray-500 w-full">
            <option>Reason for Contacting*</option>
          </select>
          <input type="text" placeholder="Phone" value={input3} onChange={(e) => setInput3(e.target.value)} className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base w-full" />
        </div>
        <textarea placeholder="Message" rows={5} className="w-full max-w-4xl mx-auto block p-3 border border-gray-300 rounded bg-white text-base placeholder-gray-400 mb-3"></textarea>
        {/* <p className="text-sm text-[#C40303] mb-6 pl-4">* indicates a required field</p> */}
        <div className="text-center">
          <button className="bg-[#2947A9] text-white font-bold px-10 py-3 rounded">Submit</button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer input4={change4} onChangeInput4={onChangeInput5} />
    </div>
  );
};
