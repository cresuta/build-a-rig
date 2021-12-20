import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Modal, Container } from "react-bootstrap";
import "./Auth.css";

export const Register = () => {

  const [email, setEmail] = useState({});
  const [firstName, setFirstName] = useState({});
  const [lastName, setLastName] = useState({});
  const [password, setPassword] = useState({});
  const [zipCode, setZipCode] = useState({});
  const [electricty, setElectricity] = useState({});
  
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())
    .then(user => !!user.length)
  }

  const handleRegister = (e) => {
    e.preventDefault();
    existingUserCheck()
    .then((userExists) => {
      if (!userExists) {
        fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
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
    <Container
      className='d-flex align-items-center'
      style={{
        height: '100vh'
      }}
    >
      <Modal 
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <p>
            User already exists!
          </p>
        </Modal.Body>
      </Modal>
      <Form>
        <Form.Group>
        <Form.Label>First Name</Form.Label>
          <Form.Control onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="first name" required />
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name" required />
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" required />
          <Form.Label>Password (8 characters minimum)</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" minlength="8" required />
          <Form.Label>Zip Code</Form.Label>
          <Form.Control onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="zip code" minlength="5" required />
          <Form.Text className="text-muted">
            You can trust us!
          </Form.Text>
          <Form.Text  className="text-muted">
            Already have an account? <Link to='/login' >Login</Link>
          </Form.Text>
        </Form.Group>
        <Button onClick={handleRegister} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}