import React, { useState } from "react";
import { NavBar } from "./navBar";
import Footer from "./Footer";
import Bac from '../mnt/data/image_4.png'
import { ContactForm } from "./contactusform";
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
    
    <ContactForm />


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