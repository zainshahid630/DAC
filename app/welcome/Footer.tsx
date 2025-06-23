import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer({
  input4,
  onChangeInput4,
}: {
  input4: string;
  onChangeInput4: (val: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubscribe = async () => {
    if (!input4 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input4)) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("");



    emailjs
    .send('service_wkn01ro', "template_s4fogim",   {
      user_email: input4,
      message: "Thanks for subscribing! We’ll contact you soon.",
    }, "x6yNI_PDBD94GRODJ")
      .then(() => {
        setStatus("success");
        onChangeInput4(""); // Clear input
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`bg-[#F9995D] text-white font-bold px-5 py-2 rounded-md w-full sm:w-auto ${
                loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Subscribe"}
            </button>
          </div>
        </div>

        {/* Status Message */}
        {status === "success" && (
          <p className="text-green-600 text-sm mt-2">Thank you! We'll contact you at your email.</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm mt-2">Please enter a valid email and try again.</p>
        )}

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

        {/* Logo */}
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
