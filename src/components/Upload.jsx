import React from "react";
import pdf1 from "../Pictures/image 2.png";
import pdf2 from "../Pictures/icons8-pdf.gif";
import pdf3 from "../Pictures/image 3.png";
import video from "../Pictures/video.gif";
import "../style/Upload.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Upload = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("File selected:", file);
    // Handle the file upload logic here
  };

  return (
    <>
      <div className="Upload_container">
        <div className="col1">
          <span id="col1_spn1">
            <img src={pdf2} alt="not work" width={60} height={60} />
          </span>
          <span id="col1_spn2">
            <img src={pdf1} alt="not work" width={90} height={60} />
          </span>
        </div>

        <div className="col2">
          <div className="file_drop_box">
            <span className="file_drop_box_child">
              <div>
                <label htmlFor="file-upload" className="upload-icon">
                  {/* Use FontAwesome icon */}
                  <FontAwesomeIcon
                    icon={faUpload}
                    style={{ color: "#e07a5f" }}
                    size="2x"
                  />
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="upload-input"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            </span>
            <span className="file_drop_box_child">
              <p>
                Drag & drop files or <span className="text">Browser</span>
              </p>
            </span>
            <span className="file_drop_box_child">
              <p>Supported fomates JPEG,PNG,GIF,MP4,PDS,AI,Word,PPT</p>
            </span>
          </div>
        </div>

        <div className="col3">
          <span id="col3_spn1">
            <img src={pdf3} alt="not work" width={100} height={60} />
          </span>
          <span id="col3_spn2">
            <img src={video} alt="not work" width={40} height={50} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Upload;
