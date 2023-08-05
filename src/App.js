import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PdfViewer from './components/PdfViewer/PdfViewer';
import Home from './components/home/Home';
//import UploadResume from "./components/uploadResume/UploadResume"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<PdfViewer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
