"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
// import AOS from "aos";

const WelcomeScreen = () => {
  //   useEffect(() => {
  //     AOS.init({});
  //   }, []);

  return (
    <div className="welcome-screen">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/logo.png"}
          width={300}
          height={300}
          alt="Logo"
          className="max-w-[90%] animate-welcome"
        />
        <p
          className="anton -translate-y-3 text-5xl leading-[60px] text-white tracking-widest text-center reflected-text"
          //   data-aos="fade-in"
          //   data-aos-duration="1s"
        >
          Here's Your Complete Solution Partner
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
