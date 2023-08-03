import { MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const navigate = useNavigate();

  const handleAdSearch = () => navigate('/search');
  return (
    <div className=" wSearch">
      <MDBContainer>
        <MDBRow center>
          <MDBCol size="4">
            <MDBBtn className="me-1 btnSearch" color="danger" onClick={handleAdSearch}>
              Advanced Search
            </MDBBtn>
          </MDBCol>
          <MDBCol size="4">
            <div className="md-6">
              <MDBInput className="wInput" label="Quick Search By Merchant Name" id="form1" type="text" labelStyle={{ borderWidth: 4, borderColor: 'red' }} />
            </div>
          </MDBCol>
        </MDBRow>
        {/* <div className="row wSearch">
        <div className="md-6">
          <MDBBtn className="me-1" color="danger">
            Advanced Search
          </MDBBtn>
        </div>
        <div className="md-6">
          <MDBInput className="wInput" label="Quick Search By Merchant Name" id="form1" type="text" />
        </div>
      </div> */}
      </MDBContainer>
    </div>
  );
};

export default SearchComponent;
