import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <Link to="/">
            <button className="home-btn">Go to Home Page</button>
          </Link>
        </div>
      ) : (
        <>
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="loginform-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="loginform-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginPage;
