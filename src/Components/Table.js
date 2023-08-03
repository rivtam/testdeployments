import React, { useState, useCallback, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBModalDialog, MDBModalTitle, MDBModalContent, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import PaginationComponent from './Pagination';

import SpinnersComponent from './Spinners';
import axios from 'axios';
import ModalComponent from './Modal';
// let trxs = [
//   {
//     amount: 355,
//     pan: '4761 73** **** 0119',
//     rrn: '1690354190775',
//     tx_log_id: '1cf11040-2b81-11ee-8bd8-2fb96aed5c18',
//     tx_log_type: 'void',
//     tx_date_time: '26/07/2023 08:53:23.140',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270633077666',
//     result_code: '00',
//     auth_code: '',
//   },
//   {
//     amount: 355,
//     pan: '4761 73** **** 0119',
//     rrn: '1690354190775',
//     tx_log_id: '920a4960-2b80-11ee-8bd8-2fb96aed5c18',
//     tx_log_type: 'payment',
//     tx_date_time: '26/07/2023 08:49:30.103',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270633077666',
//     result_code: '00',
//     auth_code: '087637',
//   },
//   {
//     amount: 1,
//     pan: '4847 95** **** 8006',
//     rrn: '1690290832604',
//     tx_log_id: '0c287da0-2aed-11ee-af9b-4556fb445090',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 15:13:29.466',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '27795751101',
//     result_code: '30',
//     auth_code: '',
//   },
//   {
//     amount: 1,
//     pan: '4847 95** **** 8006',
//     rrn: '1690290820110',
//     tx_log_id: '04bc0230-2aed-11ee-af9b-4556fb445090',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 15:13:17.011',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '27795751101',
//     result_code: '30',
//     auth_code: '',
//   },
//   {
//     amount: 15,
//     pan: '4308 64** **** 1764',
//     rrn: 'pat',
//     tx_log_id: '851ee530-2ad1-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 11:56:26.500',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270823850113',
//     result_code: 'T8',
//     auth_code: '',
//   },
//   {
//     amount: 10,
//     pan: '4847 95** **** 2245',
//     rrn: 'pat',
//     tx_log_id: '732610b0-2ad1-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 11:55:56.347',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270823850113',
//     result_code: '30',
//     auth_code: '',
//   },
//   {
//     amount: 100,
//     pan: '4761 73** **** 0119',
//     rrn: '1690278284124',
//     tx_log_id: 'd42e8740-2acf-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 11:44:20.148',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '27795751101',
//     result_code: '00',
//     auth_code: '030108',
//   },
//   {
//     amount: 100,
//     pan: '4761 73** **** 0035',
//     rrn: '1690278258225',
//     tx_log_id: 'c585c820-2acf-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 11:43:55.555',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '27795751101',
//     result_code: '00',
//     auth_code: '031294',
//   },
//   {
//     amount: 10,
//     pan: '4847 95** **** 8006',
//     rrn: '1690278167562',
//     tx_log_id: '8fc281b0-2acf-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 11:42:25.356',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '27795751101',
//     result_code: '30',
//     auth_code: '',
//   },
//   {
//     amount: 754,
//     pan: '4761 73** **** 0119',
//     rrn: '1690277464430',
//     tx_log_id: 'f71b5550-2acd-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 11:30:59.749',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270633077666',
//     result_code: '00',
//     auth_code: '043411',
//   },
//   {
//     amount: 3500,
//     pan: '2320 00** **** 1486',
//     rrn: '1690271235450',
//     tx_log_id: '74f44630-2abf-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 09:47:08.436',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270633077666',
//     result_code: '00',
//     auth_code: '537959',
//   },
//   {
//     amount: 3500,
//     pan: '4761 73** **** 0119',
//     rrn: '1690270573167',
//     tx_log_id: 'e3466110-2abd-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 09:35:54.529',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270633077666',
//     result_code: '00',
//     auth_code: '001017',
//   },
//   {
//     amount: 10,
//     pan: '4761 73** **** 0119',
//     rrn: '1690269964442',
//     tx_log_id: '764585b0-2abc-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 09:25:42.156',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: '39ED991175E1B52E5350A2398D3407475291E56638B5DB86181B14DAE25B1E571199DE93006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270692317836',
//     result_code: '00',
//     auth_code: '003453',
//   },
//   {
//     amount: 10,
//     pan: '4308 64** **** 1764',
//     rrn: '1690266512910',
//     tx_log_id: '73f15620-2ab4-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 08:28:22.274',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270823850113',
//     result_code: 'T8',
//     auth_code: '',
//   },
//   {
//     amount: 235,
//     pan: '4761 73** **** 0119',
//     rrn: '1690266059614',
//     tx_log_id: '67f0c910-2ab3-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 08:20:52.642',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270633077666',
//     result_code: '00',
//     auth_code: '010109',
//   },
//   {
//     amount: 236,
//     pan: '4761 73** **** 0119',
//     rrn: '1690266024397',
//     tx_log_id: '4e083f60-2ab3-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 08:20:09.174',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270633077666',
//     result_code: '00',
//     auth_code: '027653',
//   },
//   {
//     amount: 510,
//     pan: '2320 00** **** 1486',
//     rrn: 'DEBUG-04',
//     tx_log_id: '86e864f0-2aad-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 07:38:47.615',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: '1AAC0E3FC1A816B8202CBCD1CBE5C8EC810D0C535A201E5400D71EA78B618A1CF3E0CAA1006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '27733659444',
//     result_code: '00',
//     auth_code: '948378',
//   },
//   {
//     amount: 501,
//     pan: '2320 00** **** 1486',
//     rrn: 'DEBUG-07',
//     tx_log_id: 'e7238b50-2aa9-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '25/07/2023 07:12:51.077',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: '1AAC0E3FC1A816B8202CBCD1CBE5C8EC810D0C535A201E5400D71EA78B618A1CF3E0CAA1006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '27733659444',
//     result_code: '00',
//     auth_code: '301207',
//   },
//   {
//     amount: 10,
//     pan: '4308 64** **** 1764',
//     rrn: '1690214717666',
//     tx_log_id: 'd561d660-2a3b-11ee-8ec3-9d76558cba3d',
//     tx_log_type: 'payment',
//     tx_date_time: '24/07/2023 18:04:56.646',
//     merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//     merchant_name: 'WIZZITpay',
//     mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//     msisdn: '270823850113',
//     result_code: 'T8',
//     auth_code: '',
//   },
// {
//   amount: 20,
//   pan: '4308 64** **** 1764',
//   rrn: '1690210954971',
//   tx_log_id: '132e8aa0-2a33-11ee-8ec3-9d76558cba3d',
//   tx_log_type: 'payment',
//   tx_date_time: '24/07/2023 17:02:14.859',
//   merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
//   merchant_name: 'WIZZITpay',
//   mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
//   msisdn: '270823850113',
//   result_code: 'T8',
//   auth_code: '',
// },
// ];

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

const TableComponent = () => {
  const [trxs, setTrxs] = useState([]);

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
  const getTrx = useCallback(async () => {
    // setIsLoading(true);
    setError(null);
    try {
      let url = 'https://efinance-services-stage.wizzitdigital.com/';

      axios
        .get(`${url}api/v1/tx-history?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            // Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJEd2JlSmQzY05hbG1SWUVPaHhEbVpaV1hwQTVnSHdtRm9lRFF1X3l4MkdzIn0.eyJleHAiOjE2OTA3MjU0MTQsImlhdCI6MTY5MDcyNTExNCwiYXV0aF90aW1lIjoxNjkwNzA2MjY2LCJqdGkiOiIyMWQ5NDAyZS1kNzg5LTQyMjItOTRhZS01NjZiNmZkMzkwZDAiLCJpc3MiOiJodHRwczovL2F1dGgtc2VydmVyLXN0YWdlLndpenppdGRpZ2l0YWwuY29tL3JlYWxtcy9XSVpaSVQiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYzMxNWYwNWQtZjk4Zi00OWEwLWEwZTQtMWVhNWE5ZmIwODc0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZWZpbmFuY2Utc2VydmljZXMiLCJub25jZSI6ImM5YTgxNmMwLTU0MzAtNGFkZi04NGViLTFkYWU2MGE0OTEyOSIsInNlc3Npb25fc3RhdGUiOiIxYjMzNThhZS05ZmU1LTRlZTgtYjA4OC0xMzk3MDIwZWM3YjMiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy13aXp6aXQiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIxYjMzNThhZS05ZmU1LTRlZTgtYjA4OC0xMzk3MDIwZWM3YjMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkRldiBEZXYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkZXZlbG9wZXIiLCJnaXZlbl9uYW1lIjoiRGV2IiwiZmFtaWx5X25hbWUiOiJEZXYiLCJlbWFpbCI6ImRldkB3aXp6aXQuY29tIn0.qRSIhuTal-kazVspcLFSQjAH9ETp10A967BY658hrJtJvC35qL76gdo8IFXS6h2USYdhjl2q3rXUFA8xRcWoM4ZQEwmFPYBTy_cNbdNfDfs_2L7vmI1uq-CptLXmE7AqrtlvDq82FHdPjp-jToYzWsjfaKEQnqiLMZHemYDpE65UKbFTBj9YB4HwCFGqZc4VVAhHh6arpT7zjFf0g9ttl5s5xQEI3W1Y_5VxLT07rGxB8LOVHTEgDvJgaxBVhlkbkUuVEcV53SR5rQceFwDM6vEBSzblDkpIHTnjmRbD_kLLmXoEmIOdsCDlp0o1PRHiXGgLUKPPFsb8nJyEO9McDQ`,
          },
        })
        .then(response => {
          console.log(response.data);
          console.log(JSON.stringify(response.data));
          const { rows, totalPages } = response.data;
          console.log(response.data);
          setTrxs(rows);
        })
        .catch(error => {
          console.log('Error:', error);
          throw new Error('Something went wrong!');
        });
    } catch (error) {
      setError(error.message);
    }
    // setIsLoading(false);
  }, [pageNumber]);

  useEffect(() => {
    getTrx();
  }, [getTrx]);

  return (
    <>
      <MDBTable align="middle" striped hover>
        <MDBTableHead>
          <tr className="table-info">
            <th scope="col">No.</th>
            <th scope="col-6">Merchant Name</th>
            <th scope="col">Merchant ID</th>
            <th scope="col">DateTime</th>
            <th scope="col">Amount</th>
            <th scope="col">Reference Number</th>
            <th scope="col">Msisdn</th>
            <th scope="col">Log Type</th>
            <th scope="col">Res Code</th>
            <th scope="col">Auth Code</th>
          </tr>
        </MDBTableHead>
        {trxs.length === 0 ? (
          <SpinnersComponent />
        ) : (
          <MDBTableBody align="middle ">
            {trxs.map((transaction, index) => (
              <tr className="fullRow" key={index} data-mdb-toggle="modal" onClick={() => showModalTRX(transaction)}>
                {/* <td>
              <div className="d-flex">
                <div className="">
                  <p className="fw-bold mb-1">{transaction.merchant_name}</p>
                  <p className="">{transaction.merchant_id}</p>
                </div>
              </div>} */}
                {/* </td> */}
                <td className="tabRow">{index + 1}</td>
                <td className="tabRow">{transaction.merchant_name}</td>
                <td className="tabRow">{transaction.merchant_id}</td>
                {/* <td className="td-02">{transaction.merchant_id}</td> */}
                <td className="tabRow">{transaction.tx_date_time}</td>
                <td className="tabRow">{transaction.amount}</td>
                <td className="tabRow">{transaction.rrn}</td>
                <td className="tabRow">{transaction.msisdn}</td>
                <td className="tabRow">{transaction.tx_log_type}</td>

                <td className="tabRow">
                  <TableRow resultCode={transaction.result_code}>{transaction.result_code}</TableRow>
                </td>

                <td className="tabRow">{transaction.auth_code}</td>
              </tr>
            ))}
          </MDBTableBody>
        )}
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
