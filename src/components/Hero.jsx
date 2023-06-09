/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    // Hero Container
    <section
      className="relative w-full h-screen mx-auto"
      id="hero"
    >
      {/* Container with Circular & Line and Intro */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* circle */}
          <div
            className="h-5 w-5 rounded-full bg-[#915eff]"
            id="circle"
          ></div>
          {/* Line */}
          <div
            id="line"
            className="w-1 h-40 sm:h-80 violet-gradient "
          />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hello friend &#128526;
            <span className="text-[#915eff]">Emmanuel</span> here
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a JS Developer with Great Experience and Skill in :
            <br className="sm:block hidden" />{" "}
            <span className="text-[#915eff]">
              React-JS, React-Native, Three-JS, and Next-JS{" "}
            </span>
          </p>
        </div>
        {/* Container with Circular & Line and Intro */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Line */}
          <div
            id="line"
            className="w-1 h-40 sm:h-80 violet-gradient-opp "
          />
          {/* circle */}
          <div
            className="h-5 w-5 rounded-full bg-[#915eff]"
            id="circle"
          ></div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex flex-row justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
