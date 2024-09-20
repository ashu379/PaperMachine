import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/logo.png";

const Header = () => {
  return (
    <nav>
      <span className="logo">
        <Link to={"/"}>
          <img src={logo} alt="not" />
        </Link>
      </span>

      <main>
        <Link to={"/Tools"}>TOOLS</Link>
        <Link to={"/VideoCompressor"}>VIDEO COMPRESSOR</Link>
        <Link to={"/PDF_TO_WORD"}>PDF TO WORD</Link>
        <Link to={"/WATERMARK"}>WATERMARK</Link>
      </main>

      <span className="account_details">
        <Link id="login">Log-in</Link>
        <Link>Sign-up</Link>
      </span>
    </nav>
  );
};

export default Header;
