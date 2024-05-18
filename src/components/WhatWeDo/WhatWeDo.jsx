"use client";

import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animations";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* head of section */}
          <div className="wwd-head">
            <motion.span
              initial="offScreen"
              whileInView="onScreen"
              variants={tagVariants}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offScreen"
              whileInView="onScreen"
              variants={titleVariants}
              className="title"
            >
              {" "}
              Empowering founders with non dilutive capital and execution
            </motion.span>
            <motion.span
              initial="offScreen"
              whileInView="onScreen"
              variants={desVariants}
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>

          {/* two blocks */}
          <div className="wwd-blocks">
            {/* first block */}
            <div className="wwd-block">
              <motion.span
                initial="offScreen"
                whileInView="onScreen"
                variants={titleVariants}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offScreen"
                whileInView="onScreen"
                variants={desVariants}
                className="text"
              >
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </motion.span>

              <div className="block-features">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    initial="offScreen"
                    whileInView="onScreen"
                    variants={containerVariants((index + 1) * 0.1)}
                    className="block-feature"
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* second block */}
            <div className="wwd-block">
              <motion.span
                initial="offScreen"
                whileInView="onScreen"
                variants={titleVariants}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offScreen"
                whileInView="onScreen"
                variants={desVariants}
                className="text"
              >
                Fund one-offs to scale e.g. product, hiring
              </motion.span>

              <div className="block-features">
                {features.slice(3, 6).map((feature, index) => (
                  <motion.div
                    initial="offScreen"
                    whileInView="onScreen"
                    variants={containerVariants((index + 1) * 0.1)}
                    className="block-feature"
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* support block */}
          <motion.div
            initial="offScreen"
            whileInView="onScreen"
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            {/* left side */}
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="des">
                Data Insights and full stack expertise to supercharge growth
              </span>
            </div>

            {/* right side */}
            <div>
              <span className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              </span>
              <span className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti maiores eveniet, minus sunt soluta odit consectetur ex
                culpa dolor accusamus atque vel alias eaque officia impedit, a
                sequi beatae debitis.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
