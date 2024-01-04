import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FcPortraitMode, FcSettings } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  // const userIcon = <FaUserAlt />;
  const navigate = useNavigate();
  const [success, setSuccess] = useState('')

  

  

  const handleSingedOut = () => {
   
    logOut().then(() => {
      setSuccess("logged Out");
      setSuccess('')
    
      navigate('/')
      
     
    });
  };
  return (
    <Container>
      <div className="text-center">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button className="bg-red-700">Latest</Button>
        <Marquee
          className="text-danger"
          speed={70}
          pauseOnHover={true}
          direction="right"
        >
          Sorts, Politics, National, International
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-2">
              <Link to="/">Home</Link>
              <Link to="">About</Link>
              <Link to="#">Career</Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={user && user.email}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="flex gap-2 leading-none"
                >
                  <FcPortraitMode />
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="flex gap-2 leading-none"
                >
                  <FcSettings /> Settings
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="flex gap-2 leading-none"
                >
                  <TbLayoutDashboard /> Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  className="flex gap-2 leading-none"
                >
                  <AiOutlineLogout /> {user ? (
                    <>
                <button onClick={handleSingedOut}>logout</button>
              
                
                </>
              ) : (
                <>
                  
                  <Link to="/signin">
                    Login
                  </Link>
                </>
              )}
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link to='/'><FaUserAlt  /></Nav.Link> */}
              <p>{success}</p>
              {user ? (
                    <button  onClick={handleSingedOut}>Sign out</button>
                  ) : (
                    <>
                    <Link to="/signin"><button>Login</button></Link>
                    
                    </>
                  )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
