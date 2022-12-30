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
        console.log(response);
      });
  };

  return (
    <>
      <div className="content login">
        <h2>Login</h2>
        <input
          className="inp field"
          type="text"
          value={username}
          onChange={checkU}
        />
        <input
          className="inp field"
          type="password"
          value={password}
          onChange={checkP}
        />
        <button className="btn inp" onClick={check}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
