import React from 'react';
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Input } from 'reactstrap';

const PaginationComponent = ({ handleSelect, handleClick, currentPage, pagesCount }) => {
    const pages = Array.from(new Array(pagesCount), (x, i) => i + 1)

    return (
        <Row>
            <Col >


                <Pagination aria-label="Page navigation example" >

                    <PaginationItem >

                        <PaginationLink


                            onClick={e => handleClick(e, 1)}
                            href="#"
                        >
                            <span>&#8826;&#8826;</span>
                        </PaginationLink>

                    </PaginationItem>




                    <PaginationItem disabled={currentPage <= 1}>

                        <PaginationLink

                            onClick={e => handleClick(e, currentPage - 1)}
                            href="#"
                        >

                            <span> zurück</span>
                        </PaginationLink>

                    </PaginationItem>


                    <PaginationItem >





                        <Input type="select" name="seite" id="seite" value={currentPage} onChange={(e) => handleSelect(e.target.value)} style={{ textAlignLast: "center" }}>

                            {pages.map((p, index) =>
                                <option key={index}>{p}</option>
                            )}
                        </Input>



                    </PaginationItem>



                    <PaginationItem disabled={currentPage >= pagesCount}>

                        <PaginationLink

                            onClick={e => handleClick(e, currentPage + 1)}
                            href="#"
                        >
                            <span> weiter </span>
                        </PaginationLink>

                    </PaginationItem>

                    <PaginationItem >

                        <PaginationLink

                            onClick={e => handleClick(e, pagesCount)}
                            href="#"
                        >
                            <span>&#8827;&#8827;</span>

                        </PaginationLink>

                    </PaginationItem>



                </Pagination>
            </Col>
        </Row>
    );
}

export default PaginationComponent;