import React from 'react';
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Input } from 'reactstrap';

const PaginationComponent = ({ handlePageSelect, handleClick, currentPage, pagesCount, pageSize, rezensionenZahl }) => {
    const pages = Array.from(new Array(pagesCount), (x, i) => i + 1)

    return (
        <>
            <Row style={{ textAlign: "center", marginTop: "10px" }}>
                <p>{(rezensionenZahl >= (currentPage * pageSize)) ? "Rezensionen :" : "Rezension :"}  {(currentPage - 1) * pageSize + 1} {(rezensionenZahl >= (currentPage * pageSize)) && ("- " + (currentPage * pageSize))} </p>
            </Row>

            <Row>
                <Pagination aria-label="Page navigation example" style={{ flexDirection: "row", justifyContent: "center", textAlignLast: "center" }} >

                    <PaginationItem >

                        <PaginationLink


                            onClick={e => handleClick(e, 1)}
                            href="#AnfangderKommentare"
                        >

                            <span>&#8826;&#8826;</span>
                        </PaginationLink>

                    </PaginationItem>




                    <PaginationItem disabled={currentPage <= 1}>

                        <PaginationLink

                            onClick={e => handleClick(e, currentPage - 1)}
                            href="#AnfangderKommentare"
                        >


                            <span> zurück</span>
                        </PaginationLink>

                    </PaginationItem>


                    <PaginationItem >


                        <Input type="select" name="seite" id="seite" value={currentPage} onChange={(e) => handlePageSelect(e.target.value)} >
                            {console.log(currentPage)}
                            {pages.map((p, index) =>
                                <option key={index}>{p}</option>
                            )}
                        </Input>

                    </PaginationItem>


                    <PaginationItem disabled={currentPage >= pagesCount}>

                        <PaginationLink

                            onClick={e => handleClick(e, currentPage + 1)}
                            href="#AnfangderKommentare"
                        >
                            <span> weiter </span>
                        </PaginationLink>

                    </PaginationItem>

                    <PaginationItem >

                        <PaginationLink

                            onClick={e => handleClick(e, pagesCount)}
                            href="#AnfangderKommentare"
                        >
                            <span>&#8827;&#8827;</span>

                        </PaginationLink>

                    </PaginationItem>



                </Pagination>
            </Row>
        </>

    );
}

export default PaginationComponent;
