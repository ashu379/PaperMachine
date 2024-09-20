import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.scss";
import "./style/Colours.scss";
import "./style/Header.scss";
import "./style/Index.scss";
import "./style/Footer.scss";
import "./style/Tools.scss";
import "./style/Mergepdf.scss";
import "./style/Upload.scss";

import Header from "./components/Header";
import WATEMARK from "./components/WATEMARK";
import VideoCompressor from "./components/VideoCompressor";
import PDT_TO_WORD from "./components/PDT_TO_WORD";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import Home from "./components/Home";
import MergePdf from "./components/MergePdf";
import Split from "./components/Split";
import Upload from "./components/Upload";

function App() {
  return (
    <Router>
      <Header />
      <Upload />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/WATERMARK" element={<WATEMARK />} />
        <Route path="/VideoCompressor" element={<VideoCompressor />} />
        <Route path="/PDF_TO_WORD" element={<PDT_TO_WORD />} />
        <Route path="/MergePdf" element={<MergePdf />} />
        <Route path="/Split" element={<Split />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
