import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationComponent = ({ handleClick, currentPage, pagesCount }) => {
    return (
        <div>


            <Pagination aria-label="Page navigation example">

                <PaginationItem >

                    <PaginationLink
                        onClick={e => handleClick(e, 0)}

                        href="#"
                    >
                        <span>&#8826;&#8826;</span>
                    </PaginationLink>

                </PaginationItem>

                <PaginationItem disabled={currentPage <= 0}>

                    <PaginationLink

                        onClick={e => handleClick(e, currentPage - 1)}
                        href="#"
                    >
                        <span>&#8826;</span>
                    </PaginationLink>

                </PaginationItem>



                <PaginationItem disabled={currentPage >= pagesCount - 1}>

                    <PaginationLink
                        onClick={e => handleClick(e, currentPage + 1)}

                        href="#"
                    >
                        <span>&#8827;</span>
                    </PaginationLink>

                </PaginationItem>

                <PaginationItem >

                    <PaginationLink
                        onClick={e => handleClick(e, pagesCount - 1)}

                        href="#"
                    >
                        <span>&#8827;&#8827;</span>
                    </PaginationLink>

                </PaginationItem>

            </Pagination>

        </div>
    );
}

export default PaginationComponent;