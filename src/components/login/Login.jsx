import React, { useEffect, useState } from "react";
import { Descope, useSession, useUser } from "@descope/react-sdk";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  // isAuthenticated: boolean - is the user authenticated?
  // isSessionLoading: boolean - Use this for showing loading screens while objects are being loaded
  const { isAuthenticated, isSessionLoading } = useSession();
  // isUserLoading: boolean - Use this for showing loading screens while objects are being loaded
  const { isUserLoading } = useUser();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);

  const signUp = async (e) => {
    console.log(e.detail.user);
    const userD = {
      name: e.detail.user.name,
      email: e.detail.user.email,
      phone: e.detail.user.phone ? e.detail.user.phone : "",
    };
    const formData = new FormData();

    formData.set("name", JSON.stringify(e.detail.user.name));
    formData.set("email", JSON.stringify(e.detail.user.email));
    formData.set(
      "phone",
      JSON.stringify(e.detail.user.phone ? e.detail.user.phone : "")
    );

    if (e.detail.user.name != null) {
      try {
        const response = await fetch("/getuserdetails", {
          method: "POST",
          body: formData,
        });

        const parsedResponse = await response.json();
        if (response.ok) {
          setUserDetails(userD);
          // alert("file uploaded")
        } else {
          console.error("some error occured.");
        }
      } catch (e) {
        console.error(e.message);
      }
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/home");
    }
  }, [isAuthenticated]); // listen for when isAuthenticated has changed

  return (
    <div className="login">
      {(isSessionLoading || isUserLoading) && <p>Loading...</p>}

      {!isAuthenticated && (
        <>
          <Descope
            flowId="sign-up-or-in"
            onSuccess={(e) => signUp(e)}
            onError={(e) => console.log("Could not log in!")}
            theme="light"
          />
        </>
      )}
    </div>
  );
}

export default Login;
