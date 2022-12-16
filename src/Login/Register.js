import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(true);
  const { createUser, updatePrifileUser, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleToSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        updateUserProfile(name);
        handleEmailVerification();
        toast.success("please verify your email address before login");
      })
      .catch((error) => {
        setError(error.message);
      });
    // navigate("/login");
  };

  const updateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updatePrifileUser(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleToAccept = (event) => {
    setAccepted(event.target.checked);
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Form onSubmit={handleToSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleToAccept}
            type="checkbox"
            label={
              <>
                Accept<Link to="/terms">Terms And Condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
