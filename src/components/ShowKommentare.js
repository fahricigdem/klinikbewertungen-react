import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const ShowKommentare = ({ Dataset }) => {

    const dataSet = Dataset.map(komment =>

        <div key={komment.index}>
            <p>Rezension-{komment.index + 1} : {komment.komment}</p>
            <p>Result: {komment.positive}</p>
        </div>

    )

    const pageSize = 10
    const pagesCount = Math.ceil(dataSet.length / pageSize);

    const [currentPage, setCurrentPage] = useState(0)

    const handleClick = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
    }

    return (
        <div >
            <div>

                <Pagination aria-label="Page navigation example">

                    <PaginationItem >

                        <PaginationLink
                            onClick={e => handleClick(e, 0)}
                            first
                            href="#"
                        />

                    </PaginationItem>

                    <PaginationItem disabled={currentPage <= 0}>

                        <PaginationLink
                            onClick={e => handleClick(e, currentPage - 1)}
                            previous
                            href="#"
                        />

                    </PaginationItem>



                    <PaginationItem disabled={currentPage >= pagesCount - 1}>

                        <PaginationLink
                            onClick={e => handleClick(e, currentPage + 1)}
                            next
                            href="#"
                        />

                    </PaginationItem>

                    <PaginationItem >

                        <PaginationLink
                            onClick={e => handleClick(e, pagesCount - 1)}
                            last
                            href="#"
                        />

                    </PaginationItem>

                </Pagination>

            </div>

            <div >
                <p>{dataSet.length} Rezension gefunden</p>
                <p>Total Pages : {pagesCount}</p>

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

        </div>
    );
}

export default ShowKommentare;