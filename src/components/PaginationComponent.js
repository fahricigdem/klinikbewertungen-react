import React from 'react';
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Input } from 'reactstrap';

const PaginationComponent = ({ handlePageSelect, handleClick, currentPage, pagesCount, pageSize, rezensionenZahl, english, dark }) => {
    const pages = Array.from(new Array(pagesCount), (x, i) => i + 1)

    return (
        <>
            <Row style={{ textAlign: "center", marginTop: "10px" }}>
                {/* <p>{(currentPage - 1) * pageSize + 1} {(rezensionenZahl >= (currentPage * pageSize)) && ("- " + (currentPage * pageSize))}  {english ? "of" : "von"} {rezensionenZahl}</p> */}
                <p>{(currentPage - 1) * pageSize + 1}   {english ? "of" : "von"} {rezensionenZahl}</p>
            </Row>

            <Row>
                <Pagination aria-label="Page navigation example" style={{ flexDirection: "row", justifyContent: "center", textAlignLast: "center" }} >

                    <PaginationItem >

                        <PaginationLink


                            onClick={e => handleClick(e, 1)}
                            href=""
                        >

                            <span>«</span>

                        </PaginationLink>

                    </PaginationItem>




                    <PaginationItem disabled={currentPage <= 1}>

                        <PaginationLink

                            onClick={e => handleClick(e, currentPage - 1)}
                            href=""
                        >


                            <span> ‹ </span>
                        </PaginationLink>

                    </PaginationItem>


                    <PaginationItem >


                        <Input type="select" name="seite" id="seite" value={currentPage} onChange={(e) => handlePageSelect(e.target.value)} >

                            {pages.map((p, index) =>
                                <option key={index}>{p}</option>
                            )}
                        </Input>

                    </PaginationItem>


                    <PaginationItem disabled={currentPage >= pagesCount}>

                        <PaginationLink

                            onClick={e => handleClick(e, currentPage + 1)}
                            href=""
                        >
                            <span> › </span>
                        </PaginationLink>

                    </PaginationItem>

                    <PaginationItem >

                        <PaginationLink

                            onClick={e => handleClick(e, pagesCount)}
                            href=""
                        >
                            <span>»</span>

                        </PaginationLink>

                    </PaginationItem>



                </Pagination>
            </Row>
        </>

    );
}

export default PaginationComponent;
