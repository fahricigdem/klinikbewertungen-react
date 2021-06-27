import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

    Media
} from 'reactstrap';

import logo1 from '../images/logo1.jpeg'
import logo from '../images/logo.png'

const HeaderComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container fluid id="header">
            <Navbar color="light" light >


                <NavbarBrand className="mr-auto" expand="md" dark >
                    <Media object src={logo} style={{ height: "40px" }} />&nbsp;
                    <Media object src={logo1} style={{ height: "30px" }} />
                </NavbarBrand>


                <NavbarToggler onClick={toggle} />


                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink onClick={toggle} href="https://vue-js-three.vercel.app/">Für Kunden</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>


            </Navbar>
        </Container>
    );
}

export default HeaderComponent;