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

import logo1 from '../images/logo1.png'
import logo from '../images/logo.png'

const HeaderComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar color="light" light >
            <Container fluid id="header" id="Oben" >

                <NavbarBrand>
                    <Media object src={logo} style={{ height: "40px" }} />&nbsp;
                    <Media object src={logo1} style={{ height: "30px" }} />
                </NavbarBrand>


                <NavbarToggler onClick={toggle} />


                <Collapse isOpen={isOpen} navbar style={{ flexGrow: "0" }}>

                    <Nav navbar >
                        <NavItem >
                            <NavLink onClick={toggle} href="https://vue-js-three.vercel.app/" >Für Kunden</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>

            </Container>
        </Navbar>

    );
}

export default HeaderComponent;