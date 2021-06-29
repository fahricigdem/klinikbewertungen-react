import React, { useState } from 'react';
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle, UncontrolledTooltip } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Sentiment from 'sentiment';

const SentimentAnalysisDE = ({ dark }) => {

    const sentiment = new Sentiment();

    const [sentimentScore, setSentimentScore] = useState(null)
    const [generalSentiment, setGeneralSentiment] = useState(null)


    const findSentiment = (e) => {
        const result = sentiment.analyze(e.target.value)
        console.log(result)
        setSentimentScore(result.score)

        if (result.score > 0) {
            setGeneralSentiment('Positive')
        } else if (result.score < 0) {
            setGeneralSentiment('Negative')
        } else {
            setGeneralSentiment('Neutral')
        }

    }


    return (
        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"} >
            <CardBody className={generalSentiment === "Positive" ? "bg-success text-light" : generalSentiment === "Negative" ? "bg-danger text-light" : ""}>
                <CardTitle tag="h5">Sentiment Analysis</CardTitle>
                <CardSubtitle tag="h6" > </CardSubtitle>
                <Label for="exampleText" className="mb-1 mt-2" >Type the text here to analyze it</Label>
                <Input type="textarea" rows="12" name="text" id="exampleText" onChange={findSentiment} />



                <p className="mt-4" >Result: {generalSentiment}</p>
                <p>Quantity:  {(sentimentScore / 7).toPrecision(4)}</p>
            </CardBody>

        </Card>
    );
}

export default SentimentAnalysisDE;