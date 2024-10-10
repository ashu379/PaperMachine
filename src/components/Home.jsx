import React from "react";
import Upload from "./Upload";

function Home() {
  return (
    <>
      <div className="heading_container">
        <span className="heading">
          <h1 className="Common_header">
            Effortlessly Convert, Edit, and Share PDFs with Our Powerful Tool
          </h1>
        </span>
      </div>
      <Upload />
      <div className="index_container">
        <div className="Section">
          <span>
            <h2>
              <p>Paper</p> Machine
            </h2>
          </span>
          <span>
            <h3>The Ultimate App to Solve All Your Paper Problem!</h3>
          </span>
        </div>{" "}
        {/*this is index div classname index_container */}
        <div className="home_bottom_section">
          <div className="box">box</div>
          <div className="box">box</div>
          <div className="box">box</div>
          <div className="box">box</div>
          <div className="box">box</div>
          <div className="box">box</div>
          <div className="box">box</div>
          <div className="box">box</div>
        </div>
      </div>
    </>
  );
}

export default Home;
