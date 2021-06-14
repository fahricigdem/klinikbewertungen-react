import React from 'react';

const ShowKommentare = ({ Data }) => {
    //console.log(Data.length, source, klinik)

    //console.log('Data: ', Data.length, source, klinik)


    //console.log('Data: ', Data.length, source, klinik)

    return (
        <div className="container">
            <p>{Data.length} Rezension gefunden</p>
            {Data.map(komment => <div key={komment.index}>
                <p>Rezension-{komment.index + 1} : {komment.komment}</p>
                <p>Result: {komment.positive}</p>
            </div>
            )}
        </div>
    );
}

export default ShowKommentare;