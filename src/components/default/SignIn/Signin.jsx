import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
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

            <form onSubmit={handleLogIn}>
                <input type="email" name="email" id="email" placeholder='email' />
                <br />
                <input type="password" name="password" id="password" placeholder='password' />
                <br />
                <input type="submit" value="signIn" />
            </form>
            <p>new here ? <Link to="/register">Register</Link></p>
            
        </div>
    );
};

export default Signin;