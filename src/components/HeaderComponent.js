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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const HeaderComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container fluid id="header">
            <Navbar color="light" light >

                <NavbarBrand >HFH</NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <NavItem>
                            <NavLink href="#werteProJahr">Werte Pro Jahr</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#anzahlderKommentare">Anzahl der Kommentare pro Klinik</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#bewertungen">Bewertungen</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#fachbereichen">Fachbereichen</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#kommentare">Kommentare</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
}

export default HeaderComponent;