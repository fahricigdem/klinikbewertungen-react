import React from 'react';
const Kommentare = ({ Dataset }) => {
    //console.log(typeof (props))
    const FilteredKlinik = "Herzogin Elisabeth Hospital"
    const Herzogin_Elisabeth_Hospital = Dataset.filter(klinik => klinik.name === FilteredKlinik)
    const data = Herzogin_Elisabeth_Hospital.map(komment =>
        <div key={komment.index}>
            <p>Rezension-{komment.index + 1} : {komment.komment}</p>
            <p>Result: {komment.positive}</p>

        </div>
    )

    return (
        <div className="container">
            <h1>Google Rezensionen <br /> ({FilteredKlinik})</h1>
            {data}
        </div>
    );
}

export default Kommentare;