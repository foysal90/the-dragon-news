import React from 'react';
import Home from '../../Home/Home';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';
const Header = () => {
    return (
        <Container>
           <div className="text-center">
           <img src={logo} alt="" />
            <p className='text-secondary'>
                <small>Journalism Without Fear or Favour</small>
                </p>
                <p>
                    {moment().format("dddd, MMMM D, YYYY")}

                </p>
           </div>
           <div className='d-flex'>
            <Button variant='danger'>Latest</Button>
            <Marquee className='text-danger' speed={70} pauseOnHover={true} direction='right'>Sorts, Politics, National, International</Marquee>
           </div>
            {/* <Link to='/home'>Home</Link> */}
        </Container>
    );
};

export default Header;