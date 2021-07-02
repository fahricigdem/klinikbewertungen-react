import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import jumbotron_image from '../images/jumbotron_image.jpeg'
import jumbotron_imageBig from '../images/jumbotron_imageBig.png'

const JumbotronComponent = () => {

    let image = jumbotron_image


    if (window.screen.width > 1250) {
        image = jumbotron_imageBig
    }



    return (
        <div>

            <Jumbotron fluid style={{ backgroundImage: `url(${image}) `, backgroundPosition: "center center", webkitBackgroundSize: "cover", mozBackgroundSize: "cover", oBackgroundSize: "cover", backgroundSize: "cover" }}>
                <Container fluid style={{ height: window.innerHeight / 3.5 }}>

                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumbotronComponent;