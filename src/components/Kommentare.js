import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import ShowKommentare from './ShowKommentare'
import { Container, Row, Col, Button } from 'reactstrap';
import Dataset from '../Data/Dataset'
import { KlinikNames, FachbereichNames, KlinikDeYears, GoogleMapsYears } from '../Data/Lists'


const Kommentare = () => {

    var Data = [...Dataset]

    const pageSize = 2  // Für Pagination hat jede seite wie pageSize hoch Kommantare

    /////////// fachbereichNames Vorbereitungen : das ändert sich nach der Klinik
    let uniqueFachbereichen = []
    FachbereichNames.map(f => {
        uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
        return null
    })
    uniqueFachbereichen = [...new Set(uniqueFachbereichen)];


    ////////////////////////////////// useState Objekte Für Filters
    const [klinik, setKlinik] = useState("Alle")
    const [source, setSource] = useState("Alle")
    const [result, setResult] = useState("Alle")
    const [fachbereich, setFachbereich] = useState("Alle")
    const [gruppe, setGruppe] = useState("Alle")
    const [gesamt, setGesamt] = useState("Alle")
    const [year, setYear] = useState("Alle")
    const [sterne, setSterne] = useState("Alle")
    const [dark, setDark] = useState(false)

    const [currentPage, setCurrentPage] = useState(1) // Das ist für Pagination

    //// fachbereichNames sind für klinik für klinik wieder festgestellt
    if (klinik !== "Alle") {
        uniqueFachbereichen = []
        FachbereichNames.map(f => {
            if (f.name === klinik) {
                uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
            }
            return null
        })
        uniqueFachbereichen = [...new Set(uniqueFachbereichen)];
    }

    //// fachbereichNames sind für group für group wieder festgestellt
    if (gruppe !== "Alle") {
        uniqueFachbereichen = []
        FachbereichNames.map(f => {
            if (f.group === parseInt(gruppe)) {
                uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
            }
            return null
        })
        uniqueFachbereichen = [...new Set(uniqueFachbereichen)];
    }

    ////// Pagination, unter Kommentare deswegen als Bottom genannt
    const handlePageBottom = (e, index) => {
        //e.preventDefault()
        setCurrentPage(index)
    }

    //// In der Mitte von Pagination für Wahl der Seite von Kommentare
    const handlePageSelect = (pageInput) => {
        setCurrentPage(parseInt(pageInput))
        window.location = String(window.location).replace(/\#.*$/, "") + "#AnfangderKommentare";
    }


    ///// Filters werden ausgeübt
    function renderContent() {
        Data = (klinik !== "Alle") ? Data.filter(k => k.name === klinik) : Data

        Data = (source !== "Alle") ? Data.filter(k => k.source === source) : Data

        Data = (result !== "Alle") ? Data.filter(k => k.positive === parseInt(result)) : Data

        Data = (fachbereich !== "Alle") ? Data.filter(k => k.fachbereich === fachbereich) : Data

        Data = (gruppe !== "Alle") ? Data.filter(k => k.group === parseInt(gruppe)) : Data

        Data = (gesamt !== "Alle") ? Data.filter(k => k.gesamt === parseInt(gesamt)) : Data

        Data = (year !== "Alle") ? Data.filter(k => k.year === parseInt(year)) : Data

        Data = (sterne !== "Alle") ? Data.filter(k => k.sterne === parseInt(sterne)) : Data

        const pagesCount = Math.ceil(Data.length / pageSize);

        return <ShowKommentare Dataset={Data} pageSize={pageSize} pagesCount={pagesCount} currentPage={currentPage}
            handlePageBottom={handlePageBottom} handlePageSelect={handlePageSelect}
            klinik={klinik} source={source} result={result} gruppe={gruppe} dark={dark} />
    }


    ////////////////////////////////// Inputs werden ausgeübt
    function handleKlinik(klinik) {
        setKlinik(klinik)
        setFachbereich("Alle")
        gruppe !== "Alle" && setKlinik("Alle")
        setCurrentPage(1)

    }

    function handleSource(source) {
        setSource(source)
        setSterne("Alle")
        setGesamt("Alle")
        setFachbereich("Alle")
        setYear("Alle")
        setCurrentPage(1)
        //
    }

    function handleResult(result) {
        setResult(result)
        setCurrentPage(1)

    }

    function handleFachbereich(fachbereich) {
        setFachbereich(fachbereich)
        source !== "klinikDe" && setFachbereich("Alle")
        setCurrentPage(1)

    }

    function handleGruppe(gruppe) {
        setGruppe(gruppe)
        setFachbereich('Alle')
        klinik !== "Alle" && setGruppe("Alle")
        setCurrentPage(1)

    }

    function handleGesamt(gesamt) {
        setGesamt(gesamt)
        source !== "klinikDe" && setGesamt("Alle")
        setCurrentPage(1)
    }

    function handleYear(year) {
        setYear(year)
        setCurrentPage(1)

    }

    function handleSterne(sterne) {
        setSterne(sterne)
        source !== "googleMaps" && setSterne("Alle")
        setCurrentPage(1)

    }

    function handleDark() {
        setDark(!dark)
    }

    const resetFilter = () => {

        setKlinik("Alle")
        setSource("Alle")
        setResult("Alle")
        setFachbereich("Alle")
        setGruppe("Alle")
        setGesamt("Alle")
        setYear("Alle")
        setSterne("Alle")

    }

    return (
        <Container fluid className={dark && "bg-dark text-light"}>

            <Row className={`mt-1 pb-2 pt-1 ${window.screen.width > 900 ? "sticky-top" : ""} ${dark ? "bg-dark text-light" : "bg-light text-dark"} justify-content-between `} >

                <Col xs="6" lg="auto">
                    <FormGroup >
                        <Label className="" for="exampleSelect">Daten Quelle</Label>
                        <Input type="select" name="source" id="source" value={source} onChange={(e) => handleSource(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <option>Alle</option>
                            <option value='klinikDe'>Klinikbewertungen.de</option>
                            <option value='googleMaps'>Google Maps</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="6" lg={source === 'Alle' ? 3 : 2}>
                    <FormGroup >
                        <Label for="exampleSelect">Klinik</Label>
                        {gruppe === 'Alle' ?
                            <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => handleKlinik(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                {KlinikNames.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input> :
                            <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => handleKlinik(e.target.value)} disabled className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                            </Input>}
                    </FormGroup>
                </Col>
                <Col xs="6" lg="auto">
                    <FormGroup>
                        <Label for="exampleSelect">Gruppe</Label>
                        {klinik === 'Alle' ?
                            <Input type="select" name="gruppe" id="gruppe" value={gruppe} onChange={(e) => handleGruppe(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                <option value="0"> 1</option>
                                <option value='1'> 2 </option>
                                <option value="2"> 3 </option>
                                <option value='3'> 4 </option>
                            </Input> :
                            <Input type="select" name="gruppe" id="gruppe" value={gruppe} onChange={(e) => handleGruppe(e.target.value)} disabled className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                            </Input>}
                    </FormGroup>
                </Col>



                <Col xs="6" lg="2">
                    <FormGroup>
                        <Label className="" for="exampleSelect">Fachbereich</Label>
                        {source === 'klinikDe' ?
                            <Input type="select" name="fachbereich" id="fachbereich" value={fachbereich} onChange={(e) => handleFachbereich(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                {uniqueFachbereichen.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input> : <Input type="select" name="fachbereich" id="fachbereich" value={fachbereich} onChange={(e) => handleFachbereich(e.target.value)} disabled className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                {uniqueFachbereichen.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input>
                        }
                    </FormGroup>
                </Col>




                <Col xs="6" lg="auto">
                    <FormGroup>
                        <Label for="exampleSelect"> Jahr</Label>
                        {((source === 'klinikDe' || source === 'Alle')) ?
                            <Input type="select" name="year" id="year" value={year} onChange={(e) => handleYear(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                {KlinikDeYears.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input> :
                            <Input type="select" name="year" id="year" value={year} onChange={(e) => handleYear(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                {GoogleMapsYears.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input>}
                    </FormGroup>
                </Col>
                <Col xs="6" lg="1">
                    <FormGroup>
                        <Label className="" for="exampleSelect">Polarity</Label>
                        <Input type="select" name="result" id="result" value={result} onChange={(e) => handleResult(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <option>Alle</option>
                            <option value="1" >Positive</option>
                            <option value='0'>Negative</option>
                        </Input>
                    </FormGroup>
                </Col>
                {source === 'klinikDe' &&
                    <Col xs="6" lg="1">
                        <FormGroup>
                            <Label className="" for="exampleSelect">Sterne</Label>

                            <Input type="select" name="gesamt" id="gesamt" value={gesamt} onChange={(e) => handleGesamt(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                <option value="100" >Sehr Zufrieden</option>
                                <option value='67'>Zufrieden</option>
                                <option value='33'>Weniger Zufrieden</option>
                                <option value='0'>Nicht Zufrieden</option>
                            </Input>
                        </FormGroup>
                    </Col>}
                {source === 'googleMaps' &&
                    <Col xs="6" lg="auto">
                        <FormGroup>
                            <Label className="" for="exampleSelect"> Sterne</Label>

                            <Input type="select" name="sterne" id="sterne" value={sterne} onChange={(e) => handleSterne(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>Alle</option>
                                <option value="1" >1 Stern</option>
                                <option value='2'>2 Stern</option>
                                <option value='3'>3 Stern</option>
                                <option value='4'>4 Stern</option>
                                <option value='5'>5 Stern</option>
                            </Input>
                        </FormGroup>
                    </Col>}
                <Col xs={source === 'Alle' ? 12 : 6} lg="auto">
                    <center >
                        <Label>Reset</Label><br />

                        <Button color={
                            (source !== 'Alle' || klinik !== 'Alle' || gruppe !== 'Alle' || year !== 'Alle' || result !== 'Alle' || fachbereich !== 'Alle')
                                ? 'success' : 'secondary'}
                            onClick={resetFilter} >
                            Alle
                        </Button>

                    </center>
                </Col>

                <Col xs={source === 'Alle' ? 12 : 6} lg="auto">
                    <center >
                        <Label>Thema</Label><br />

                        <Button className={`     ${dark ? "bg-light" : "bg-dark"} `}
                            color={dark ? 'light' : 'dark'}



                            onClick={handleDark} >
                            {dark ? "Hellen" : "Dunkel"}
                        </Button>

                    </center>
                </Col>


            </Row>


            {renderContent()}


        </Container>
    );
}

export default Kommentare;


