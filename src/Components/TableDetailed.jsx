import React, { useState, useCallback, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBModalDialog, MDBModalTitle, MDBModalContent, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import PaginationComponent from './Pagination';

import SpinnersComponent from './Spinners';
import axios from 'axios';
import ModalComponent from './Modal';

const TableRow = ({ resultCode, children }) => {
  const [basicModal, setBasicModal] = useState(false);

  const showModalTRX = () => setBasicModal(!basicModal);
  if (resultCode === '00') {
    return (
      <MDBBadge color="success" pill className="pill-cont">
        {children}
      </MDBBadge>
    );
  }
  return (
    <MDBBadge color="danger" pill>
      {children}
    </MDBBadge>
  );
};

const TableComponent = props => {
  const products = props.tableR.products;
  const [trxs, setTrxs] = useState(products);

  const [basicModal, setBasicModal] = useState(false);

  const showModalTRX = trx => {
    setBasicModal(!basicModal);
    setmodalTRX(trx);
  };

  const [modalTRX, setmodalTRX] = useState({});
  const [password, setPassword] = useState();
  const [showModal, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 20;
  // const [pageSize, setPageSize] = useState(20);
  // const getTrx = useCallback(async () => {
  //   // setIsLoading(true);
  //   setError(null);
  //   try {
  //     let url = 'https://efinance-services-stage.wizzitdigital.com/';

  //     axios
  //       .get(`${url}api/v1/tx-history?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
  //         headers: {
  //           Accept: '*/*',
  //           Authorization: `Bearer ${localStorage.getItem('token')}`,
  //           // Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJEd2JlSmQzY05hbG1SWUVPaHhEbVpaV1hwQTVnSHdtRm9lRFF1X3l4MkdzIn0.eyJleHAiOjE2OTA3MjU0MTQsImlhdCI6MTY5MDcyNTExNCwiYXV0aF90aW1lIjoxNjkwNzA2MjY2LCJqdGkiOiIyMWQ5NDAyZS1kNzg5LTQyMjItOTRhZS01NjZiNmZkMzkwZDAiLCJpc3MiOiJodHRwczovL2F1dGgtc2VydmVyLXN0YWdlLndpenppdGRpZ2l0YWwuY29tL3JlYWxtcy9XSVpaSVQiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYzMxNWYwNWQtZjk4Zi00OWEwLWEwZTQtMWVhNWE5ZmIwODc0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZWZpbmFuY2Utc2VydmljZXMiLCJub25jZSI6ImM5YTgxNmMwLTU0MzAtNGFkZi04NGViLTFkYWU2MGE0OTEyOSIsInNlc3Npb25fc3RhdGUiOiIxYjMzNThhZS05ZmU1LTRlZTgtYjA4OC0xMzk3MDIwZWM3YjMiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy13aXp6aXQiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIxYjMzNThhZS05ZmU1LTRlZTgtYjA4OC0xMzk3MDIwZWM3YjMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkRldiBEZXYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkZXZlbG9wZXIiLCJnaXZlbl9uYW1lIjoiRGV2IiwiZmFtaWx5X25hbWUiOiJEZXYiLCJlbWFpbCI6ImRldkB3aXp6aXQuY29tIn0.qRSIhuTal-kazVspcLFSQjAH9ETp10A967BY658hrJtJvC35qL76gdo8IFXS6h2USYdhjl2q3rXUFA8xRcWoM4ZQEwmFPYBTy_cNbdNfDfs_2L7vmI1uq-CptLXmE7AqrtlvDq82FHdPjp-jToYzWsjfaKEQnqiLMZHemYDpE65UKbFTBj9YB4HwCFGqZc4VVAhHh6arpT7zjFf0g9ttl5s5xQEI3W1Y_5VxLT07rGxB8LOVHTEgDvJgaxBVhlkbkUuVEcV53SR5rQceFwDM6vEBSzblDkpIHTnjmRbD_kLLmXoEmIOdsCDlp0o1PRHiXGgLUKPPFsb8nJyEO9McDQ`,
  //         },
  //       })
  //       .then(response => {
  //         console.log(response.data);
  //         console.log(JSON.stringify(response.data));
  //         const { rows, totalPages } = response.data;
  //         console.log(response.data);
  //         setTrxs(rows);
  //       })
  //       .catch(error => {
  //         console.log('Error:', error);
  //         throw new Error('Something went wrong!');
  //       });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   // setIsLoading(false);
  // }, [pageNumber]);

  // useEffect(() => {
  //   getTrx();
  // }, [getTrx]);

  const tableH = props.tableH.map((header, i) => (
    <th scope="col" key={i}>
      {header}
    </th>
  ));

  const tableR = products.map((product, index) => {
    const price = product.price;
    const totalPrice = price * product.quantity || 1;
    return (
      <tr className="fullRow" key={index} data-mdb-toggle="modal" onClick={() => showModalTRX(product)}>
        {/* <td>
    <div className="d-flex">
      <div className="">
        <p className="fw-bold mb-1">{transaction.merchant_name}</p>
        <p className="">{transaction.merchant_id}</p>
      </div>
    </div>} */}
        {/* </td> */}
        <td className="tabRow">{index + 1}</td>
        <td className="tabRow">{product.name}</td>
        <td className="tabRow">
          {product.size} {product.sizeUnits}
        </td>
        {/* <td className="td-02">{transaction.merchant_id}</td> */}
        <td className="tabRow">R {(price / 100).toFixed(2)}</td>
        <td className="tabRow">{product.quantity}</td>
        {/* <td className="tabRow">{product.isSale || 'Not on Sale'}</td> */}
        <td className="tabRow">{product.discount || '0'}</td>
        <td className="tabRow">R {(totalPrice / 100).toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <>
      <MDBTable align="middle" striped hover>
        <MDBTableHead>
          <tr className="table-info">{tableH}</tr>
        </MDBTableHead>
        {trxs.length === 0 ? <SpinnersComponent /> : <MDBTableBody align="middle ">{tableR}</MDBTableBody>}
      </MDBTable>
      <PaginationComponent curPage={trxs.length <= 20 ? 1 : 2}></PaginationComponent>
      {trxs.length !== 0 && (
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog scrollable>
            <MDBModalContent className="modalContent">
              <MDBModalHeader>
                <MDBModalTitle>{modalTRX.merchant_name} Transaction</MDBModalTitle>
                <MDBBtn className="btn-close" color="none" onClick={showModalTRX}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBTable align="middle" striped hover>
                  <MDBTableHead>
                    <tr className="table-info">
                      <th scope="col-6">ParametersIdentity</th>
                      <th scope="col">Value</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody align="middle scrollable ">
                    <tr className="fullRow">
                      <td className="tabRow">Merchant Name</td>
                      <td className="tabRow">{modalTRX.merchant_name}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Merchant ID</td>
                      <td className="tabRow">{modalTRX.merchant_id}</td>
                    </tr>

                    <tr className="fullRow">
                      <td className="tabRow">Transaction Type</td>
                      <td className="tabRow">{modalTRX.tx_log_type}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Transaction DateTime</td>
                      <td className="tabRow">{modalTRX.tx_date_time}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">RRN</td>
                      <td className="tabRow">{modalTRX.rrn}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">MSISDN</td>
                      <td className="tabRow">{modalTRX.msisdn}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Card Number</td>
                      <td className="tabRow">{modalTRX.pan}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Amount</td>
                      <td className="tabRow">R {(modalTRX.amount / 100).toFixed(2)}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Respond Code</td>
                      <td className="tabRow">{modalTRX.result_code}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Authorization Code</td>
                      <td className="tabRow">{modalTRX.auth_code}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Device ID</td>
                      <td className="tabRow">{modalTRX.mobile_device_id}</td>
                    </tr>
                    <tr className="fullRow">
                      <td className="tabRow">Log ID</td>
                      <td className="tabRow">{modalTRX.tx_log_id}</td>
                    </tr>

                    {/* </tr>
                                    <tr className="fullRow">
                    <td className="tabRow"></td>
                    <td className="tabRow">{modalTRX.}</td>
                  </tr> */}
                  </MDBTableBody>
                </MDBTable>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn className="me-1" color="danger" onClick={showModalTRX} rippleCentered>
                  Close
                </MDBBtn>
                {/* <MDBBtn>Save changes</MDBBtn> */}
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}
    </>
  );
};

export default TableComponent;
