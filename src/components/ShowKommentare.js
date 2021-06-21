import React from 'react';
import ChartResult from './ChartResult'
import ChartGruppe from './ChartGruppe'
import ChartSource from './ChartSource'
import ChartSterne from './ChartSterne'
import ChartGesamt from './ChartGesamt'
import ChartYearlyComments from './ChartYearlyComments'
import ChartYearly from './ChartYearly';
import ChartYearlyPolarity from './ChartYearlyPolarity';
import PaginationComponent from './PaginationComponent'
import { Row, Col } from 'reactstrap';
import { GoogleMapsYearlyPosNeg } from '../Data/Lists'
import { KlinikDeYearlyPosNeg } from '../Data/Lists'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Progress } from 'reactstrap';
import Klinik_Polarity from '../images/Klinik_Polarity.png'
import Klinik_Sterne from '../images/Klinik_Sterne.png'
import KlinikDe_Polarity from '../images/KlinikDe_Polarity.png'
import KlinikDe_Gesamt from '../images/KlinikDe_Gesamt.png'




const ShowKommentare = ({ Dataset, pagesCount, pageSize, currentPage, handlePageBottom, handlePageSelect, klinik, source, result, gruppe }) => {

    ////////////  Diagram Data ////////////////////////////
    let positive = 0
    let negative = 0
    let data01 = []

    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let data02 = []

    let sourceGoogle = 0
    let sourceKlinikDe = 0
    let data03 = []

    let oneStern = 0
    let twoStern = 0
    let threeStern = 0
    let fourStern = 0
    let fiveStern = 0
    let data04 = []

    let sehrZufrieden = 0
    let zufrieden = 0
    let wenigerZufrieden = 0
    let unzufrieden = 0
    let data05 = []

    Dataset.map(c => {

        positive = c.positive ? (positive + 1) : positive
        one = c.group === 0 ? (one + 1) : one
        two = c.group === 1 ? (two + 1) : two
        three = c.group === 2 ? (three + 1) : three
        four = c.group === 3 ? (four + 1) : four
        sourceGoogle = c.source === "googleMaps" ? (sourceGoogle + 1) : sourceGoogle
        oneStern = c.sterne === 1 ? (oneStern + 1) : oneStern
        twoStern = c.sterne === 2 ? (twoStern + 1) : twoStern
        threeStern = c.sterne === 3 ? (threeStern + 1) : threeStern
        fourStern = c.sterne === 4 ? (fourStern + 1) : fourStern
        fiveStern = c.sterne === 5 ? (fiveStern + 1) : fiveStern
        sehrZufrieden = c.gesamt === 100 ? (sehrZufrieden + 1) : sehrZufrieden
        zufrieden = c.gesamt === 67 ? (zufrieden + 1) : zufrieden
        wenigerZufrieden = c.gesamt === 33 ? (wenigerZufrieden + 1) : wenigerZufrieden
        unzufrieden = c.gesamt === 0 ? (unzufrieden + 1) : unzufrieden

        return c
    }
    )

    negative = Dataset.length - positive
    sourceKlinikDe = Dataset.length - sourceGoogle
    let sourceGooglePercent = Math.round(sourceGoogle / (sourceKlinikDe + sourceGoogle) * 100)
    let sourceKlinikDePercent = Math.round(sourceKlinikDe / (sourceKlinikDe + sourceGoogle) * 100)

    data01 = [
        { name: 'Positive', value: positive },
        { name: 'Negative', value: negative }
    ];

    data02 = [
        { name: 'Gruppe-1', value: one },
        { name: 'Gruppe-2', value: two },
        { name: 'Gruppe-3', value: three },
        { name: 'Gruppe-4', value: four }
    ];


    data03 = [
        { name: 'Google', value: sourceGoogle },
        { name: 'KlinikDe', value: sourceKlinikDe }
    ];

    data04 = [
        { name: '1 Stern', value: oneStern },
        { name: '2 Stern', value: twoStern },
        { name: '3 Stern', value: threeStern },
        { name: '4 Stern', value: fourStern },
        { name: '5 Stern', value: fiveStern }
    ];

    data05 = [
        { name: 'Sehr Zufrieden', value: sehrZufrieden },
        { name: 'Zufrieden', value: zufrieden },
        { name: 'Weniger Zufrieden', value: wenigerZufrieden },
        { name: 'Unzufrieden', value: unzufrieden }
    ];

    let data06 = GoogleMapsYearlyPosNeg
    let data07 = KlinikDeYearlyPosNeg

    //////////////////////////////////////////////////////////

    const rezensionen = Dataset.map(komment =>

        <Col xs="12" key={komment.index}>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Rezension Nr.: {komment.index + 1} </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{komment.name}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>{komment.komment}</CardText>
                    <p>Result durch TextBlob: {komment.positive ? "Positive" : "Negative"}</p>
                    {komment.titel && <p>Titel: {komment.titel} </p>}
                    <p>Datum: {komment.datum ? komment.datum : komment.year}</p>
                    {komment.fachbereich && <p>Fachbereich: {komment.fachbereich} </p>}
                    <p>polarity: {komment.polarity}</p>
                    <p>gesamt: {komment.gesamt}</p>
                    <p>qualität: {komment.qualität}</p>
                    <p>behandlung: {komment.behandlung}</p>
                    <p>verwaltung: {komment.verwaltung}</p>
                    <p>ausstattung: {komment.ausstattung}</p>
                    <p>Group: {komment.group + 1}</p>
                    <p>sterne: {komment.sterne}</p>
                    <p>likes: {komment.likes}</p>
                    <p>source: {komment.source}</p>
                </CardBody>
            </Card>
        </Col>
    )
    //console.log('In ShowKommentare', Dataset)

    //const group = Dataset.length ? (Dataset[0].group + 1) : ''

    return (
        <>
            <Row >
                <center><h3>{rezensionen.length} Rezensionen gefunden</h3></center>
            </Row>
            <Row >
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Progress multi>
                        <Progress bar animated={((source === "googleMaps") || source === "Alle") && true} color="success" value={sourceGooglePercent}>Google Maps - {sourceGooglePercent}% </Progress>
                        <Progress bar animated={((source === "klinikDe") || source === "Alle") && true} color="info" value={sourceKlinikDePercent}>KlinikbewertungenDe - {sourceKlinikDePercent}%</Progress>
                    </Progress>
                </Col>
            </Row>
            <Row>
                {((result === "Alle") && rezensionen.length !== 0) &&
                    <Col >
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Positive Polarity</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartResult data={data01} />
                            </center>
                        </Card>
                    </Col>}

                {(gruppe === "Alle" && rezensionen.length !== 0) &&
                    <Col >
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Gruppen</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartGruppe data={data02} />
                            </center>
                        </Card>
                    </Col>}

                {source === "googleMaps" &&
                    <Col >
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Sterne Bewertungen</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartSterne data={data04} />
                            </center>
                        </Card>
                    </Col>}


                {(source === "klinikDe" && rezensionen.length !== 0) &&
                    <Col >
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Nutzer Bewertungen </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartGruppe data={data05} />
                            </center>
                        </Card>
                    </Col>}
            </Row>
            <Row>
                <Col >
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Rezension Zahlen  pro Jahr </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                        </CardBody>
                        <center>
                            <ChartYearly data={Dataset} />
                        </center>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Durchschnittliche Polaritäten pro Jahr </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                        </CardBody>
                        <center>
                            <ChartYearlyPolarity data={Dataset} />
                        </center>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs="12" lg="6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">KlinikbewertungenDe - Polarity Werte</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={KlinikDe_Polarity} alt="KlinikDe_Polarity.png" />
                    </Card>
                </Col>
                <Col xs="12" lg="6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">KlinikbewertungenDe - Nutzer Bewertungen</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>

                        </CardBody>
                        <img width="100%" src={KlinikDe_Gesamt} alt="KlinikDe_Gesamt.png" />
                    </Card>
                </Col>
            </Row>


            <Row>
                <Col xs="12" lg="6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Google Maps - Polarity Werte</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={Klinik_Polarity} alt="Klinik_Polarity.png" />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" lg="6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Google Maps - Stern Bewertungen</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={Klinik_Sterne} alt="Klinik_Sterne.png" />
                        <CardBody id="AnfangderKommentare">
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row >
                <center><h3>{rezensionen.length} Rezensionen gefunden  </h3></center>
            </Row>
            <Row >
                {
                    rezensionen
                        .slice(
                            (currentPage - 1) * pageSize,
                            (currentPage) * pageSize
                        )
                        .map((data) =>
                            <Col xs="12" lg="6" key={data.index}>
                                {data}
                            </Col>
                        )
                }
            </Row>
            <Row >

                <PaginationComponent handleClick={handlePageBottom} handlePageSelect={handlePageSelect} currentPage={currentPage} pagesCount={pagesCount} pageSize={pageSize} rezensionenZahl={rezensionen.length} />

            </Row>
        </>
    );
}

export default ShowKommentare;