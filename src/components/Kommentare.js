import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import ShowKommentare from './ShowKommentare'
import { Row, Col, Button } from 'reactstrap';
import Dataset from '../Data/Dataset'
import { KlinikNames, FachbereichNames, KlinikDeYears, GoogleMapsYears } from '../Data/Lists'


const Kommentare = () => {

    var Data = [...Dataset]
    const pageSize = 1

    /////////// fachbereichNames Vorbereitungen
    let uniqueFachbereichen = []
    FachbereichNames.map(f => {
        uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
    })
    uniqueFachbereichen = [...new Set(uniqueFachbereichen)];
    //////////////////////////////////

    const [klinik, setKlinik] = useState("Alle")
    const [source, setSource] = useState("Alle")
    const [result, setResult] = useState("Alle")
    const [fachbereich, setFachbereich] = useState("Alle")
    const [gruppe, setGruppe] = useState("Alle")
    const [gesamt, setGesamt] = useState("Alle")
    const [year, setYear] = useState("Alle")
    const [sterne, setSterne] = useState("Alle")
    const [currentPage, setCurrentPage] = useState(1)

    if (klinik !== "Alle") {
        uniqueFachbereichen = []
        FachbereichNames.map(f => {
            if (f.name === klinik) {
                uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
            }
        })
        uniqueFachbereichen = [...new Set(uniqueFachbereichen)];
    }

    if (gruppe !== "Alle") {
        uniqueFachbereichen = []
        FachbereichNames.map(f => {
            if (f.group === parseInt(gruppe)) {
                uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
            }
        })
        uniqueFachbereichen = [...new Set(uniqueFachbereichen)];
    }

    const handlePageTop = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
    }

    const handlePageBottom = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
        //window.scrollTo({ top: 150, behavior: 'smooth' });
    }

    const handlePageSelect = (pageInput) => {
        setCurrentPage(parseInt(pageInput))
    }



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

        return <ShowKommentare Dataset={Data} pageSize={pageSize} pagesCount={pagesCount} currentPage={currentPage} handlePageTop={handlePageTop} handlePageBottom={handlePageBottom} handlePageSelect={handlePageSelect} klinik={klinik} source={source} result={result} gruppe={gruppe} />
    }



    function handleKlinik(klinik) {
        setKlinik(klinik)
        setFachbereich("Alle")
        gruppe !== "Alle" && setKlinik("Alle")
        setCurrentPage(1)
    }

    function handleSource(source) {
        setSource(source)
        if (source === "Alle") {
            setFachbereich("Alle")
            setGesamt("Alle")
            setSterne("Alle")
        }
        setCurrentPage(1)
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
        <div >
            <Row className="mt-3">
                <Col xs="6" lg="3">
                    <FormGroup>
                        <Label className="" for="exampleSelect">Data Source</Label>
                        <Input type="select" name="source" id="source" value={source} onChange={(e) => handleSource(e.target.value)}>
                            <option>Alle</option>
                            <option value='klinikDe'>Klinikbewertungen.de</option>
                            <option value='googleMaps'>Google Maps</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="6" lg="3">
                    <FormGroup >
                        <Label for="exampleSelect">Select Klinik</Label>
                        {gruppe === 'Alle' ?
                            <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => handleKlinik(e.target.value)}  >
                                <option>Alle</option>
                                {KlinikNames.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input> :
                            <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => handleKlinik(e.target.value)} disabled>
                                <option>Alle</option>
                            </Input>}
                    </FormGroup>
                </Col>
                <Col xs="6" lg="3">
                    <FormGroup>
                        <Label for="exampleSelect">Selekt Gruppe**</Label>
                        {klinik === 'Alle' ?
                            <Input type="select" name="gruppe" id="gruppe" value={gruppe} onChange={(e) => handleGruppe(e.target.value)}  >
                                <option>Alle</option>
                                <option value="0">Gruppe-1</option>
                                <option value='1'>Gruppe-2</option>
                                <option value="2">Gruppe-3</option>
                                <option value='3'>Gruppe-4</option>
                            </Input> :
                            <Input type="select" name="gruppe" id="gruppe" value={gruppe} onChange={(e) => handleGruppe(e.target.value)} disabled>
                                <option>Alle</option>
                            </Input>}
                    </FormGroup>
                </Col>
                <Col xs="6" lg="3">
                    <FormGroup>
                        <Label className="" for="exampleSelect">Fachbereich*</Label>
                        {source === 'klinikDe' ?
                            <Input type="select" name="fachbereich" id="fachbereich" value={fachbereich} onChange={(e) => handleFachbereich(e.target.value)}>
                                <option>Alle</option>
                                {uniqueFachbereichen.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input>
                            : <Input type="select" name="fachbereich" id="fachbereich" value={fachbereich} onChange={(e) => handleFachbereich(e.target.value)} disabled>
                                <option>Alle</option>
                            </Input>}
                    </FormGroup>
                </Col>
                <Col xs="6" lg="3">
                    <FormGroup>
                        <Label for="exampleSelect">Selekt Year</Label>
                        {((source === 'klinikDe' || source === 'Alle')) ?
                            <Input type="select" name="year" id="year" value={year} onChange={(e) => handleYear(e.target.value)}>
                                <option>Alle</option>
                                {KlinikDeYears.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input> :
                            <Input type="select" name="year" id="year" value={year} onChange={(e) => handleYear(e.target.value)}>
                                <option>Alle</option>
                                {GoogleMapsYears.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input>}
                    </FormGroup>
                </Col>
                <Col xs="6" lg="3">
                    <FormGroup>
                        <Label className="" for="exampleSelect">Polarity Result</Label>
                        <Input type="select" name="result" id="result" value={result} onChange={(e) => handleResult(e.target.value)}>
                            <option>Alle</option>
                            <option value="1" >Positive</option>
                            <option value='0'>Negative</option>
                        </Input>
                    </FormGroup>
                </Col>

                <Col xs="6" lg="3">
                    <FormGroup>
                        <Label className="" for="exampleSelect">Nutzer Bewertung - Gesamt*</Label>
                        {source === 'klinikDe' ?
                            <Input type="select" name="gesamt" id="gesamt" value={gesamt} onChange={(e) => handleGesamt(e.target.value)}>
                                <option>Alle</option>
                                <option value="100" >Sehr Zufrieden</option>
                                <option value='67'>Zufrieden</option>
                                <option value='33'>Weniger Zufrieden</option>
                                <option value='0'>Nicht Zufrieden</option>
                            </Input> :
                            <Input type="select" name="gesamt" id="gesamt" value={gesamt} onChange={(e) => handleGesamt(e.target.value)} disabled>
                                <option>Alle</option>
                            </Input>}
                    </FormGroup>
                </Col>

                <Col xs="6" lg="3">
                    <FormGroup>
                        <Label className="" for="exampleSelect">Nutzer Bewertung - Sterne***</Label>
                        {source === 'googleMaps' ?
                            <Input type="select" name="sterne" id="sterne" value={sterne} onChange={(e) => handleSterne(e.target.value)}>
                                <option>Alle</option>
                                <option value="1" >1 Stern</option>
                                <option value='2'>2 Stern</option>
                                <option value='3'>3 Stern</option>
                                <option value='4'>4 Stern</option>
                                <option value='5'>5 Stern</option>
                            </Input> :
                            <Input type="select" name="sterne" id="sterne" value={sterne} onChange={(e) => handleSterne(e.target.value)} disabled>
                                <option>Alle</option>
                            </Input>}
                    </FormGroup>
                </Col>

                <em style={{ fontSize: 'small' }} className="mt-2">* Google Maps Data hat diese Atribute nicht!!</em>
                <em style={{ fontSize: 'small' }} className="mt-2">** Entweder einzelne Klinik oder eine Gruppe kann selektiert werden!</em>
                <em style={{ fontSize: 'small' }} className="mt-2">*** Klinikbewertungen.de Data hat diese Atribute nicht!!</em>

            </Row>
            <Row>
                <Button color="danger" onClick={resetFilter}>Reset Filters</Button>
            </Row>
            <br />


            {renderContent()}




        </div>
    );
}

export default Kommentare;


