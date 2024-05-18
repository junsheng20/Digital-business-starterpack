import React from "react";
import "./Footer.css";
import EmailBox from "../EmailBox/EmailBox";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today!</span>
          <EmailBox />

          <hr />
          <div className="f-menu">
            <Link to="h-wrapper" spy={true} smooth={true}>
              <span>Home</span>
            </Link>
            <Link to="wwd-wrapper" spy={true} smooth={true}>
              <span>What we do</span>
            </Link>
            <Link to="hiw-wrapper" spy={true} smooth={true}>
              <span>How it works</span>
            </Link>
            <Link to="wwi-wrapper" spy={true} smooth={true}>
              <span>Who we invest in</span>
            </Link>
            <Link to="t-wrapper" spy={true} smooth={true}>
              <span>Testimonials</span>
            </Link>
          </div>
          <hr />

          <span className="text">Copyright 2024 @ JS</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
