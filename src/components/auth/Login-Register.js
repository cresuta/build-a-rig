import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Auth.css';

export const LoginRegister = (props) => {

  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState({});
  const [last_name, setLastName] = useState({});
  const [zipCode, setZipCode] = useState({});

  const [isSignUp, setSignUp] = useState(false)

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const existingLoginUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())
    .then(user => user.length ? user[0] : false);
  }

  const handleLogin = e => {
    e.preventDefault();
    existingLoginUserCheck()
    .then(userExists => {
      if (userExists) {
        localStorage.setItem('react_nutshell_user', userExists.id);
        navigate('/');
      } else {
        setShow(true);
      }
    });
  }

  const existingRegisterUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())
    .then(user => !!user.length)
  }

  const handleRegister = (e) => {
    e.preventDefault();
    existingRegisterUserCheck()
    .then((userExists) => {
      if (!userExists) {
        fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
              { first_name,
                last_name,
                email,
                zipCode
              }
            )
        })
        .then(res => res.json())
        .then(createdUser => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("react_nutshell_user", createdUser.id);
              navigate("/");
            }
        })
      }
      else {
        setShow(true);
      }
    });
  }

return (
    <>
    <Modal 
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <p>
            User doesn't exist
          </p>
        </Modal.Body>
      </Modal>

<div className={isSignUp ? "right-panel-active" : ""} id="container">
    {/* LogIn/SignIn Form w/ Signup Button to the right */}
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				{/* <i className="fab fa-facebook-f"></i>
				<i className="fab fa-google-plus-g"></i>
				<i className="fab fa-linkedin-in"></i> */}
			</div>
			<input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
			<button onClick={handleLogin} type="submit">Sign In</button>
		</form>
	</div>
    {/* Sign Up form w/ Login Button to the left */}
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				{/* <a href="#" class="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i className="fab fa-linkedin-in"></i></a> */}
			</div>
			<span>or use your email for registration</span>
			<input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="first name" required />
			<input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name" required />
			<input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" required />
			<input onChange={(e) => setZipCode(parseInt(e.target.value))} type="text" placeholder="zip code" minLength="5" required />
			<button onClick={handleRegister} type="submit">Sign Up</button>
		</form>
	</div>
    {/* Login Form w/ Signup Button to the right */}
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Already Have An Account?</h1>
				<p>To enter your mining rig build area, please login with your personal info</p>
				<Link to='/login' >
                    <button onClick={() => {setSignUp(false)}} className="ghost" id="signIn">Sign In</button>
                </Link>
            </div>
			<div className="overlay-panel overlay-right">
				<h1>First Time?</h1>
				<p>Enter your personal details and start your journey into crypto mining</p>
                <Link to='/register' >
                    <button onClick={() => {setSignUp(true)}} className="ghost" id="signUp">Sign Up</button> 
                </Link>
			</div>
		</div>
	</div>
</div>
</>
)
}