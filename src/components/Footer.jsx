import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import logo from "../assets/react.svg";

const Footer = () => {
  return (
    <>
      {/* divider */}
      <div
        id="footer"
        className="max-w-375 m-auto h-px bg-white opacity-10"
      ></div>
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {/* <img src={logo} alt="Logo" className="" /> */}
        <div>
          <h5 className="font-medium mb-5">Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">API Integration</a>
            </li>
            <li>
              <a href="#">SEO Optimization</a>
            </li>
            <li>
              <a href="#">UI Design</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="#">Mon - Fri: 9am - 5pm</a>
            </li>
            <li>
              <a href="#">24/7 Email</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="mailto: syedalimoidrizvi@gmailcom">
                syedalimoidrizvi@gmail.com
              </a>
            </li>
            {/* <li>
              <a href="#">24/7 Email</a>
            </li> */}
          </ul>
        </div>
      </footer>
      {/* divider */}
      <div className="max-w-375 m-auto h-px bg-white opacity-10"></div>

      <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8">
        <div className="text-base lg:text-lg text-center md:text-start">
          2025 | All rights reserved
        </div>
        <div className="flex flex-row gap-3 justify-center md:justify-end">
          <a href="https://github.com/alimoid14">
            <GrGithub />
          </a>
          <a href="https://www.linkedin.com/in/syed-ali-moid-rizvi-022355226/">
            <FaLinkedin />
          </a>
          <a href="https://x.com/alimoidrizvi">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
