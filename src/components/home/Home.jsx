import React, { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import CheckIcon from "@mui/icons-material/Check";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const fileInput = createRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("resume", fileInput.current.files[0]);

    if (fileInput.current.files[0] != null) {
      try {
        const response = await fetch("/resume", {
          method: "POST",
          body: formData,
        });

        const parsedResponse = await response.json();
        if (response.ok) {
          setResume(fileInput.current.files[0].name);
          // alert("file uploaded")
        } else {
          console.error("some error occured.");
        }
      } catch (e) {
        console.error(e.message);
      }
    } else {
      alert("Upload a file");
    }
  };

  const navigateToResume = () => {
    navigate("/resume");
  };

  const navigateToNFT = () => {
    navigate("nft");
  };

  return (
    <div className="home-page">
      <Navbar />
      {/* <form onSubmit={onSubmit}>
        <input type='file' name="resume" ref={fileInput}/>
        <input type="submit" value="Submit"/>
    </form> */}

      <div className="file-upload">
        <form onSubmit={onSubmit}>
          <div className="file-upload-wrap">
            <input
              className="file-upload-input"
              type="file"
              name="resume"
              ref={fileInput}
            />
            <div className="drag-text">
              {resume !== null ? (
                <h3> {resume}</h3>
              ) : (
                <h3> Select Your Resume</h3>
              )}
            </div>
          </div>
          <button className="file-upload-btn" type="submit" value="Upload">
            <CheckIcon /> <p>Upload</p>
          </button>
          {/* <input className="file-upload-btn" type="submit" value="Upload"></input> */}
        </form>
      </div>

      <button className="next-btn" onClick={navigateToNFT}>
        Next
      </button>
    </div>
  );
};

export default Home;
