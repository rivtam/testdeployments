import React from 'react';
import axios from 'axios';
import moment from 'moment'
import "./TransactionSearch.css";
import "./TransactionHistory.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Card, CardHeader, CardContent, Typography, Button} from '@material-ui/core';
import { Height } from '@material-ui/icons';


class TransactionSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            pageNumber: 0,
            pageSize: 15,
            totalPages: 0,
            perPage: 3,
            name: '',
            amount: '',
            showDatePicker: false,
            fromDate: new Date(),
            toDate: new Date(),
            merchant_id: '',
            mobile_device_id: '',
            merchant_names_IDs: [],
            searchQuery: '',
            user: JSON.parse(localStorage.getItem('user')),
            selectedMerchantName: null,
            selectedMerchantID: null,
            url: 'https://efinance-services-stage.wizzitdigital.com/' // dont hardcore url here
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = event => {
        const query = event.target.value;
        this.setState({searchQuery: query, selectedMerchantName: null});
    }

    componentDidMount() {
        this.getMerchantNames();
    }

    getMerchantNames() {
        let bodyParams = {
            "pageNumber": this.state.pageNumber,
        };
        axios.post(`${this.state.url}api/v1/tx-history/merchants?pageNumber=1`, bodyParams, {
            headers: {
                'Accept': '*/*',
                Authorization: `Bearer ${this.state.user['access_token']}`
            },
        })
            .then(response => {
                const {rows} = response.data;
                let tempArray = new Array();
                for (let x = 0; x < rows.length; x++) {
                    const merchantName = rows[x].merchant_name;
                    if (!tempArray.includes(merchantName)) {
                        const merchantResults = {
                            merchant_id: rows[x].merchant_id,
                            merchant_name: rows[x].merchant_name
                        }
                        tempArray.push(merchantResults)
                    }
                }
                this.setState({merchant_names_IDs: tempArray})
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }


    handleNameSelect = merchant => {
        this.setState({
            searchQuery: '',
            showDatePicker: true,
            selectedMerchantID: merchant.merchant_id,
            selectedMerchantName: merchant.merchant_name
        });
    }

    getDate = e => moment(e, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ').format('YYYY/MM/DD HH:mm:ss')

    fetchData() {
        this.setState({
            transactions: []
        })
        const {pageNumber, pageSize} = this.state;
        const user = JSON.parse(localStorage.getItem('user'));
        axios.post(`${this.state.url}api/v1/tx-history?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
            merchant_id: this.state.selectedMerchantID,
            datetime_to: this.getDate(this.state.toDate),
            datetime_from: this.getDate(this.state.fromDate)
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user['access_token']}`
            },
        })
            .then(response => {
                const {rows, totalPages, row_count} = response.data;
                this.setState({transactions: rows, totalPages, name: '', pageSize: row_count});
            })
            .catch(error => {
                console.log('FAILED TO GET DATA:', error);
            });
    }

    goToPage = pageNumber => {
        this.setState({pageNumber}, () => {
            this.fetchData();

            if (pageNumber > 1) {
                const previousButton = document.getElementById("previousButton");
                previousButton.style.backgroundColor = "#b01c24";
            }
        });
    }
    handlePerPageChange = event => { // no used
        const perPage = parseInt(event.target.value);
        this.setState({perPage, pageNumber: 1}, () => {
            this.fetchData();
        });
    };


    handleNameChange = (e) => {
        const value = e.target.value;
        if (value === 'DateTime') {
            this.setState({name: value, showDatePicker: true, merchant_id: '', mobile_device_id: ''});
        } else {
            this.setState({name: value, showDatePicker: false});
        }
    }

    handleDatePickerSubmit = () => {
        this.setState({showDatePicker: false}, () => {
            this.fetchData();
        });
    }

    handleDatePickerCancel = () => {
        // Close the date picker modal without selecting dates
        this.setState({showDatePicker: false});
    }

    handleSubmit = (e) => { // no used
        e.preventDefault();
        this.fetchData()
    }


    render() {
        const {pageNumber, totalPages, perPage, pageSize} = this.state;
        const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1); // Create an array of page numbers
        const {searchQuery, merchant_names_IDs, selectedMerchantName} = this.state;
        const filteredMerchantNames = merchant_names_IDs.filter(merchant =>
            merchant.merchant_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return (
            <div>
                <Card className='search-card'>
                    <CardHeader
                        title={
                            <Typography variant="h5" align="center" className="header-title">
                                Transaction Search
                            </Typography>
                        }
                    />

                    <form>
                        <div className="form-group">
                            <div className="search-label-group">
                                <label htmlFor="name" className="search-label">Search by:</label>
                                <select
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleNameChange}
                                    className="select-input"
                                >
                                    <option value="">Select Name</option>
                                    <option value="Mobile_Name">Merchant Name</option>
                                    {/* <option value="Mobile-Device-ID">Mobile Device-ID </option> */}
                                    {/* <option value="Merchant-ID">Merchant-ID </option> */}
                                    {/* <option value="DateTime">DateTime</option> */}
                                </select>
                            </div>
                        </div>

                        {this.state.showDatePicker && (
                            <div className="modal">
                                <div className="modal-content">
                                    <div className="date-modal-header">
                                        <h3>Select From and To Dates</h3>
                                    </div>
                                    <div className="modal-body">
                                        <div className="date-picker-group">
                                            <label htmlFor="fromDate" className="label">From Date:</label>
                                            <DatePicker
                                                id="fromDate"
                                                selected={this.state.fromDate}
                                                onChange={(date) => this.setState({fromDate: date})}
                                                className="date-picker"
                                            />
                                        </div>
                                        <div className="date-picker-group">
                                            <label htmlFor="toDate" className="label">To Date:</label>
                                            <DatePicker
                                                id="toDate"
                                                selected={this.state.toDate}
                                                onChange={(date) => this.setState({toDate: date})}
                                                className="date-picker"
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={this.handleDatePickerSubmit} style={{
                                            backgroundColor: "#b01c24",
                                            color: "white",
                                            margin: "0 5px",
                                            width: "25%",
                                            Height:"45%",
                                              
                                        }}>
                                            Submit
                                        </button>
                                        <button onClick={this.handleDatePickerCancel}
                                                style={{backgroundColor: "#b01c24", color: "white", width: "25%"}}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}



                        <div className="form-group">
                            <div className="search-label-group">
                                <label htmlFor="amount" className="field-label">Search field:</label>
                                {this.state.name === "Mobile_Name" ? <>
                                        <div>
                                            <input 
                                                type="text"
                                                placeholder="Search..."
                                                value={searchQuery === "" ? selectedMerchantName : searchQuery}
                                                onChange={this.handleSearch}
                                                className="search-input"
                                               
                                            />
                                            {searchQuery && filteredMerchantNames.length > 0 && !selectedMerchantName && (
                                                <div className="search-dropdown">
                                                    <ul className="search-dropdown-list">
                                                        {filteredMerchantNames.map((merchant, index) => (
                                                            <li key={index} onClick={() => this.handleNameSelect(merchant)}>
                                                                {merchant.merchant_name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {selectedMerchantName && <p>Selected Merchant Name: {selectedMerchantName}</p>}
                                        </div>
                                    </> :
                                    <input
                                        type="text"
                                        id="amount"
                                        value={this.state.merchant_id !== '' ? this.state.merchant_id : this.state.mobile_device_id}
                                        onChange={(e) => {
                                            if (this.state.name === "Merchant-ID") {
                                                this.setState({mobile_device_id: '', merchant_id: e.target.value})
                                            } else if (this.state.name === "Mobile-Device-ID") {
                                                this.setState({merchant_id: '', mobile_device_id: e.target.value})
                                            }
                                        }
                                        }
                                        className="input-field"
                                    />
                                }
                            </div>
                        </div>

                        {/* <button type="submit" className="submit-search-button">Submit</button> */}
                    </form>


                    {this.state.transactions.length === 0 ? <div/> : <CardContent>
                    <div className="scroll-container">
                            <div className="scroll-content">
                        <table className="transaction-table">
                            <thead>
                            <tr>
                                <th className="td-01">Merchant Name</th>
                                <th className="td-02">DateTime</th>
                                <th className="td-03">Amount</th>
                                <th className="td-04">Reference Number</th>
                                <th className="td-05">Msisdn</th>
                                <th className="td-06">Log Type</th>
                                {/* <th className="td-07">Mobile-Device-ID</th> */}
                                <th className="td-08">Merchant ID</th>
                                <th className="td-09">Auth Code</th>
                                <th className="td-10">Result</th>

                            </tr>
                            </thead>
                            <tbody>
                            {this.state.transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td className="td-01">{transaction.merchant_name}</td>
                                    <td className="td-02">{transaction.tx_date_time}</td>
                                    <td className="td-03">{transaction.amount}</td>
                                    <td className="td-04">{transaction.rrn}</td>
                                    <td className="td-05">{transaction.msisdn}</td>
                                    <td className="td-06">{transaction.tx_log_type}</td>
                                    {/* <td className="td-07">{transaction.mobile_device_id}</td> */}
                                    <td className="td-08">{transaction.merchant_id}</td>
                                    <td className="td-09">{transaction.auth_code}</td>
                                    <td className="td-10">{transaction.result_code}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>


                        <div className="pagination">
                            <Button
                                id="previousButton" // Add this id attribute
                                variant="contained"
                                color="primary"
                                disabled={pageNumber === 1}
                                onClick={() => this.goToPage(pageNumber - 1)}
                                className="pagination-button"
                            >
                                Previous (Page {pageNumber - 1})

                            </Button>


                            {pageNumbers.map((num) => (
                                <Button
                                    key={num}
                                    variant="contained"
                                    color={pageNumber === num ? "secondary" : "default"}
                                    onClick={() => this.goToPage(num)}
                                    className="pagination-button"
                                    style={{
                                        backgroundColor: "#b01c24",
                                        margin: "0 5px",
                                        color: "white"
                                    }} // added margin for spacing
                                >
                                    {num}
                                </Button>
                            ))}

                            <Button
                                variant="contained"
                                color="secondary" // changed to "secondary" for red color
                                disabled={pageNumber === totalPages}
                                onClick={() => this.goToPage(pageNumber + 1)}
                                className="pagination-button"
                                style={{backgroundColor: "#b01c24"}} // added style for color customization
                            >
                                Next (Page {pageNumber + 1})
                            </Button>
                        </div>
                        </div>
                        </div>
                    </CardContent>
                    }
                </Card>
            </div>
        );
    }
}

export default TransactionSearch;
