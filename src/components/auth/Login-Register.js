import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./Auth.css";
import { CheckCircleFill, PersonCircle } from "react-bootstrap-icons";

export const LoginRegister = (props) => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState({});
  const [last_name, setLastName] = useState({});
  const [password, setPassword] = useState("");

  const [isSignUp, setSignUp] = useState(false);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const existingLoginUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    existingLoginUserCheck().then((userExists) => {
      if (userExists) {
        localStorage.setItem("build_a_rig_user", userExists.id);
        navigate("/");
      } else {
        setShow(true);
      }
    });
  };

  const existingRegisterUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((user) => !!user.length);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    existingRegisterUserCheck().then((userExists) => {
      if (!userExists) {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ first_name, last_name, email, password }),
        })
          .then((res) => res.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("build_a_rig_user", createdUser.id);
              navigate("/");
            }
          });
      } else {
        setShow(true);
      }
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p>User doesn't exist or check for spelling</p>
        </Modal.Body>
      </Modal>

      <div className="main-container">
        <img src={require("../../imgs/app-logo.png")} alt="Build-A-Rig Logo" />
        <div className={isSignUp ? "right-panel-active" : ""} id="container">
          {/* LogIn/SignIn Form w/ Signup Button to the right */}
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="icon-container">
                <PersonCircle id="person-circle-icon" size={36} />
              </div>
              <input
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
              <button
                onClick={handleLogin}
                type="submit"
                className="form-btn form-btn-signin"
              >
                Sign In
              </button>
            </form>
          </div>
          {/* Sign Up form w/ Login Button to the left */}
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Sign up</h1>
              <div className="icon-container">
                <CheckCircleFill id="check-circle-fill-icon" size={36} />
              </div>
              <input
                className="form-input"
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="form-input"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                minLength={8}
                required
              />
              <button
                onClick={handleRegister}
                type="submit"
                className="form-btn form-btn-signup"
              >
                Sign Up
              </button>
            </form>
          </div>
          {/* Login Form w/ Signup Button to the right */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Already Have An Account?</h1>
                <p className="form-lead">
                  Please login with your personal info to get back to building
                  your rig
                </p>
                <Link to="/login">
                  <button
                    onClick={() => {
                      setSignUp(false);
                    }}
                    className="ghost"
                    id="signIn"
                  >
                    <span>Sign In</span>
                  </button>
                </Link>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Miner!</h1>
                <p className="form-lead">
                  Let's start your journey into building your first crypto
                  mining rig
                </p>
                <Link to="/register">
                  <button
                    onClick={() => {
                      setSignUp(true);
                    }}
                    className="ghost"
                    id="signUp"
                  >
                    <span>Sign Up</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
