import React from "react";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToAbout = () => navigate("/about");
  const goToServices = () => navigate("/services");
  const goToContact = () => navigate("/contact");

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#FFFFFF",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 95,
        paddingRight: 112,
      }}
    >
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/8fdelrvc_expires_30_days.png"
        alt="Logo"
        style={{
          width: 88,
          height: 58,
          objectFit: "fill",
        }}
      />
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          paddingRight: 3,
        }}
      >
        <span
          onClick={goToHome}
          style={{
            color: "#F9995D",
            fontSize: 18,
            fontWeight: "bold",
            marginRight: 53,
            cursor: "pointer",
          }}
        >
          Home
        </span>
        <span
          onClick={goToAbout}
          style={{
            color: "#14161E",
            fontSize: 18,
            marginRight: 52,
            cursor: "pointer",
          }}
        >
          About Us
        </span>
        <span
          onClick={goToServices}
          style={{
            color: "#14161E",
            fontSize: 18,
            marginRight: 53,
            cursor: "pointer",
          }}
        >
          Services
        </span>
        <span
          onClick={goToContact}
          style={{
            color: "#14171F",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Contact Us
        </span>
      </div>
    </div>
  );
};
