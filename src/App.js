import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PdfViewer from "./components/PdfViewer/PdfViewer";
import Home from "./components/home/Home";
import PdfSelector from "./components/pdf-selector/PdfSelector";
import Nft from "./components/nft/Nft";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/resume" element={<PdfViewer />} /> */}
        <Route path="/nft" element={<Nft />} />
      </Routes>
    </Router>
  );
}

export default App;
