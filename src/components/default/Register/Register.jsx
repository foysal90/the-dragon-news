import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const {createUser, setUser} = useContext(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            alert('User created')

        })
        .catch(error => {
            alert(error.message)
        } )

    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="email" name="email" id="" placeholder='email' />
                <br />
                <input type="password" name="password" id="" placeholder='password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;