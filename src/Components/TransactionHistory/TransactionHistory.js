import React from 'react';
import axios from 'axios';
import "./TransactionHistory.css";
import {FaSearch} from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Card, CardHeader, CardContent, Typography, Button} from '@material-ui/core';
import {useKeycloak} from "@react-keycloak/web";

let transactions = [
  [
    {
      amount: 355,
      pan: '4761 73** **** 0119',
      rrn: '1690354190775',
      tx_log_id: '1cf11040-2b81-11ee-8bd8-2fb96aed5c18',
      tx_log_type: 'void',
      tx_date_time: '26/07/2023 08:53:23.140',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270633077666',
      result_code: '00',
      auth_code: '',
    },
    {
      amount: 355,
      pan: '4761 73** **** 0119',
      rrn: '1690354190775',
      tx_log_id: '920a4960-2b80-11ee-8bd8-2fb96aed5c18',
      tx_log_type: 'payment',
      tx_date_time: '26/07/2023 08:49:30.103',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270633077666',
      result_code: '00',
      auth_code: '087637',
    },
    {
      amount: 1,
      pan: '4847 95** **** 8006',
      rrn: '1690290832604',
      tx_log_id: '0c287da0-2aed-11ee-af9b-4556fb445090',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 15:13:29.466',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '27795751101',
      result_code: '30',
      auth_code: '',
    },
    {
      amount: 1,
      pan: '4847 95** **** 8006',
      rrn: '1690290820110',
      tx_log_id: '04bc0230-2aed-11ee-af9b-4556fb445090',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 15:13:17.011',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '27795751101',
      result_code: '30',
      auth_code: '',
    },
    {
      amount: 15,
      pan: '4308 64** **** 1764',
      rrn: 'pat',
      tx_log_id: '851ee530-2ad1-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 11:56:26.500',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270823850113',
      result_code: 'T8',
      auth_code: '',
    },
    {
      amount: 10,
      pan: '4847 95** **** 2245',
      rrn: 'pat',
      tx_log_id: '732610b0-2ad1-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 11:55:56.347',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270823850113',
      result_code: '30',
      auth_code: '',
    },
    {
      amount: 100,
      pan: '4761 73** **** 0119',
      rrn: '1690278284124',
      tx_log_id: 'd42e8740-2acf-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 11:44:20.148',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '27795751101',
      result_code: '00',
      auth_code: '030108',
    },
    {
      amount: 100,
      pan: '4761 73** **** 0035',
      rrn: '1690278258225',
      tx_log_id: 'c585c820-2acf-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 11:43:55.555',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '27795751101',
      result_code: '00',
      auth_code: '031294',
    },
    {
      amount: 10,
      pan: '4847 95** **** 8006',
      rrn: '1690278167562',
      tx_log_id: '8fc281b0-2acf-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 11:42:25.356',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C9996632119E4678A5AF3235249D13BD78EA87D732AE564397F6AE928764E9112366999C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '27795751101',
      result_code: '30',
      auth_code: '',
    },
    {
      amount: 754,
      pan: '4761 73** **** 0119',
      rrn: '1690277464430',
      tx_log_id: 'f71b5550-2acd-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 11:30:59.749',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270633077666',
      result_code: '00',
      auth_code: '043411',
    },
    {
      amount: 3500,
      pan: '2320 00** **** 1486',
      rrn: '1690271235450',
      tx_log_id: '74f44630-2abf-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 09:47:08.436',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270633077666',
      result_code: '00',
      auth_code: '537959',
    },
    {
      amount: 3500,
      pan: '4761 73** **** 0119',
      rrn: '1690270573167',
      tx_log_id: 'e3466110-2abd-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 09:35:54.529',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270633077666',
      result_code: '00',
      auth_code: '001017',
    },
    {
      amount: 10,
      pan: '4761 73** **** 0119',
      rrn: '1690269964442',
      tx_log_id: '764585b0-2abc-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 09:25:42.156',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: '39ED991175E1B52E5350A2398D3407475291E56638B5DB86181B14DAE25B1E571199DE93006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270692317836',
      result_code: '00',
      auth_code: '003453',
    },
    {
      amount: 10,
      pan: '4308 64** **** 1764',
      rrn: '1690266512910',
      tx_log_id: '73f15620-2ab4-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 08:28:22.274',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270823850113',
      result_code: 'T8',
      auth_code: '',
    },
    {
      amount: 235,
      pan: '4761 73** **** 0119',
      rrn: '1690266059614',
      tx_log_id: '67f0c910-2ab3-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 08:20:52.642',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270633077666',
      result_code: '00',
      auth_code: '010109',
    },
    {
      amount: 236,
      pan: '4761 73** **** 0119',
      rrn: '1690266024397',
      tx_log_id: '4e083f60-2ab3-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 08:20:09.174',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'A315A335BCFF05DC3FECB8227E496EAF260871FF5E64DDC29E666DEACD50FFCB533A513A006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270633077666',
      result_code: '00',
      auth_code: '027653',
    },
    {
      amount: 510,
      pan: '2320 00** **** 1486',
      rrn: 'DEBUG-04',
      tx_log_id: '86e864f0-2aad-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 07:38:47.615',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: '1AAC0E3FC1A816B8202CBCD1CBE5C8EC810D0C535A201E5400D71EA78B618A1CF3E0CAA1006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '27733659444',
      result_code: '00',
      auth_code: '948378',
    },
    {
      amount: 501,
      pan: '2320 00** **** 1486',
      rrn: 'DEBUG-07',
      tx_log_id: 'e7238b50-2aa9-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '25/07/2023 07:12:51.077',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: '1AAC0E3FC1A816B8202CBCD1CBE5C8EC810D0C535A201E5400D71EA78B618A1CF3E0CAA1006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '27733659444',
      result_code: '00',
      auth_code: '301207',
    },
    {
      amount: 10,
      pan: '4308 64** **** 1764',
      rrn: '1690214717666',
      tx_log_id: 'd561d660-2a3b-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '24/07/2023 18:04:56.646',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270823850113',
      result_code: 'T8',
      auth_code: '',
    },
    {
      amount: 20,
      pan: '4308 64** **** 1764',
      rrn: '1690210954971',
      tx_log_id: '132e8aa0-2a33-11ee-8ec3-9d76558cba3d',
      tx_log_type: 'payment',
      tx_date_time: '24/07/2023 17:02:14.859',
      merchant_id: '42731760-ab47-11ed-9985-f9e78d46c0dc',
      merchant_name: 'WIZZITpay',
      mobile_device_id: 'C7DDAB1C740A355AA5AF3235249D13BD78EA87D732AE564397F6AE92A553A047C1BADD7C006839D264A38B7F58E5C8130447528BF4B7AEE1',
      msisdn: '270823850113',
      result_code: 'T8',
      auth_code: '',
    },
  ],
];
class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
    // const {keycloak} = useKeycloak();
    this.state = {
      isModalOpen: false,
      inputValue: '',
      selectedOption: '',
      // transactions: [],
      transactions,
      pageNumber: 1,
      pageSize: 20,
      totalPages: 0,
      perPage: 3,
      name: '',
      amount: '',
      showDatePicker: false,
      fromDate: new Date(),
      toDate: new Date(),
      //keycloak: keycloak,
    };
  }

  handleOptionChange = e => {
    this.setState({ selectedOption: e.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    //const {keycloak} = useKeycloak();
    //console.log('1_____TOKE LOAD___:', this.state.keycloak.token);
    //console.log('2_____TOKE LOAD___:', this.state.keycloak.idToken);
    let url = 'https://efinance-services-stage.wizzitdigital.com/';
    const user = JSON.parse(localStorage.getItem('user'));
    const { pageNumber, pageSize } = this.state;

    console.log({ pageNumber, pageSize });

    axios
      .get(`${url}api/v1/tx-history?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(response => {
        console.log(response.data);
        console.log(JSON.stringify(response.data));
        const { rows, totalPages } = response.data;
        console.log(rows);
        // this.setState({transactions: rows, totalPages});
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  goToPage = pageNumber => {
    this.setState({ pageNumber }, () => {
      this.fetchData();
    });
  };

  handlePerPageChange = event => {
    const perPage = parseInt(event.target.value);
    this.setState({ perPage, pageNumber: 1 }, () => {
      this.fetchData();
    });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted value:', this.state.inputValue);
    this.closeModal();
  };

  render() {
    const { transactions, pageNumber, totalPages, perPage } = this.state;
    const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);
    const { isModalOpen, inputValue } = this.state;
    return (
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" align="center" className="header-title">
              {/* <button onClick={this.openModal} className="submit-search-button">
                                     <FaSearch className="search-icon"/>
                                     Search
                        </button>*/}
              Transaction history
            </Typography>
          }
        />

        <CardContent>
          <div className="scroll-container">
            <div className="scroll-content">
              <div className="table-container">
                <div className="table-wrapper">
                  <table className="transaction-table">
                    <thead>
                      <tr>
                        <th className="td-01">Merchant Name</th>
                        <th className="td-02">DateTime</th>
                        <th className="td-03">Amount</th>
                        <th className="td-04">Reference Number</th>
                        <th className="td-05">Msisdn</th>
                        <th className="td-06">Log Type</th>
                        <th className="td-08">Merchant ID</th>
                        <th className="td-09">Auth Code</th>
                        <th className="td-10">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index}>
                          <td className="td-01">{transaction.merchant_name}</td>
                          <td className="td-02">{transaction.tx_date_time}</td>
                          <td className="td-03">{transaction.amount}</td>
                          <td className="td-04">{transaction.rrn}</td>
                          <td className="td-05">{transaction.msisdn}</td>
                          <td className="td-06">{transaction.tx_log_type}</td>
                          <td className="td-08">{transaction.merchant_id}</td>
                          <td className="td-09">{transaction.auth_code}</td>
                          <td className="td-10">{transaction.result_code}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <div className="pagination">
          <Button variant="contained" color="primary" disabled={pageNumber === 1} onClick={() => this.goToPage(pageNumber - 1)} className="pagination-button">
            Previous (Page {pageNumber - 1})
          </Button>

          {pageNumbers.map(num => (
            <Button key={num} variant="contained" color={pageNumber === num ? 'secondary' : 'default'} onClick={() => this.goToPage(num)} className="pagination-button" style={{ backgroundColor: '#b01c24', margin: '0 5px', color: 'white' }}>
              {num}
            </Button>
          ))}

          <Button variant="contained" color="secondary" disabled={pageNumber === totalPages} onClick={() => this.goToPage(pageNumber + 1)} className="pagination-button" style={{ backgroundColor: '#b01c24' }}>
            Next (Page {pageNumber + 1})
          </Button>
        </div>
      </Card>
      // </div>
    );
  }
}

export default TransactionHistory;
