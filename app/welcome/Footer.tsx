import React from "react";

export default function Footer({
  input4,
  onChangeInput4,
}: {
  input4: string;
  onChangeInput4: (val: string) => void;
}) {
  return (
    <>
      <footer className="bg-white px-6 lg:px-28 py-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Contact Info and Newsletter Label */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-[#2947A9] font-bold">
              <span>Email:</span>
              <span className="text-black font-normal">partner@bacorp.ca</span>
            </div>
            <span className="text-[#2947A9] font-bold">Newsletter:</span>
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <input
              placeholder="Your email here"
              value={input4}
              onChange={(e) => onChangeInput4(e.target.value)}
              className="p-2 border border-[#E0E2EA] rounded-md text-sm text-[#282D3D] w-full sm:w-64"
            />
            <button className="bg-[#F9995D] text-white font-bold px-5 py-2 rounded-md w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/i924knto_expires_30_days.png"
            className="w-8 h-8"
            alt="Facebook"
          />
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/ykwfq52t_expires_30_days.png"
            className="w-8 h-8"
            alt="Instagram"
          />
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/1yfklhfw_expires_30_days.png"
            className="w-8 h-8"
            alt="X"
          />
        </div>

        {/* Logo (reduced size) */}
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/jqyms64o_expires_30_days.png"
          className="w-14 h-auto mt-4"
          alt="Logo"
        />
      </footer>

      {/* Copyright */}
      <div className="bg-[#2947A9] text-white text-center text-xs sm:text-sm py-4 px-6">
        BAC © 2025. All Rights Reserved
      </div>
    </>
  );
}
