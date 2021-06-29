import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import up from '../images/up.png'

const FooterComponent = () => {
    return (

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
                <p className="text-white">R e f u g e e k s</p>
            </Col>
        </Row>

    );
}

export default FooterComponent;