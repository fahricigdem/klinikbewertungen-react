import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


const Filter = ({ data }) => {

    const [klinik, setKlinik] = useState("Herzogin Elisabeth Hospital")

    return (
        <div className="container">
            <FormGroup>
                <Label for="exampleSelect">Select Klinik</Label>
                <Input type="select" name="klinik" id="klinik" value={klinik} onChange={(e) => setKlinik(e.target.value)}>
                    {data.map((k, index) =>
                        <option key={index}>{k}</option>
                    )}
                </Input>
            </FormGroup>

            <h1>{klinik}</h1>
        </div>
    );
}

export default Filter;