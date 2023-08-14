import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Nft from "./components/nft/Nft";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<Nft />} />
      </Routes>
    </Router>
  );
}

export default App;
