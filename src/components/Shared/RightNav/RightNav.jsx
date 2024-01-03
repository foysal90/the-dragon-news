import React, { useContext } from "react";
import { FcGoogle} from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { Container,Button } from "react-bootstrap";
import './RightNav.css'
import { Link, Navigate } from "react-router-dom";
import QZone from "../../Pages/Qzone";

const RightNav = () => {
  const { setUser, googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container >
      <h6 className="mb-3" >Login With</h6>
      <div >
        <Button className="w-75 bg-light text-primary flex leading-none" onClick={handleGoogleSignIn}>
            <FcGoogle className="me-2 " /> Login with Google</Button>
        <Button className="mt-2  w-75 bg-white text-secondary flex leading-none" onClick={handleGoogleSignIn}>
        <FaGithub className="me-2" /> Login with Github
        </Button>
      </div>

     <div className="mt-5">
        <h5>Find Us On</h5>
        <ul className="social">
            <li className="w-75 ">
                <Link className="links text-secondary flex leading-none gap-2" to="https://www.facebook.com/"> <FaFacebook className="text-primary"/>
                 Facebook
                 </Link></li>
            <li className="w-75 flex leading-none gap-2"> <FaTwitter className=""/>  Twitter</li>
            <li className="w-75 flex leading-none gap-2" > <FaInstagram className=""/>  Instagram</li>
        </ul>
     </div>
     <br />
     <QZone/>
     <div className="bg-img">
        <h2>Create an Amazing Newspaper </h2>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="bg-red-900 p-3">Learn More</button>

     </div>
    </Container>
  );
};

export default RightNav;
