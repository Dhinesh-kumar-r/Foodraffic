import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoSearchOutline, IoBagHandleSharp } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import "animate.css"; // Import Animate.css
import "./Navbar.css";
import { StoreContext } from '../../Context/Context';

function Navigation() {
    const { setOpenModal } = useContext(StoreContext);

    return (
        <Navbar collapseOnSelect expand="lg" className='animate__animated animate__fadeInDown'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src="logo.png" alt="logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-bar-item">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact us</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href="#search"><IoSearchOutline className='search-icon' /></Nav.Link>
                        <Nav.Link href="#cart"><IoBagHandleSharp className='cart' /></Nav.Link>
                        <Nav.Link href="#signin" className='signin' onClick={() => setOpenModal(true)}>
                            <PiSignInBold className='signin-icon' /> Sign in
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
