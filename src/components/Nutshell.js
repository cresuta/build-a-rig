import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginRegister } from "./auth/Login-Register"

class Nutshell extends Component {
  render() {
    return (
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/register" element={<LoginRegister />} />
      </Routes>
    );
  }
}

const Auth = () => {
  if (localStorage.getItem('react_nutshell_user')) {
    
    return(
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default Nutshell;