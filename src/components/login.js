import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import CustomImageCaptcha from "./CustomImageCaptcha"; // Import the custom component

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      toast.error("Please complete the CAPTCHA to proceed", {
        position: "bottom-center",
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      window.location.href = "/profile";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Integrate the custom image CAPTCHA */}
      <div className="mb-3">
        <CustomImageCaptcha onVerify={setCaptchaVerified} />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={!captchaVerified}>
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user <a href="/register">Register Here</a>
      </p>
      <SignInwithGoogle />
    </form>
  );
}

export default Login;
