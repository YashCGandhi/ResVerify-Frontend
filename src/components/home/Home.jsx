import React, { createRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import CheckIcon from "@mui/icons-material/Check";
import {
  useDescope,
  useUser,
  getSessionToken,
  useSession,
} from "@descope/react-sdk";
import { Descope } from "@descope/react-sdk";
import "./Home.css";

const Home = () => {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user, isUserLoading } = useUser();
  const { logout } = useDescope();

  const navigate = useNavigate();

  const exampleFetchCall = async () => {
    const sessionToken = getSessionToken();

    // example fetch call with authentication header
    fetch("your_application_server_url", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionToken,
      },
    });
  };

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

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
      alert("Upload Resume");
    }
  };

  const navigateToResume = () => {
    navigate("/resume");
  };

  const navigateToNFT = () => {
    navigate("nft");
  };

  return (
    <>
      {!isAuthenticated && (
        <Descope
          flowId="sign-up-or-in"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(e) => console.log("Could not log in!")}
        />
      )}

      {(isSessionLoading || isUserLoading) && <p>Loading...</p>}

      {!isUserLoading && isAuthenticated && (
        <>
          <div className="home-page">
            <Navbar />
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
                <button
                  className="file-upload-btn"
                  type="submit"
                  value="Upload"
                >
                  <CheckIcon /> <p>Upload</p>
                </button>
                {/* <input className="file-upload-btn" type="submit" value="Upload"></input> */}
              </form>
            </div>

            <button className="next-btn" onClick={navigateToNFT}>
              Next
            </button>
          </div>
          <p>Hello {user.name}</p>
          <div>My Private Component</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
};

export default Home;
