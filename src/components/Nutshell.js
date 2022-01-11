import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";
import ApplicationViews from "./ApplicationViews";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginRegister } from "./auth/Login-Register";

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
  if (localStorage.getItem("build_a_rig_user")) {
    return (
      <>
        <Navbar />
        <ApplicationViews />
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Nutshell;
