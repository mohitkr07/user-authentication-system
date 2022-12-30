import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  let onSignup = () => {
    axios
      .post("http://localhost:5000/register", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
      });
    alert("registered");
  };

  console.log(username + " " + password);
  return (
    <>
      <div className="content register">
        <h2>Welcome</h2>
        <input
          className="inp field"
          type="text"
          value={username}
          onChange={changeUserName}
          placeholder="username"
        />
        <input
          className="inp field"
          type="password"
          value={password}
          onChange={changePassword}
          placeholder="password"
        />
        <button onClick={onSignup} className="btn inp">
          Signup
        </button>
      </div>
    </>
  );
}

export default Register;
