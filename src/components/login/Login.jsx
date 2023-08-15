import React, { useEffect } from "react";
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

  useEffect(() => {
    if (isAuthenticated) {
      alert("sign up successful");
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
            onSuccess={(e) => console.log(e.detail.user)}
            onError={(e) => console.log("Could not log in!")}
            theme="light"
          />
        </>
      )}
    </div>
  );
}

export default Login;
