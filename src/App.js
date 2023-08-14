import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Nft from "./components/nft/Nft";
import Login from "./components/login/Login";
// import Test from "./components/test/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/nft" element={<Nft />} />
      </Routes>
    </Router>
  );
}

export default App;
