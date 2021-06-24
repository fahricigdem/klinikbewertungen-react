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
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Progress, Alert } from 'reactstrap';
import ChartYearly_Google from './ChartYearly_Google'
import ChartYearly_KlinikDe from './ChartYearly_KlinikDe'
import ChartKlinikenDePolarity from './ChartKlinikenDePolarity'
import ChartKlinikenGesamt from './ChartKlinikenGesamt'
import ChartKlinikenSterne from './ChartKlinikenSterne'
import ChartKlinikenMapsPolarity from './ChartKlinikenMapsPolarity'
import ChartFachbereichenPolarity from './ChartFachbereichenPolarity'
import ChartFachbereichenGesamt from './ChartFachbereichenGesamt'
import ChartKlinikenZahlen from './ChartKlinikenZahlen'
import ChartFachbereichenZahlen from './ChartFachbereichenZahlen'




const ShowKommentare = ({ Dataset, pagesCount, pageSize, currentPage, handlePageBottom, handlePageSelect, klinik, source, result, gruppe }) => {

    ////////////  Diagram Data ////////////////////////////

    ////Piechart-Result
    let positive = 0
    let negative = 0
    let data01 = []

    ////Piechart-Gruppe
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let data02 = []

    ////Progressbar-source
    let sourceGoogle = 0
    let sourceKlinikDe = 0
    let data03 = []

    ////Piechart-Sterne
    let oneStern = 0
    let twoStern = 0
    let threeStern = 0
    let fourStern = 0
    let fiveStern = 0
    let data04 = []

    ////Piechart-Nutzerbewertung von klinikDe
    let sehrZufrieden = 0
    let zufrieden = 0
    let wenigerZufrieden = 0
    let unzufrieden = 0
    let data05 = []

    ///Diagram variables werden gerechnet im map function
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

    /// Für Progressbar Data (source data)
    negative = Dataset.length - positive
    sourceKlinikDe = Dataset.length - sourceGoogle
    let sourceGooglePercent = Dataset.length !== 0 ? Math.round(sourceGoogle / (sourceKlinikDe + sourceGoogle) * 100) : 0
    let sourceKlinikDePercent = Dataset.length !== 0 ? Math.round(sourceKlinikDe / (sourceKlinikDe + sourceGoogle) * 100) : 0

    ////Piechart-Result
    data01 = [
        { name: 'Positive', value: positive },
        { name: 'Negative', value: negative }
    ];

    ////Piechart-gruppe
    data02 = [
        { name: 'Gruppe-1', value: one },
        { name: 'Gruppe-2', value: two },
        { name: 'Gruppe-3', value: three },
        { name: 'Gruppe-4', value: four }
    ];

    ////Piechart-Source
    data03 = [
        { name: 'Google', value: sourceGoogle },
        { name: 'KlinikDe', value: sourceKlinikDe }
    ];

    ////Piechart-Sterne
    data04 = [
        { name: '1 Stern', value: oneStern },
        { name: '2 Stern', value: twoStern },
        { name: '3 Stern', value: threeStern },
        { name: '4 Stern', value: fourStern },
        { name: '5 Stern', value: fiveStern }
    ];

    ////Piechart-Nutzerbewertung von klinikDe
    data05 = [
        { name: 'Sehr Zufrieden', value: sehrZufrieden },
        { name: 'Zufrieden', value: zufrieden },
        { name: 'Weniger Zufrieden', value: wenigerZufrieden },
        { name: 'Unzufrieden', value: unzufrieden }
    ];

    ////// Kommentare Cards
    const rezensionen = Dataset.map(komment =>
        <Col xs="12" key={komment.index} >
            <Card className="border-light">
                <CardBody>
                    <CardTitle tag="h5">Rezension Nr.: {komment.index + 1} </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{komment.name}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText style={{ height: "180px", overflowY: "scroll" }}>{komment.komment}</CardText>
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


    return (
        <> {/* Diagräme und Kommentare */}
            <Row style={{ backgroundColor: "#EEEEEE" }}> {/* Zahl der rezension */}
                <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
                    <Alert color="warning" className="pt-1 pb-0 m-1" >
                        <center><h4>{rezensionen.length} Rezensionen gefunden!</h4></center>
                    </Alert>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#EEEEEE" }}> {/* Progressbar für  source */}
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Progress multi >
                        <Progress bar animated={((source === "googleMaps")) && true} color="info" value={sourceGooglePercent}>GoogleMaps - {sourceGooglePercent}% </Progress>
                        <Progress bar animated={((source === "klinikDe")) && true} color="danger" value={sourceKlinikDePercent}>KlinikDe - {sourceKlinikDePercent}%</Progress>
                    </Progress>
                </Col>
            </Row>
            <Row >  {/* Piecharts */}
                {((result === "Alle") && rezensionen.length !== 0) &&
                    <Col xs="12" sm="6" lg={source === "Alle" ? "6" : "4"}>
                        <Card className="border-light">
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
                    <Col xs="12" sm="6" lg={source === "Alle" ? "6" : "4"}>
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">Klinik Gruppe</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartGruppe data={data02} />
                            </center>
                        </Card>
                    </Col>}

                {source === "googleMaps" &&
                    <Col xs="12" sm="6" lg="4">
                        <Card className="border-light">
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
                    <Col xs="12" sm="6" lg="4">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">Nutzer Bewertungen </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartGesamt data={data05} />
                            </center>
                        </Card>
                    </Col>}
            </Row>




            <Row className="bg-light "> {/* Yearly - commentareZahl und polarity */}


                {(source === "Alle") ?
                    <Col xs="12" sm="12" md="12" lg="6">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">Rezension Zahlen  pro Jahr </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartYearly data={Dataset} />
                            </center>
                        </Card>
                    </Col> : (source === "googleMaps") ?
                        <Col xs="12" sm="12" md="12" lg="6">
                            <Card className="border-light">
                                <CardBody>
                                    <CardTitle tag="h5">GoogleMaps Rezension Zahlen  pro Jahr </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                                </CardBody>
                                <center>
                                    <ChartYearly_Google data={Dataset} />
                                </center>
                            </Card>
                        </Col> :

                        <Col xs="12" sm="12" md="12" lg="6">
                            <Card className="border-light">
                                <CardBody>
                                    <CardTitle tag="h5">KLinikDe Rezension Zahlen  pro Jahr </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                                </CardBody>
                                <center>
                                    <ChartYearly_KlinikDe data={Dataset} />
                                </center>
                            </Card>
                        </Col>}


                <Col xs="12" sm="12" md="12" lg="6">
                    <Card className="border-light">
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

            {(source === "klinikDe") &&
                <Row className="pt-2 pb-2"> {/* KlinikDe: Klinik by Klinik images : polarity versus nutzer bewertung */}
                    <Col xs="12" lg="6">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">KlinikbewertungenDe - Polarity Werte</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{sourceKlinikDe} Rezensionen</CardSubtitle>
                            </CardBody>
                            <ChartKlinikenDePolarity data={Dataset} />
                        </Card>
                    </Col>
                    <Col xs="12" lg="6">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">KlinikbewertungenDe - Sterne Bewertungen</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{sourceKlinikDe} Rezensionen</CardSubtitle>
                            </CardBody>
                            <ChartKlinikenGesamt data={Dataset} />
                        </Card>
                    </Col>
                </Row>}

            {(source === "googleMaps") &&
                <Row className="pt-2 pb-2 bg-light">  {/* GoogleMaos:  Klinik by Klinik images- polarity versus nutzer bewertung */}
                    <Col xs="12" lg="6">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">Google Maps - Polarity Werte</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{sourceGoogle} Rezensionen</CardSubtitle>
                            </CardBody>
                            <ChartKlinikenMapsPolarity data={Dataset} />
                        </Card>
                    </Col>
                    <Col xs="12" lg="6">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">Google Maps - Sterne Bewertungen</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{sourceGoogle} Rezensionen</CardSubtitle>
                            </CardBody>
                            <ChartKlinikenSterne data={Dataset} />
                        </Card>
                    </Col>
                </Row>}

            {(source === "klinikDe") &&
                <Row className="pt-2 pb-2"> {/* KlinikDe: Klinik by Klinik images : polarity versus nutzer bewertung */}
                    <Col xs="12" lg="6">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">Fachbereichen - Polarity Werte </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">(KlinikbewertungenDe Data)</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{sourceKlinikDe} Rezensionen</CardSubtitle>
                            </CardBody>
                            <ChartFachbereichenPolarity data={Dataset} />
                        </Card>
                    </Col>
                    <Col xs="12" lg="6">
                        <Card className="border-light">
                            <CardBody>
                                <CardTitle tag="h5">Fachbereichen - Sterne Bewertungen</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">(KlinikbewertungenDe Data)</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{sourceKlinikDe} Rezensionen</CardSubtitle>
                            </CardBody>
                            <ChartFachbereichenGesamt data={Dataset} />
                        </Card>
                    </Col>
                </Row>}

            <Row className="pt-2 pb-2 bg-light"> {/* KlinikDe: Klinik by Klinik images : polarity versus nutzer bewertung */}
                <Col xs="12" lg="6">
                    <Card className="border-light">
                        <CardBody>
                            <CardTitle tag="h5">Kommentare Zahlen pro Klinik </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">(GoogleMaps und KlinikDe Data)</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{rezensionen.length} Rezensionen</CardSubtitle>
                            <CardSubtitle>
                                <Progress multi >
                                    <Progress bar animated={((source === "googleMaps")) && true} color="info" max={Dataset.length} value={Dataset.filter(e => e.source === "googleMaps").length}>GoogleMaps - {Dataset.filter(e => e.source === "googleMaps").length} Rezensionen</Progress>
                                    <Progress bar animated={((source === "klinikDe")) && true} color="danger" max={Dataset.length} value={Dataset.filter(e => e.source === "klinikDe").length}>KlinikDe - {Dataset.filter(e => e.source === "klinikDe").length} Rezensionen</Progress>
                                </Progress>
                            </CardSubtitle>
                        </CardBody>
                        <ChartKlinikenZahlen data={Dataset} />
                    </Card>
                </Col>
                <Col xs="12" lg="6">
                    <Card className="border-light">
                        <CardBody>
                            <CardTitle tag="h5">Kommentare Zahlen pro Fachbereich</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">(nur KlinikDe Data, googleMaps hat keine Fachbereich Data)</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{sourceKlinikDe} Rezensionen</CardSubtitle>
                            <CardSubtitle>
                                <Progress bar animated={((source === "klinikDe")) && true} color="danger" max={Dataset.length} value={Dataset.filter(e => e.source === "klinikDe").length}>KlinikDe - {Dataset.filter(e => e.source === "klinikDe").length} Rezensionen</Progress>
                            </CardSubtitle>
                        </CardBody>
                        <ChartFachbereichenZahlen data={Dataset} />
                    </Card>
                </Col>
            </Row>

            <Row id="AnfangderKommentare" style={{ backgroundColor: "#EEEEEE" }}>{/* Zahl der rezension */}
                <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
                    <Alert color="danger" className="pt-1 pb-0 m-1" >
                        <center><h4>{rezensionen.length} Rezensionen gefunden!</h4></center>
                    </Alert>
                    <Progress multi >
                        <Progress bar animated={((source === "googleMaps")) && true} color="info" max={Dataset.length} value={Dataset.filter(e => e.source === "googleMaps").length}>GoogleMaps - {Dataset.filter(e => e.source === "googleMaps").length} Rezensionen</Progress>
                        <Progress bar animated={((source === "klinikDe")) && true} color="danger" max={Dataset.length} value={Dataset.filter(e => e.source === "klinikDe").length}>KlinikDe - {Dataset.filter(e => e.source === "klinikDe").length} Rezensionen</Progress>
                    </Progress>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#EEEEEE" }}> {/* Kommentare */}
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
            <Row style={{ backgroundColor: "#EEEEEE" }}> {/* Pagination */}
                <PaginationComponent handleClick={handlePageBottom} handlePageSelect={handlePageSelect} currentPage={currentPage} pagesCount={pagesCount} pageSize={pageSize} rezensionenZahl={rezensionen.length} />
            </Row>


        </>
    );
}

export default ShowKommentare;