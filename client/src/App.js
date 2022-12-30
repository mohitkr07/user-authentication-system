import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
