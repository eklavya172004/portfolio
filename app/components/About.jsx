'use client';
import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../data/style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt 
        className="xs:w-[250px] w-full"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1}
        transitionSpeed={450}
    >
        <motion.div 
            variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
            initial="hidden"
            animate="show"
            // transition={{ ease: "easeIn" }}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
)

const About = () => (
    <>
        <motion.div>
            <h2 className={styles.sectionHeadText}>
                Overview
            </h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "spring", 0.1, 1)}
            initial="hidden"
            animate="show"
            // transition={{ ease: "easeIn" }}
            className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
        >
            I am a passionate software developer with a keen interest in building innovative solutions. My journey in the tech world has been driven by a desire to create impactful applications that enhance user experiences and solve real-world problems. With a strong foundation in programming languages and frameworks, I thrive on challenges and continuously seek opportunities to learn and grow in this ever-evolving field.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </>
)

export default About;