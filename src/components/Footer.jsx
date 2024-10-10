import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../Pictures/logo.png";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_col1 footer-col footer_links">
          <span id="footer_logo">
            <img src={logo} alt="not work" width={90} height={80} />
          </span>
          <Link to={"/#"}>TOOLS</Link>
          <Link to={"/VideoCompressor"}>VIDEO COMPRESSOR</Link>
          <Link to={"/PDF_TO_WORD"}>PDF TO WORD</Link>
          <Link to={"/WATERMARK"}>WATERMARK</Link>
        </div>
        <div className="footer_col2 footer-col">
          <span className="footer_links">
            <Link>Privacy Policies</Link>
            <Link>Connect With Us:</Link>
          </span>
          <span className="footer_icons">
            <FontAwesomeIcon className="footer_child_icon" icon={faFacebookF} />
            <FontAwesomeIcon className="footer_child_icon" icon={faInstagram} />
            <FontAwesomeIcon
              className="footer_child_icon"
              icon={faLinkedinIn}
            />
          </span>
        </div>
        <div className="footer_col3 footer-col">
          <div className="footer_form">
            <form>
              <label class="label">
                <span class="icon">
                  <FaUser size={20} />
                </span>

                <input
                  type="text"
                  class="input"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
              </label>
              <label class="label">
                <span class="icon">
                  <IoMdMail size={20} />
                </span>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
              </label>
              <label class="label">
                <span class="icon">
                  <TiMessages size={20} />
                </span>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
              </label>
            </form>
          </div>
        </div>
      </div>

      <div className="tab_footer">
        <div className="tab_footer_col3 footer-col">
          <div className="footer_form">
            <form>
              <label class="label">
                <span class="icon">
                  <FaUser size={20} />
                </span>

                <input
                  type="text"
                  class="input"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
              </label>
              <label class="label">
                <span class="icon">
                  <IoMdMail size={20} />
                </span>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
              </label>
              <label class="label">
                <span class="icon">
                  <TiMessages size={20} />
                </span>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
