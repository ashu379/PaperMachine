import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const MergePdf = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("File selected:", file);
    // Handle the file upload logic here
  };

  return (
    <>
      <div className="Merge_container">
        <h1>Merge PDF</h1>
        <div className="MergePdf">
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
              <div className="tool_box"></div>

              <div className="tool_box"></div>

              <div className="tool_box"></div>
              <div className="tool_box"></div>
            </div>
          </div>

          <div className="upload_container">
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
        </div>
      </div>
    </>
  );
};

export default MergePdf;
