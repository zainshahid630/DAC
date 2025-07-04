import React, { useState } from "react";
import { NavBar } from "./navBar";
import Footer from "./Footer";
import Bac from '../mnt/data/image_4.png'
import { ContactForm } from "./contactusform";
import ConsultationSection from "./consaltation";


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
      <ConsultationSection ></ConsultationSection>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer Section */}
      <Footer input4={change4} onChangeInput4={onChangeInput5} />
    </div>
  );
};
