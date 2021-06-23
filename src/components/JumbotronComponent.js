import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import jumbotron_image from '../images/jumbotron_image.png'

const JumbotronComponent = () => {
    return (
        <div>

            <Jumbotron fluid style={{ backgroundImage: `url(${jumbotron_image})`, backgroundSize: 'cover' }}>
                <Container >
                    <h1 className="display-3">Data ist Macht!</h1>
                    <p className="lead">Nur beleuchten wir gerne Ihren Weg zum Ziel</p>
                    <hr className="my-2" />
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;