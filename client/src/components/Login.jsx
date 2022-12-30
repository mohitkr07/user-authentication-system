import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, checkUserName] = useState("");
  const [password, checkPassword] = useState("");

  const checkU = (e) => {
    checkUserName(e.target.value);
  };
  const checkP = (e) => {
    checkPassword(e.target.value);
  };

  const check = () => {
    axios
      .post("http://localhost:5000/", {
        username,
        password,
      })
      .then((response) => {
        alert(response.data.message);
        console.log(response);
      });
  };

  return (
    <>
      <div className="content login">
        <h2>Welcome Back</h2>
        <input
          className="inp field"
          type="text"
          value={username}
          onChange={checkU}
          placeholder="username"
        />
        <input
          className="inp field"
          type="password"
          value={password}
          onChange={checkP}
          placeholder="password"
        />
        <button className="btn inp" onClick={check}>
          Login
        </button>
      </div>
      <div className="forgotpass">
        <p>
          Forgot password? <a href="#">Reset Password</a>
        </p>
      </div>
    </>
  );
}

export default Login;
