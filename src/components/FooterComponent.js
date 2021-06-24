import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

const FooterComponent = () => {
    return (

        <Row style={{ textAlign: "center", backgroundColor: "#77777F", height: "140px" }}>
            <Col className="mt-3">
                HFH
            </Col>
            <Col className="mt-3">
                <Button size="md" style={{ backgroundColor: "#262020", borderRadius: "50%" }} onClick={() => window.scrollTo(0, 0)} >^</Button>
            </Col>
            <Col className="mt-3">
                Refugeeks
            </Col>
        </Row>

    );
}

export default FooterComponent;