import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronComponent = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container >
                    <h1 className="display-3">Data ist Macht</h1>
                    <p className="lead">Wir röntgen Ihre Daten...</p>
                    <hr className="my-2" />
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;