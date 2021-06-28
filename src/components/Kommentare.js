import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import ShowKommentare from './ShowKommentare'
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';
import Dataset from '../Data/Dataset'
import { KlinikNames, FachbereichNames, FachbereichNamesKurz, FachbereichNamesKurz_eng_uniq, KlinikDeYears, GoogleMapsYears } from '../Data/Lists'
import FlagUS from '../images/FlagUS.png'
import FlagDE from '../images/FlagDE.png'


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
    let uniqueFachbereichen_eng = [...FachbereichNamesKurz_eng_uniq]



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
    const [english, setEnglish] = useState(false)

    const [currentPage, setCurrentPage] = useState(1) // Das ist für Pagination




    //// fachbereichNames sind für klinik für klinik wieder festgestellt
    if (klinik !== "Alle") {
        uniqueFachbereichen = []
        uniqueFachbereichen_eng = []
        FachbereichNames.map(f => {
            if (f.name === klinik) {
                uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
                uniqueFachbereichen_eng = [...uniqueFachbereichen_eng, f.fachbereich_eng]
            }
            return null
        })
        uniqueFachbereichen = [...new Set(uniqueFachbereichen)];
        uniqueFachbereichen_eng = [...new Set(uniqueFachbereichen_eng)];
    }

    //// fachbereichNames sind für group für group wieder festgestellt
    if (gruppe !== "Alle") {
        uniqueFachbereichen = []
        uniqueFachbereichen_eng = []
        FachbereichNames.map(f => {
            if (f.group === parseInt(gruppe)) {
                uniqueFachbereichen = [...uniqueFachbereichen, f.fachbereich]
                uniqueFachbereichen_eng = [...uniqueFachbereichen_eng, f.fachbereich_eng]
            }
            return null
        })
        uniqueFachbereichen = [...new Set(uniqueFachbereichen)];
        uniqueFachbereichen_eng = [...new Set(uniqueFachbereichen_eng)];
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
            klinik={klinik} source={source} result={result} gruppe={gruppe} dark={dark} english={english} />
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

    }

    function handleQuelle() {
        if (source === "Alle") {
            setSource("klinikDe")
        } else if (source === "klinikDe") {
            setSource("googleMaps")
        } else {
            setSource("Alle")
        }


        setSterne("Alle")
        setGesamt("Alle")
        setFachbereich("Alle")
        setYear("Alle")
        setCurrentPage(1)

    }



    function handleResult(result) {
        setResult(result)
        setCurrentPage(1)

    }


    function handlePolarity() {



        if (result === "Alle") {
            setResult(1)
        } else if (result === 1) {
            setResult(0)
        } else {
            setResult("Alle")
        }


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

    function handleEnglish() {
        setEnglish(!english)
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
                {/*
                <Col xs="6" lg="auto">
                    <center >
                        <Label>{english ? "Data Source" : "Daten Quelle"}</Label><br />


                        <Button

                            color={source === 'Alle' ?
                                "secondary" : source === 'klinikDe' ? "danger" : "info"}

                            onClick={handleQuelle} >
                            {source === 'Alle' ?
                                "Alle" : source === 'klinikDe' ? "klinikDe" : "Google Maps"}
                        </Button>

                    </center>
                </Col>

            */}
                <Col xs="6" lg="auto">
                    <FormGroup >
                        <Label className="" for="exampleSelect"> {english ? "Data Source" : "Daten Quelle"}  </Label>
                        <Input type="select" name="source" id="source" value={source} onChange={(e) => handleSource(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"} id="Tooltip_Source">
                            <option value="Alle"> {english ? "All" : "Alle"}  </option>
                            <option value='klinikDe'>klinikDe</option>
                            <option value='googleMaps'>Google Maps</option>
                        </Input>
                    </FormGroup>
                </Col>


                <UncontrolledTooltip placement="right" target="Tooltip_Source">
                    {english ? "klinikDe Data has Fachbereich Data but Google Maps not" : "klinikDe Daten hat Fachbereichsdaten, aber Google Maps nicht"}
                </UncontrolledTooltip>


                <Col xs="6" lg={(source === 'Alle' || source === 'googleMaps') ? 2 : 1}>
                    <FormGroup >
                        <Label for="exampleSelect"> {english ? "Clinic" : "Klinik"}  </Label>
                        {gruppe === 'Alle' ?
                            <><Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => handleKlinik(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"} id="Tooltip_Klinik">
                                <option value="Alle">{english ? "All" : "Alle"}</option>
                                {KlinikNames.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input>
                                <UncontrolledTooltip placement="right" target="Tooltip_Klinik">
                                    {english ? "Attention, if you choose clinic, you cannot select group due to information consistency." :
                                        "Achtung, wenn Sie Klinik wählen, können Sie aufgrund der Informationskonsistenz keine Gruppe wählen."}
                                </UncontrolledTooltip></>
                            :
                            <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => handleKlinik(e.target.value)} disabled className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option>{english ? "All" : "Alle"}</option>
                            </Input>}
                    </FormGroup>

                </Col>
                <Col xs="6" lg="auto">
                    <FormGroup>
                        <Label for="exampleSelect">{english ? "Group" : "Gruppe"} </Label>
                        {klinik === 'Alle' ?
                            <Input type="select" name="gruppe" id="gruppe" value={gruppe} onChange={(e) => handleGruppe(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"} id="Tooltip_Gruppe">
                                <option value="Alle">{english ? "All" : "Alle"}</option>
                                <option value="0"> 1</option>
                                <option value='1'> 2 </option>
                                <option value="2"> 3 </option>
                                <option value='3'> 4 </option>
                            </Input> :
                            <Input type="select" name="gruppe" id="gruppe" value={gruppe} onChange={(e) => handleGruppe(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"} disabled>
                                <option value="Alle">{english ? "All" : "Alle"}</option>
                            </Input>}
                    </FormGroup>
                </Col>

                <UncontrolledTooltip placement="right" target="Tooltip_Gruppe">
                    {english ? "Each Clinic belongs to a group determined by Machine Learning algorithm " :
                        "Jede Klinik gehört zu einer durch Maschine Lernen Algorithmus bestimmten Gruppe"}
                </UncontrolledTooltip>


                {source === 'klinikDe' &&
                    <Col xs="6" lg="2">
                        <FormGroup>
                            <Label className="" for="exampleSelect"> {english ? "Area" : "Fachbereich"} </Label>
                            {source === 'klinikDe' ?
                                <Input type="select" name="fachbereich" id="fachbereich" value={fachbereich} onChange={(e) => handleFachbereich(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                    <option value="Alle">{english ? "All" : "Alle"}</option>
                                    {english ?
                                        uniqueFachbereichen_eng.map((k, index) => {
                                            let i = uniqueFachbereichen_eng.indexOf(k)
                                            return (<option value={uniqueFachbereichen[i]} key={index}>{k}</option>)
                                        }
                                        )
                                        :
                                        uniqueFachbereichen.map((k, index) =>
                                            <option key={index}>{k}</option>
                                        )
                                    }
                                </Input>

                                : <Input type="select" name="fachbereich" id="fachbereich" value={fachbereich} onChange={(e) => handleFachbereich(e.target.value)} disabled className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                    <option value="Alle">{english ? "All" : "Alle"}</option>
                                </Input>
                            }
                        </FormGroup>
                    </Col>}


                <Col xs="6" lg="auto">
                    <FormGroup>
                        <Label for="exampleSelect">{english ? "Year" : "Jahr"} </Label>
                        {((source === 'klinikDe' || source === 'Alle')) ?
                            <>  <Input type="select" name="year" id="year" value={year} onChange={(e) => handleYear(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"} id="Tooltip_Year_klinikDe">
                                <option value="Alle">{english ? "All" : "Alle"}</option>
                                {KlinikDeYears.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input>
                                <UncontrolledTooltip placement="right" target="Tooltip_Year_klinikDe">
                                    {english ? "Clinic data goes back to 2006 and Google Maps data goes back to 2013." : "Klinikdaten reichen bis 2006 zurück und Google Maps-Daten reichen bis 2013 zurück."}
                                </UncontrolledTooltip></>
                            :
                            <> <Input type="select" name="year" id="year" value={year} onChange={(e) => handleYear(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"} id="Tooltip_Year_Google">
                                <option value="Alle">{english ? "All" : "Alle"}</option>
                                {GoogleMapsYears.map((k, index) =>
                                    <option key={index}>{k}</option>
                                )}
                            </Input>
                                <UncontrolledTooltip placement="right" target="Tooltip_Year_Google">
                                    {english ? "Clinic data goes back to 2006 and Google Maps data goes back to 2013." : "Klinikdaten reichen bis 2006 zurück und Google Maps-Daten reichen bis 2013 zurück."}
                                </UncontrolledTooltip>
                            </>}
                    </FormGroup>


                </Col>


                {source === 'klinikDe' &&
                    <Col xs="6" lg="1">
                        <FormGroup>
                            <Label className="" for="exampleSelect">{english ? "Stars" : "Sterne"}  </Label>

                            <Input type="select" name="gesamt" id="gesamt" value={gesamt} onChange={(e) => handleGesamt(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option value="Alle">{english ? "All" : "Alle"}</option>
                                <option value="100" > {english ? "Very Satisfied" : "Sehr Zufrieden"}  </option>
                                <option value='67'> {english ? "Satisfied" : "Zufrieden"} </option>
                                <option value='33'>{english ? "Less Satisfied" : "Weniger Zufrieden"} </option>
                                <option value='0'>{english ? "Unsatisfied" : "Unzufrieden"}   </option>
                            </Input>
                        </FormGroup>
                    </Col>}
                {source === 'googleMaps' &&
                    <Col xs="6" lg="auto">
                        <FormGroup>
                            <Label className="" for="exampleSelect"> {english ? "Stars" : "Sterne"} </Label>

                            <Input type="select" name="sterne" id="sterne" value={sterne} onChange={(e) => handleSterne(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                                <option value="Alle">{english ? "All" : "Alle"}</option>
                                <option value="1" >{english ? "1 Star" : " 1 Stern"} </option>
                                <option value='2'>{english ? "2 Stars" : " 2 Sterne"}</option>
                                <option value='3'>{english ? "3 Stars" : " 3 Sterne"}</option>
                                <option value='4'>{english ? "4 Stars" : " 4 Sterne"}</option>
                                <option value='5'>{english ? "5 Stars" : " 5 Sterne"}</option>
                            </Input>
                        </FormGroup>
                    </Col>}


                <Col xs="3" lg="auto">
                    <center >
                        <Label>{english ? "Polarity" : "Polarität"}</Label><br />

                        <Button
                            id="Tooltip_Polarity"
                            color={result === 'Alle' ?
                                "secondary" : result === 1 ? "success" : "danger"}

                            onClick={handlePolarity} >
                            {
                                english ? (result === 'Alle' ? "All" : result === 1 ? "Positive" : "Negative") :
                                    (result === 'Alle' ? "Alle" : result === 1 ? "Positiv" : "Negativ")
                            }
                        </Button>

                    </center>
                </Col>


                <UncontrolledTooltip placement="right" target="Tooltip_Polarity">
                    {english ? "This information is determined by Text Blob and varies between -1 and +1." : "Diese Informationen werden von Text Blob bestimmt und variieren zwischen -1 und +1."}
                </UncontrolledTooltip>

                {/* <Col xs="6" lg="1">
                    <FormGroup>
                        <Label className="" for="exampleSelect"> {english ? "Polarity" : "Polarität"} </Label>
                        <Input type="select" name="result" id="result" value={result} onChange={(e) => handleResult(e.target.value)} className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
                            <option value="Alle">{english ? "All" : "Alle"}</option>
                            <option value="1" > {english ? "Positive" : "Positiv"}  </option>
                            <option value='0'> {english ? "Negative" : "Negativ"}  </option>
                        </Input>
                    </FormGroup>
                </Col> */}








                {
                    (source !== 'Alle' || klinik !== 'Alle' || gruppe !== 'Alle' || year !== 'Alle' || result !== 'Alle' || fachbereich !== 'Alle')
                    &&
                    <Col xs="3" lg="auto">
                        <center >
                            <Label>Filter </Label><br />

                            <Button color="success"
                                id="Tooltip_Filter"
                                onClick={resetFilter} >
                                {english ? "On" : "Auf"}



                            </Button>
                        </center>
                        <UncontrolledTooltip placement="right" target="Tooltip_Filter">
                            {english ? "If you click it, the filters will be reset" : "Wenn Sie darauf klicken, werden die Filter zurückgesetzt"}
                        </UncontrolledTooltip>
                    </Col>



                }










                <Col xs="3" lg="auto">
                    <center >
                        <Label>{english ? "Theme" : "Thema"} </Label><br />

                        <Button className={`     ${dark ? "bg-light" : "bg-dark"} `}
                            color={dark ? 'light' : 'dark'}

                            onClick={handleDark} >
                            {
                                dark ?
                                    english ?
                                        "Light" : "Hell"
                                    :
                                    english ?
                                        "Dark" : "Dunkel"}

                        </Button>

                    </center>
                </Col>





                <Col xs="3" lg="auto">
                    <center >
                        <Label> </Label><br />

                        {english ?
                            <img src={FlagUS} width="40" onClick={handleEnglish} />
                            :
                            <img src={FlagDE} width="40" onClick={handleEnglish} />
                        }

                    </center>
                </Col>



            </Row>

            {renderContent()}

        </Container>
    );
}

export default Kommentare;


