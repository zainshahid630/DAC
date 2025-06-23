import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export  const  ContactForm=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.reason) {
      setError("Please fill in all required fields (*)");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setIsLoading(true);
    emailjs
      .send('service_wkn01ro', "template_s4fogim", formData, "x6yNI_PDBD94GRODJ")
      .then(
        (result) => {
          setSuccess("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            reason: "",
            phone: "",
            message: "",
          });
          setIsLoading(false);
        },
        (error) => {
          setError("Failed to send message. Please try again later.");
          setIsLoading(false);
        }
      );
  };
  

  return (
    <div className="bg-[#F6F8F7] px-6 sm:px-10 md:px-24 py-16">
      <h2 className="text-2xl sm:text-3xl text-[#282D3D] font-bold text-center mb-4">
        Interested in partnering or learning more?
      </h2>
      <p className="text-center text-[#282D3D] mb-10">
        Please fill out the form below or contact us directly at partner@bacorp.ca
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base w-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded bg-white text-base text-gray-500 w-full"
          >
            <option value="">Reason for Contacting*</option>
            <option value="Partnership">Partnership</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
          </select>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded bg-white placeholder-gray-400 text-base w-full"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full max-w-4xl mx-auto block p-3 border border-gray-300 rounded bg-white text-base placeholder-gray-400 mb-3"
        ></textarea>

        {error && <p className="text-sm text-[#C40303] mb-6 text-center">{error}</p>}
        {success && <p className="text-sm text-green-600 mb-6 text-center">{success}</p>}

        <div className="text-center">
  <button
    type="submit"
    disabled={isLoading}
    className={`bg-[#2947A9] text-white font-bold px-10 py-3 rounded transition-all duration-200 ${
      isLoading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#1e3690] cursor-pointer"
    }`}
  >
    {isLoading ? (
      <span className="flex items-center justify-center gap-2">
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        Sending...
      </span>
    ) : (
      "Submit"
    )}
  </button>
</div>

      </form>
    </div>
  );
}
