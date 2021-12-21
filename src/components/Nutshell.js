import React, { Component } from "react";
// import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import { Routes, Route, Navigate } from "react-router-dom";
// import { Login } from "./auth/Login";
// import { Register } from "./auth/Register";
import { LoginRegister } from "./auth/Login-Register"

class Nutshell extends Component {
  render() {
    return (
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    );
  }
}

const Auth = () => {
  if (localStorage.getItem('react_nutshell_user')) {
    
    return(
      <>
        {/* <NavBar /> */}
        <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login-register" />;
  }
}

export default Nutshell;