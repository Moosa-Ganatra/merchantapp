import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

function Login() {
  const passwordRef = useRef();
  const emailRef = useRef();
  return (
    <div className="container">
      <form className="mainContainer">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} id="email" placeholder="email" required />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="password"
          required
        />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
