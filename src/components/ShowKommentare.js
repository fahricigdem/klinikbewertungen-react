import React, { useState } from 'react';
import Chart from './Chart'
import PaginationComponent from './PaginationComponent'

const ShowKommentare = ({ Dataset, pagesCount, pageSize, currentPage, handleClickTop, handleClickBottom, handleSelect, klinik, source }) => {
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

    const group = (Dataset.filter(k => k.name == klinik)[0].group + 1)


    return (
        <div className="pl-5 pr-5">

            <center>
                <h4>{klinik} (Group {group})  </h4>

                <h4>von {source}</h4>
                <h3>{dataSet.length} Rezension gefunden</h3>
                <div className="pb-5">
                    <Chart data={data01} />
                </div>
            </center>




            <PaginationComponent handleClick={handleClickTop} handleSelect={handleSelect} currentPage={currentPage} pagesCount={pagesCount} />


            <div className="pl-5 pr-5">




                {
                    dataSet
                        .slice(
                            (currentPage - 1) * pageSize,
                            (currentPage) * pageSize
                        )
                        .map((data) =>
                            <div key={data.index}>
                                {data}
                            </div>
                        )
                }
            </div>

            <PaginationComponent handleClick={handleClickBottom} currentPage={currentPage} pagesCount={pagesCount} />




        </div>
    );
}

export default ShowKommentare;