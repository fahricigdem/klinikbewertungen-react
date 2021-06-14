import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import ShowKommentare from './ShowKommentare'


const Kommentare = ({ Dataset, KlinikNames }) => {

    const [klinik, setKlinik] = useState("Alle")
    const [source, setSource] = useState("Alle")

    const renderContent = () => {


        if ((source !== "Alle" && klinik !== "Alle")) {

            let Data = Dataset.filter(k => ((k.source === source) && (k.name === klinik)))
            //console.log('1 Data: ', Data)
            return (
                <ShowKommentare Dataset={Data} sorce={source} klinik={klinik} />
            )
        } else if (source === "Alle" && klinik !== "Alle") {

            let Data = Dataset.filter(k => k.name === klinik)
            //console.log('2 Data: ', Data)
            return (
                <ShowKommentare Dataset={Data} sorce={source} klinik={klinik} />
            )
        } else if (source !== "Alle" && klinik === "Alle") {

            let Data = Dataset.filter(k => k.source === source)
            //console.log('3 Data: ', Data)
            return (
                <ShowKommentare Dataset={Data} sorce={source} klinik={klinik} />
            )
        } else {

            let Data = Dataset
            //console.log('4 Data: ', Data)
            return (
                <ShowKommentare Dataset={Data} sorce={source} klinik={klinik} />
            )
        }
    }

    return (
        <div className=" flex-row justify-content-end">

            <FormGroup>
                <Label for="exampleSelect">Select Klinik</Label>
                <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => setKlinik(e.target.value)}>
                    <option>Alle</option>
                    {KlinikNames.map((k, index) =>
                        <option key={index}>{k}</option>
                    )}
                </Input>

                <Label for="exampleSelect">Select Data Source</Label>
                <Input type="select" name="source" id="source" value={source} onChange={(e) => setSource(e.target.value)}>
                    <option>Alle</option>
                    <option value='klinikDe'>Klinikbewertungen.de</option>
                    <option value='googleMaps'>Google Maps</option>

                </Input>
            </FormGroup>
            <br />

            {renderContent()}


        </div>
    );
}

export default Kommentare;


