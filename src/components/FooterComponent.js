import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

const FooterComponent = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", textAlignLast: "center", backgroundColor: "#77777F", height: "140px" }} >
            <Button size="md" style={{ backgroundColor: "#262020", borderRadius: "50%", alignSelf: "center", marginTop: "20px" }} onClick={() => window.scrollTo(0, 0)} >^</Button>
            <Row>
                <Col>
                    HFH
                </Col>
                <Col>
                    ---
                </Col>
                <Col>
                    Refugeeks
                </Col>
                <h3> Footer</h3>
            </Row>

        </div>
    );
}

export default FooterComponent;