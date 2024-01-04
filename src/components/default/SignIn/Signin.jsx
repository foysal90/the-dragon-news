import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, Toast } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const Signin = () => {
    const {signIn, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogIn = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setUser(loggedUser)
            navigate(from, { replace: true });
            toast.success('signed in')
            form.reset()

        })
        .catch(error => {
            console.log(error.message)
            toast.error(error)
        })

    }

    
    return (
        <div>
            <Toaster/>

            <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="bg-primary" type="submit">
        Sign in
      </Button>
    </Form>
            <p>new here ? <Link to="/register">Register</Link></p>
            
        </div>
    );
};

export default Signin;