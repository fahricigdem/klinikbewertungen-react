import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import ShowKommentare from './ShowKommentare'
import { Row, Col } from 'reactstrap';



const Kommentare = ({ Dataset, KlinikNames }) => {

    const [klinik, setKlinik] = useState("Alle")
    const [source, setSource] = useState("Alle")

    const [currentPage, setCurrentPage] = useState(1)

    const handleClickTop = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
    }

    const handleClickBottom = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
        window.scrollTo({ top: 150, behavior: 'smooth' });
    }

    const handleSelect = (pageInput) => {
        setCurrentPage(parseInt(pageInput))
    }


    const renderContent = () => {

        if ((source !== "Alle" && klinik !== "Alle")) {

            let Data = Dataset.filter(k => ((k.source === source) && (k.name === klinik)))
            //console.log('1 Data: ', Data)

            const pageSize = 10
            const pagesCount = Math.ceil(Data.length / pageSize);

            return (
                <ShowKommentare Dataset={Data} pageSize={pageSize} pagesCount={pagesCount} currentPage={currentPage} handleClickTop={handleClickTop} handleClickBottom={handleClickBottom} handleSelect={handleSelect} klinik={klinik} source={source} />
            )
        } else if (source === "Alle" && klinik !== "Alle") {

            let Data = Dataset.filter(k => k.name === klinik)
            //console.log('2 Data: ', Data)

            const pageSize = 10
            const pagesCount = Math.ceil(Data.length / pageSize);

            return (
                <ShowKommentare Dataset={Data} pageSize={pageSize} pagesCount={pagesCount} currentPage={currentPage} handleClickTop={handleClickTop} handleClickBottom={handleClickBottom} handleSelect={handleSelect} klinik={klinik} source={source} />
            )
        } else if (source !== "Alle" && klinik === "Alle") {

            let Data = Dataset.filter(k => k.source === source)
            //console.log('3 Data: ', Data)
            const pageSize = 10
            const pagesCount = Math.ceil(Data.length / pageSize);
            return (
                <ShowKommentare Dataset={Data} pageSize={pageSize} pagesCount={pagesCount} currentPage={currentPage} handleClickTop={handleClickTop} handleClickBottom={handleClickBottom} handleSelect={handleSelect} klinik={klinik} source={source} />
            )
        } else {

            let Data = Dataset
            //console.log('4 Data: ', Data)
            const pageSize = 10
            const pagesCount = Math.ceil(Data.length / pageSize);
            return (
                <ShowKommentare Dataset={Data} pageSize={pageSize} pagesCount={pagesCount} currentPage={currentPage} handleClickTop={handleClickTop} handleClickBottom={handleClickBottom} handleSelect={handleSelect} klinik={klinik} source={source} />
            )
        }
    }

    function handleKlinik(klinik) {
        setKlinik(klinik)
        setCurrentPage(1)

    }

    function handleSource(source) {
        setSource(source)
        setCurrentPage(1)
    }

    return (
        <div >
            <Row >
                <FormGroup>
                    <Label for="exampleSelect">Select Klinik</Label>
                    <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => handleKlinik(e.target.value)}>
                        <option>Alle</option>
                        {KlinikNames.map((k, index) =>
                            <option key={index}>{k}</option>
                        )}
                    </Input>
                    <br />
                    <Label for="exampleSelect">Select Data Source</Label>
                    <Input type="select" name="source" id="source" value={source} onChange={(e) => handleSource(e.target.value)}>
                        <option>Alle</option>
                        <option value='klinikDe'>Klinikbewertungen.de</option>
                        <option value='googleMaps'>Google Maps</option>

                    </Input>
                </FormGroup>
            </Row>
            <br />
            <Row>

                {renderContent()}

            </Row>


        </div>
    );
}

export default Kommentare;


