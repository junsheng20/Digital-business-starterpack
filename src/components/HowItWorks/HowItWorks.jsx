import React from "react";
import "./HowItWorks.css";
import { hiwFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  featureDetailVariants,
  featureVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animations";

const HowItWorks = () => {
  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          {/* head */}
          <div className="hiw-head">
            <motion.span
              initial="offScreen"
              whileInView="onScreen"
              variants={tagVariants}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              initial="offScreen"
              whileInView="onScreen"
              variants={titleVariants}
              className="title"
            >
              {" "}
              Unlocking potential along the growth journey
            </motion.span>
          </div>

          <div className="hiw-features">
            {hiwFeatures.map((feature, index) => (
              <motion.div
                initial="offScreen"
                whileInView="onScreen"
                variants={featureVariants}
                className="hiw-feature"
                key={index}
              >
                {/* left */}
                <motion.div
                  initial="offScreen"
                  whileInView="onScreen"
                  variants={featureDetailVariants}
                  className="detail"
                >
                  <span className="des">0{index + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>

                {/* right */}
                <div className="icon">
                  <Image
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt="feature"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
