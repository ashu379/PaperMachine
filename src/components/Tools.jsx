import React from "react";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <>
      <div className="tool_container">
        <div className="tool_section1">
          <button>
            <Link to={"/Split"}>Split</Link>
          </button>
          <button>
            <Link to={"/AddPage"}>Add Page</Link>
          </button>
          <button>
            <Link to={"/AddText"}>Add Text</Link>
          </button>
        </div>

        <div className="tool_section2">
          <div className="tools_center">
            <div className="tool_box"></div>

            <div className="tool_box"></div>

            <div className="tool_box"></div>

            <div className="tool_box"></div>
            <div className="tool_box"></div>

            <div className="tool_box"></div>

            <div className="tool_box"></div>
            <div className="tool_box"></div>
          </div>
        </div>

        <div className="tool_section3">
          <button>
            {" "}
            <Link to={"/PDF_TO_WORD"}>PDF TO WORD</Link>
          </button>

          <button>
            <Link to={"/ProtectPdf"}>Protect PDF</Link>
          </button>
          <button>
            <Link to={"/Rotate"}>Rotate PDF</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Tools;
