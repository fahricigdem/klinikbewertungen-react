import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import jumbotron_image from '../images/jumbotron_image.png'

const JumbotronComponent = () => {
    return (
        <div>

            <Jumbotron fluid style={{ backgroundImage: `url(${jumbotron_image})`, backgroundSize: 'cover', textAlign: 'right' }}>
                <Container fluid >
                    <br className="my-2" />

                    <br className="my-2" />
                    <p className="lead align-self-end text-white">Wir beleuchten gerne Ihren Weg zum Ziel</p>
                    <br className="my-2" />
                    <br className="my-2" />
                    <br className="my-2" />

                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;