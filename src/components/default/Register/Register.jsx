import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

import { Button, Form } from "react-bootstrap";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        alert("User created");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked)

  }
  return (
    <div>
      <h1 className="text-start text-xl font-bold mb-3">Please Register </h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>
        <Button className="bg-primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
