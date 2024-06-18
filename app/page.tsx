"use client";
import PurpleShine from "@/components/PurpleShine";
import SpotlightShine from "@/components/SpotlightShine";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import WebServicesCard from "@/components/WebServicesCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <DigitalSolutions />
    </>
  );
}

const HeroBanner = () => {
  return (
    <>
      <section className="w-full h-screen max-h-[800px] flex justify-center items-center bg-my-primary relative">
        <SpotlightShine />

        <div className="absolute -bottom-[50%] left-[36%] z-10">
          <span className="opacity-40">
            <PurpleShine />
          </span>
          <PurpleShine />
        </div>

        <div className="w-fit flex flex-col items-center gap-5 max-w-[1200px]">
          <div className="p-[0.5px] shadow-[0_0_65px_1px] shadow-my-purple rounded-full bg-gradient-to-r from-my-purple via-white to-my-purple">
            <button
              className="group px-3 py-1 bg-gradient-to-r from-my-blue-purple to-my-blue-purple-light text-white font-medium relative z-20 flex items-center gap-1 rounded-full hover:brightness-125 transition-all duration-500
          "
            >
              Begin your journey: reach out today{" "}
              <GoArrowRight className="group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          <motion.h1
            initial={{ opacity: 0, zoom: 1.1 }}
            animate={{ opacity: 1, zoom: 1 }}
            transition={{ duration: 0.7 }}
            data-aos="zoom-in"
            className="text-white text-[100px] leading-[110px] font-semibold text-center relative z-30"
          >
            Crafting Your Digital Identity
          </motion.h1>

          <p className="text-xl text-slate-200 font-orbitron tracking-widest relative z-30">
            Not just a developer - Here's your complete solution partner
          </p>

          <button className="flex items-center gap-1 group bg-white text-my-primary relative z-20 px-4 py-3 rounded-full font-medium text-lg">
            Contact Now
            <GoArrowRight className="group-hover:translate-x-1 transition-all text-my-purple " />
          </button>
        </div>
      </section>
    </>
  );
};

const DigitalSolutions = () => {
  return (
    <section className="w-full h-screen max-h-[800px] flex flex-col justify-center items-center gap-16 bg-my-primary relative">
      <div className="">
        <p className="text-slate-200 text-center relative z-30 font-orbitron tracking-widest">
          Comprehensive Digital Solutions
        </p>
        <motion.h2
          initial={{ opacity: 0, zoom: 1.1 }}
          animate={{ opacity: 1, zoom: 1 }}
          transition={{ duration: 0.7 }}
          data-aos="zoom-in"
          className="text-white text-[100px] leading-[110px] font-semibold text-center relative z-30"
        >
          From Website to SEO{" "}
        </motion.h2>
        <div className="w-full flex justify-center">
          <div className="max-w-[700px] ">
            <p className="text-slate-400 text-center">
              With our extensive experience and technological expertise, we can
              create solutions tailored precisely to your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          // }}
          modules={[Autoplay]}
          // loop={true}
          slidesPerView={3}
          className="!p-10"
        >
          <SwiperSlide className="web-services h-full w-full">
            <WebServicesCard />
          </SwiperSlide>

          <SwiperSlide className="web-services h-full w-full">
            <WebServicesCard />
          </SwiperSlide>

          <SwiperSlide className="web-services h-full w-full">
            <WebServicesCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
