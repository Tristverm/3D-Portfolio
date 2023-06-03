/* eslint-disable */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <Tilt className="xs:w-[250px] w-full">{title}</Tilt>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {" "}
        I am a skilled JavaScript developer with expertise in various front-end
        technologies, including React, Next.js, Tailwind CSS, Git, and GitHub.
        With a strong foundation in JavaScript, I have leveraged my knowledge to
        build dynamic and responsive web applications. I specialize in utilizing
        React and Next.js to create seamless user interfaces, ensuring an
        exceptional user experience. Additionally, my proficiency in Tailwind
        CSS allows me to develop visually appealing and modern designs. I am
        passionate about delivering high-quality code and constantly expanding
        my skills to stay up-to-date with the latest trends in web development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              {...services}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
