import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secendary'><small> Journalism Without Fear or Favour </small></p>
                <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
            </div>
            <div className='d-flex bg-secondary '>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-light' speed={80}>
                    I can be a React component, multiple React components, or just some text.... &nbsp;&nbsp;&nbsp;   I can be a React component, multiple React components, or just some text.... &nbsp;&nbsp;&nbsp;   ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quo.
                </Marquee>
            </div>
            <Navbar  className='my-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home </Nav.Link>
                            <Nav.Link href="#pricing"> About</Nav.Link>
                            <Nav.Link href="#career"> Career</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;