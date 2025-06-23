import React, { useState } from "react";
import { NavBar } from "./navBar";
import Footer from "./Footer";
import Bac from '../mnt/data/image_3.png'
import { ContactForm } from "./contactusform";
import ConsultationSection from "./consaltation";
export const Services = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [change4 , onChangeInput5]=useState("")

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <div className="w-full">
        <NavBar />

        {/* Hero Image */}
        <div
  className="w-full bg-cover bg-center relative flex items-center justify-center"
  style={{ backgroundImage: `url(${Bac})`, height: '500px' }}
>
  <div className="bg-white rounded-[15px] text-[#2947A9] text-[40px] sm:text-[50px] lg:text-[60px] p-[10px] w-auto font-bold font-[Work Sans] uppercase">
    SERVICES
  </div>
</div>

        {/* Section 1 */}
        <div className="w-full bg-white py-20">
          <div className="relative mx-4 md:mx-16 mb-40">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/tjlfo9fw_expires_30_days.png"
              className="w-full max-w-4xl h-auto object-cover mx-auto"
              alt="Strategic Capital"
            />
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[95%] sm:w-[80%] md:w-[488px] bg-[#2947A9] rounded shadow-md p-4 sm:p-6 text-center md:text-left">
              <h2 className="text-white text-base sm:text-lg md:text-2xl font-bold mb-2">Strategic Capital</h2>
              <div className="h-px w-1/2 bg-white mb-4 mx-auto md:ml-1"></div>
              <p className="text-white text-xs sm:text-sm md:text-base">
                Immediate funding to support brewery expansion, new product lines, or operational upgrades.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative mx-4 md:mx-20 mb-40">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/mfzb2re4_expires_30_days.png"
              className="w-full max-w-4xl h-auto object-cover mx-auto"
              alt="Operational Support"
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-[95%] sm:w-[80%] md:w-[488px] bg-[#2947A9] rounded shadow-md p-4 sm:p-6 text-center md:text-left">
              <h2 className="text-white text-base sm:text-lg md:text-2xl font-bold mb-2">Operational Support</h2>
              <div className="h-px w-1/2 bg-white mb-4 mx-auto md:ml-1"></div>
              <p className="text-white text-xs sm:text-sm md:text-base">
                Guidance from a team with a proven track record in beverage and retail.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative mx-4 md:mx-20">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/hsvmgdqw_expires_30_days.png"
              className="w-full max-w-4xl h-auto object-cover mx-auto"
              alt="Distribution Enablement"
            />
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[95%] sm:w-[80%] md:w-[488px] bg-[#2947A9] rounded shadow-md p-4 sm:p-6 text-center md:text-left">
              <h2 className="text-white text-base sm:text-lg md:text-2xl font-bold mb-2">Distribution Enablement</h2>
              <div className="h-px w-3/5 bg-white mb-4 mx-auto md:ml-1"></div>
              <p className="text-white text-xs sm:text-sm md:text-base">
                Access to established wholesale and retail distribution networks across.
              </p>
            </div>
          </div>
        </div>
        <ConsultationSection ></ConsultationSection>
        {/* Part 4: Form & Newsletter */}
        <ContactForm />


      </div>

      <Footer input4={change4} onChangeInput4={onChangeInput5} />
    </div>
  );
};
