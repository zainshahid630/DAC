import React from "react";

export default function ConsultationSection() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between bg-cover bg-center px-6 lg:px-28 py-24 text-white text-center lg:text-left"
      style={{
        backgroundImage:
          "url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/56xucs0w_expires_30_days.png)",
      }}
    >
      <div className="space-y-4 mb-6 lg:mb-0">
        <h3 className="text-2xl sm:text-3xl font-bold">
          Free consultation with exceptional quality
        </h3>
        <p className="text-sm sm:text-base md:text-xl">
          Just one email away: partner@bacorp.ca
        </p>
      </div>
      <button className="border-2 border-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-[#2947A9] transition cursor-pointer">
        Get your consultation
      </button>
    </section>
  );
}
