import React, { useState } from 'react';
import Chart from './Chart'
import PaginationComponent from './PaginationComponent'

const ShowKommentare = ({ Dataset }) => {
    ////////////  Diagram Data ////////////////////////////
    let positive = 0
    let negative = 0
    let data01 = []

    Dataset.map(c => {
        if (c.positive) {
            positive = positive + 1
        }
        return c
    })

    negative = Dataset.length - positive

    data01 = [
        { name: 'Positive', value: positive },
        { name: 'Negative', value: negative }
    ];

    //////////////////////////////////////////////////////////

    const dataSet = Dataset.map(komment =>

        <div key={komment.index}>
            <p>Rezension-{komment.index + 1} : {komment.komment}</p>
            <p>Result: {komment.positive}</p>
        </div>

    )

    const pageSize = 5
    const pagesCount = Math.ceil(dataSet.length / pageSize);

    const [currentPage, setCurrentPage] = useState(0)

    const handleClickTop = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
    }

    const handleClickBottom = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
        window.scrollTo({ top: 150, behavior: 'smooth' });
    }

    return (
        <>
            <center>
                <Chart data={data01} />
            </center>

            <PaginationComponent handleClick={handleClickTop} currentPage={currentPage} pagesCount={pagesCount} />


            <div >
                <p>{dataSet.length} Rezension gefunden</p>
                <p>Total Pages : {pagesCount}</p>
                <p>Current Page : {currentPage + 1}</p>

                {
                    dataSet
                        .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                        )
                        .map((data, i) =>
                            <div key={i}>
                                {data}
                            </div>
                        )
                }
            </div>

            <PaginationComponent handleClick={handleClickBottom} currentPage={currentPage} pagesCount={pagesCount} />




        </>
    );
}

export default ShowKommentare;