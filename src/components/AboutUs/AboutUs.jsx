import React from "react";
import "./AboutUs.css";
import { whoWeInvest } from "@/src/utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animations";

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="about-container">
          {/* left side */}
          <div className="about-left">
            <div className="head">
              <motion.span
                initial="offScreen"
                whileInView="onScreen"
                variants={tagVariants}
                className="tag"
              >
                About Us
              </motion.span>
              <motion.span
                initial="offScreen"
                whileInView="onScreen"
                variants={titleVariants}
                className="title"
              >
                Digital business
                <br /> with early traction
              </motion.span>
            </div>

            {/* features */}
            <div className="about-features">
              {whoWeInvest.map((feature, index) => (
                <motion.div
                  initial="offScreen"
                  whileInView="onScreen"
                  variants={containerVariants(index * 0.1)}
                  className="about-feature"
                  key={index}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="about-right">
            <motion.img
              initial="offScreen"
              whileInView="onScreen"
              variants={containerVariants(0.5)}
              src="persons.png"
              alt="persons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
