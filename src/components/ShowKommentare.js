import React from 'react';
import ChartResult from './ChartResult'
import ChartGruppe from './ChartGruppe'
import ChartSource from './ChartSource'
import ChartSterne from './ChartSterne'
import ChartGesamt from './ChartGesamt'
import ChartYearly from './ChartYearly';
import ChartYearlyPolarity from './ChartYearlyPolarity';
import PaginationComponent from './PaginationComponent'
import { Row, Col } from 'reactstrap';
import { GoogleMapsYearlyPosNeg } from '../Data/Lists'
import { KlinikDeYearlyPosNeg } from '../Data/Lists'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle, Progress, Alert, UncontrolledTooltip } from 'reactstrap';
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
import SentimentAnalysisDE from './SentimentAnalysisDE'
import SentimentAnalysisEN from './SentimentAnalysisEN'







const ShowKommentare = ({ Dataset, pagesCount, pageSize, currentPage, handlePageBottom, handlePageSelect, klinik, source, result, gruppe, dark, english, year, fachbereich }) => {

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
        { name: '1 ☆', value: oneStern },
        { name: '2 ☆', value: twoStern },
        { name: '3 ☆', value: threeStern },
        { name: '4 ☆', value: fourStern },
        { name: '5 ☆', value: fiveStern }
    ];

    ////Piechart-Nutzerbewertung von klinikDe
    {
        english ?

            data05 = [
                { name: 'Very Satisfied', value: sehrZufrieden },
                { name: 'Satisfied', value: zufrieden },
                { name: 'Less Satisfied', value: wenigerZufrieden },
                { name: 'unsatisfied', value: unzufrieden }
            ]
            :
            data05 = [
                { name: 'Sehr Zufrieden', value: sehrZufrieden },
                { name: 'Zufrieden', value: zufrieden },
                { name: 'Weniger Zufrieden', value: wenigerZufrieden },
                { name: 'Unzufrieden', value: unzufrieden }
            ];
    }


    ////// Kommentare Cards
    const rezensionen = Dataset.map(komment =>
        <Col xs="12" key={komment.index} >
            <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"} >
                <CardBody>
                    <CardTitle tag="h5">
                        {english ? "Review Nr.:" : "Rezension Nr.:"}   {komment.index + 1}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{komment.name},  {komment.datum ? komment.datum : komment.year}, {komment.fachbereich && english ? komment.fachbereich_eng : komment.fachbereich}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText id="commentText" style={{ height: "180px", overflowY: "scroll" }}> {komment.titel && <p>{english ? komment.titel_eng : komment.titel}</p>}{english ? komment.komment_eng : komment.komment}</CardText>


                    {english ? " TextBlob Result:" : " TextBlob Bewertung:"}  {komment.positive ? " 👍  " : " 👎  "}

                    {komment.source === "googleMaps" &&
                        <>
                            <p> {english ? " User Rating:" : " Nutzer Bewertung:"}   {komment.sterne == 1 ? " ⭐ " : komment.sterne == 2 ? "⭐ ⭐" : komment.sterne == 3 ? "⭐ ⭐ ⭐" : komment.sterne == 4 ? "⭐ ⭐ ⭐ ⭐" : "⭐ ⭐ ⭐ ⭐ ⭐"} </p>
                            <p>  ❤️  &nbsp; {" ", komment.likes}</p>
                        </>
                    }
                    {komment.source === "klinikDe" &&
                        <>
                            <p>{english ? " User Rating" : " Nutzer Bewertung"}   : {komment.gesamt === 100 ? "😃 " : komment.gesamt === 67 ? " 🙂" : komment.gesamt === 33 ? " 😏" : " 😡"}</p>
                        </>
                    }

                    <p >TextBlob: {komment.polarity.toFixed(2)}</p>
                    <p> {english ? "  Data Source" : "  Daten Quelle"} : {komment.source}</p>
                </CardBody>
            </Card>
        </Col>
    )

    ////AlertColor
    let AlertColor = "success"
    source === "klinikDe" && (AlertColor = "danger")
    source === "googleMaps" && (AlertColor = "info")




    return (
        <Container fluid className=""> {/* Diagräme und Kommentare */}
            <Row > {/* Zahl der rezension */}
                <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
                    <a href="#AnfangderKommentare" style={{ textDecoration: "none" }}>
                        <Alert color={AlertColor} className="pt-1 pb-0 m-1" id="Tooltip_Alert">
                            <center>
                                <h4>
                                    {english ? "Number of Reviews: " : "Anzahl der Rezensionen: "} {rezensionen.length}
                                </h4>
                            </center>
                        </Alert>
                        <UncontrolledTooltip placement="right" target="Tooltip_Alert">
                            {english ? "the number of comments obtained by filtering" :
                                "die Anzahl der Kommentare durch Filterung"}
                        </UncontrolledTooltip>
                    </a>
                </Col>

            </Row>
            <Row > {/* Progressbar für  source */}
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Progress multi >
                        <Progress bar animated={((source === "googleMaps")) && true} color="info" value={sourceGooglePercent}>GoogleMaps - {sourceGooglePercent}% </Progress>
                        <Progress bar animated={((source === "klinikDe")) && true} color="danger" value={sourceKlinikDePercent}>KlinikDe - {sourceKlinikDePercent}%</Progress>
                    </Progress>
                </Col>
            </Row>

            <br />
            <Row >  {/* Piecharts */}
                {((result === "Alle") && rezensionen.length !== 0) &&
                    <Col xs="12" md="12" lg={source === "Alle" ? "6" : "4"}>
                        <Card className={dark ? "bg-dark text-light" : "text-dark border-light"}>
                            <CardBody>
                                <CardTitle tag="h5" className="text-center">  {english ? "Positive Polarity" : "Positiv Polarität"}   </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted text-center">Total: {rezensionen.length}</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartResult data={data01} source={source} english={english} />
                            </center>
                        </Card>
                    </Col>}
                {(gruppe === "Alle" && rezensionen.length !== 0) &&
                    <Col xs="12" md="12" lg={source === "Alle" ? "6" : "4"}>
                        <Card className={dark ? "bg-dark text-light" : "text-dark border-light"}  >
                            <CardBody>
                                <CardTitle tag="h5" className="text-red text-center"> {english ? "Clinic Group" : "Klinik Gruppe"}    </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted text-center">Total: {rezensionen.length}</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartGruppe data={data02} dark={dark} klinik={klinik} />
                            </center>
                        </Card>
                    </Col>}

                {source === "googleMaps" &&
                    <Col xs="12" md="12" lg="4">
                        <Card className={dark ? "bg-dark text-light" : "text-dark border-light"}>
                            <CardBody>
                                <CardTitle tag="h5" className="text-center">  {english ? "User Star Ratings" : "Nutzer Sterne Bewertungen"}   </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted text-center">Total: {rezensionen.length}</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartSterne data={data04} dark={dark} />
                            </center>
                        </Card>
                    </Col>}


                {(source === "klinikDe" && rezensionen.length !== 0) &&
                    <Col xs="12" md="12" lg="4">
                        <Card className={dark ? "bg-dark text-light" : "text-dark border-light"}>
                            <CardBody>
                                <CardTitle tag="h5" className="text-center">{english ? "User Star Ratings" : "Nutzer Sterne Bewertungen"} </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted text-center">Total: {rezensionen.length}</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartGesamt data={data05} dark={dark} />
                            </center>
                        </Card>
                    </Col>}
            </Row>

            <br />
            {year === "Alle" &&
                <h1 >{english ? "Values per year" : "Werte pro Jahr "}  </h1>}
            {year === "Alle" &&
                <Row > {/* Yearly - commentareZahl und polarity */}
                    {(source === "Alle") ?
                        <Col xs="12" sm="12" md="12" lg="6" >
                            <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <CardBody>
                                    <CardTitle tag="h5" className="">
                                        {english ? "Number of reviews per year " : "Anzahl der Rezensionen pro Jahr "}
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted ">
                                        Total: {rezensionen.length}
                                    </CardSubtitle>
                                </CardBody>
                                <center>
                                    <ChartYearly data={Dataset} dark={dark} />
                                </center>
                            </Card>
                        </Col> : (source === "googleMaps") ?
                            <Col xs="12" sm="12" md="12" lg="6">
                                <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                    <CardBody>
                                        <CardTitle tag="h5" className="">Google Maps, {english ? "Number of reviews per year " : "Anzahl der Rezensionen pro Jahr "}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted ">Total: {rezensionen.length}</CardSubtitle>
                                    </CardBody>
                                    <center>
                                        <ChartYearly_Google data={Dataset} dark={dark} />
                                    </center>
                                </Card>
                            </Col> :

                            <Col xs="12" sm="12" md="12" lg="6">
                                <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                    <CardBody>
                                        <CardTitle tag="h5" >KlinikDe, {english ? "Number of reviews per year " : "Anzahl der Rezensionen pro Jahr "}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted ">Total: {rezensionen.length}</CardSubtitle>
                                    </CardBody>
                                    <center>
                                        <ChartYearly_KlinikDe data={Dataset} dark={dark} />
                                    </center>
                                </Card>
                            </Col>}


                    <Col xs="12" sm="12" md="12" lg="6">
                        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <CardBody>
                                <CardTitle tag="h5"> {english ? "Polarity per Year" : "Polarität pro Jahr"}   </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {rezensionen.length}</CardSubtitle>
                            </CardBody>
                            <center>
                                <ChartYearlyPolarity data={Dataset} dark={dark} />
                            </center>
                        </Card>
                    </Col>
                </Row>
            }
            <br />

            {klinik === "Alle" && <h1>{english ? "Number of reviews per clinic" : "Anzahl der Rezensionen pro Klinik"}    </h1>}

            {klinik === "Alle" &&

                <Row className="pt-2 pb-2"> {/* KlinikDe: Klinik by Klinik images : polarity versus nutzer bewertung */}

                    <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                        <CardBody>
                            <CardTitle tag="h5">
                                {source !== "Alle" ?
                                    source === "klinikDe" ?
                                        "klinikDe" : "Google Maps" :
                                    'Google Maps & KlinikDe'}
                                {english ? " Data" : " Daten"}
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted ">Total: {rezensionen.length}</CardSubtitle>
                            <CardSubtitle>
                                <Progress multi >
                                    <Progress bar animated={((source === "googleMaps")) && true} color="info" max={Dataset.length} value={Dataset.filter(e => e.source === "googleMaps").length}>GoogleMaps -  {Dataset.filter(e => e.source === "googleMaps").length} </Progress>
                                    <Progress bar animated={((source === "klinikDe")) && true} color="danger" max={Dataset.length} value={Dataset.filter(e => e.source === "klinikDe").length}>KlinikDe - {Dataset.filter(e => e.source === "klinikDe").length} </Progress>
                                </Progress>
                            </CardSubtitle>
                        </CardBody>
                        <ChartKlinikenZahlen data={Dataset} source={source} dark={dark} />
                    </Card>
                </Row>
            }

            {source !== "Alle" &&
                <h1> {english ? "Ratings" : "Bewertungen"}   </h1>
            }

            {(source === "klinikDe") &&
                <Row className="pt-2 pb-2"> {/* KlinikDe: Klinik by Klinik images : polarity versus nutzer bewertung */}
                    <Col xs="12" lg="6">
                        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <CardBody>
                                <CardTitle tag="h5">KlinikDe - {english ? "Polarity Values" : "Polarität Werte"}    </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {rezensionen.length}</CardSubtitle>
                            </CardBody>
                            <ChartKlinikenDePolarity data={Dataset} dark={dark} />
                        </Card>
                    </Col>
                    <Col xs="12" lg="6">
                        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <CardBody>
                                <CardTitle tag="h5">KlinikDe - {english ? "User Star Ratings" : "Nutzer Sterne Bewertungen"} </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {rezensionen.length}</CardSubtitle>
                            </CardBody>
                            <ChartKlinikenGesamt data={Dataset} dark={dark} />
                        </Card>
                    </Col>
                </Row>}
            <br />
            {(source === "klinikDe" && fachbereich === "Alle") &&
                <Row>

                    <h1> {english ? "Departments" : "Fachbereiche"}   </h1>
                    <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                        <CardBody>
                            <CardTitle tag="h5"> {english ? "Number of comments per department" : "Anzahl der Kommentare pro Fachbereich"}    </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">[ {english ? "Google Maps has no data about department" : "googleMaps hat keine Daten über Fachbereich"}   ]</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {rezensionen.length}</CardSubtitle>
                            <CardSubtitle>
                                <Progress bar animated={((source === "klinikDe")) && true} color="danger" max={Dataset.length} value={Dataset.filter(e => e.source === "klinikDe").length}>KlinikDe - {Dataset.filter(e => e.source === "klinikDe").length} </Progress>
                            </CardSubtitle>
                        </CardBody>
                        <ChartFachbereichenZahlen data={Dataset} dark={dark} english={english} />
                    </Card>
                </Row>}
            {(source === "googleMaps") &&
                <Row className="pt-2 pb-2">  {/* GoogleMaos:  Klinik by Klinik images- polarity versus nutzer bewertung */}
                    <Col xs="12" lg="6">
                        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <CardBody>
                                <CardTitle tag="h5">Google Maps - Polarity Werte</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {sourceGoogle} </CardSubtitle>
                            </CardBody>
                            <ChartKlinikenMapsPolarity data={Dataset} dark={dark} />
                        </Card>
                    </Col>
                    <Col xs="12" lg="6">
                        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <CardBody>
                                <CardTitle tag="h5">Google Maps - {english ? "User Star Ratings" : "Nutzer Sterne Bewertungen"} </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {sourceGoogle} </CardSubtitle>
                            </CardBody>
                            <ChartKlinikenSterne data={Dataset} dark={dark} />
                        </Card>
                    </Col>
                </Row>}

            {(source === "klinikDe" && !(klinik !== "Alle" && fachbereich !== "Alle")) &&
                <Row className="pt-2 pb-2"> {/* KlinikDe: Klinik by Klinik images : polarity versus nutzer bewertung */}
                    <Col xs="12" lg="6">
                        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <CardBody>
                                <CardTitle tag="h5">{english ? "Departments Polarity Values" : "Fachbereiche - Polarität Werte "}   </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">(KlinikbewertungenDe {english ? "Data" : "Daten"}  )</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {sourceKlinikDe} </CardSubtitle>
                            </CardBody>
                            <ChartFachbereichenPolarity data={Dataset} dark={dark} english={english} />
                        </Card>
                    </Col>

                    <Col xs="12" lg="6" >
                        <Card className={dark ? "bg-dark text-light" : "bg-light text-dark"} >
                            <CardBody>
                                <CardTitle tag="h5">{english ? "Departments User Star Ratings" : "Fachbereiche - Nutzer Sterne Bewertungen"} </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">(KlinikbewertungenDe  {english ? "Data" : "Daten"}  )</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Total: {sourceKlinikDe} </CardSubtitle>
                            </CardBody>
                            <ChartFachbereichenGesamt data={Dataset} dark={dark} english={english} />
                        </Card>
                    </Col>
                </Row>}
            <br />
            <h1 id="AnfangderKommentare">{english ? "Reviews / Sentiment Analysis" : "Rezensionen / Stimmungsanalyse"} </h1>


            <Row className="pb-3"> {/* Kommentare */}

                {
                    rezensionen
                        .slice(
                            (currentPage - 1) * pageSize,
                            (currentPage) * pageSize
                        )
                        .map((data) =>
                            <Col xs="12" lg="6" key={data.index}>
                                <Alert color={AlertColor} className="pt-1 pb-0 m-1" >
                                    <center><h4>
                                        {english ? "Number of Reviews: " : "Anzahl der Rezensionen: "} {rezensionen.length}

                                    </h4></center>
                                </Alert>
                                <Progress multi >
                                    <Progress bar animated={((source === "googleMaps")) && true} color="info" max={Dataset.length} value={Dataset.filter(e => e.source === "googleMaps").length}>GoogleMaps - {Dataset.filter(e => e.source === "googleMaps").length} </Progress>
                                    <Progress bar animated={((source === "klinikDe")) && true} color="danger" max={Dataset.length} value={Dataset.filter(e => e.source === "klinikDe").length}>KlinikDe - {Dataset.filter(e => e.source === "klinikDe").length} </Progress>
                                </Progress>
                                {data}
                                <PaginationComponent handleClick={handlePageBottom} handlePageSelect={handlePageSelect} currentPage={currentPage} pagesCount={pagesCount} pageSize={pageSize} rezensionenZahl={rezensionen.length} dark={dark} english={english} />
                            </Col>
                        )
                }

                <Col>

                    {english ?
                        <SentimentAnalysisEN dark={dark} />
                        :
                        <SentimentAnalysisDE dark={dark} />
                    }

                </Col>
            </Row>



        </Container>
    );
}

export default ShowKommentare;