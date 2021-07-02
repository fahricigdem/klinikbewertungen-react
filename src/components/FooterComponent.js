import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import up from '../images/up.png'

const FooterComponent = () => {
    return (
        <Container fluid>
            <Row style={{ textAlign: "center", backgroundColor: "#77777F", height: "140px" }}>
                <Col className="mt-3">
                    <br />
                    <p className="text-white">H F H</p>
                </Col>
                <Col className="mt-3">

                    <a href="#Oben" style={{ textDecoration: "none" }}><img src={up} /></a>

                </Col>
                <Col className="mt-3">
                    <br />
                    <p className="text-white" style={{ fontSize: ".8rem" }} >R e f u g e e k s</p>
                </Col>
            </Row>
        </Container>

    );
}

export default FooterComponent;