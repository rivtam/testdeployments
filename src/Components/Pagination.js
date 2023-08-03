import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function App(props) {
  return (
    <nav aria-label="...">
      <MDBPagination className="mb-0">
        <MDBPaginationItem disabled>
          <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
            Previous
          </MDBPaginationLink>
        </MDBPaginationItem>
        {/* <MDBPaginationItem>
          <MDBPaginationLink href="#">1</MDBPaginationLink>
        </MDBPaginationItem> */}
        <MDBPaginationItem active aria-current="page">
          <MDBPaginationLink href="#">
            {props.curPage} <span className="visually-hidden">(current)</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        {/* <MDBPaginationItem>
          <MDBPaginationLink href="#">3</MDBPaginationLink>
        </MDBPaginationItem> */}
        <MDBPaginationItem>
          <MDBPaginationLink href="#">Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}
