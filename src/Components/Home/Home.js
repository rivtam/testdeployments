import "./Home.css";
import React from "react";
import {FaSearch} from 'react-icons/fa';
import Logout from "../../Logout/Logout";
import DatePicker from 'react-datepicker';
import TransactionSearch from '../TransactionHistory/TransactionSearch'
import TransactionHistory from "../TransactionHistory/TransactionHistory";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            selectedMenu: 'Transaction History',
            searchTerm: '',
            showDatePicker: false,
            fromDate: new Date(),
            toDate: new Date(),
            isModalOpen: false,
        };
    }


    openModal = () => {
        this.setState({isModalOpen: true});
    };

    closeModal = () => {
        this.setState({isModalOpen: false});
    };

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Process the form submission logic here
        console.log('Submitted value:', this.state.inputValue);
        // Close the modal
        this.closeModal();
    };

    handleSearch = () => {
        // Perform search logic here using this.state.searchTerm
        console.log("Performing search:", this.state.searchTerm);
    };


    handleOptionSelect = (event) => {
        const selectedOption = event.target.value;
        this.setState({selectedOption, searchTerm: ''});
    };

    handleSearchInput = (event) => {
        this.setState({searchTerm: event.target.value});
    };

    render() {
        const {selectedOption, searchTerm} = this.state;
        const {isModalOpen, inputValue} = this.state;
        return (
            <div>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content custom-modal-content">
                            <div className="modal-card">
                                <div className="card-body custom-card-body">
                                    <form onSubmit={this.handleSubmit} className="form" style={{width: "500px"}}>
                                        <div className="form-group">
                                            <div className="label-group">
                                                <label htmlFor="selectOption" className="label">Search by:</label>
                                                <select
                                                    id="selectOption"
                                                    value={this.state.selectedOption}
                                                    onChange={this.handleOptionChange}
                                                    className="select-input"
                                                >
                                                    <option value="">Select...</option>
                                                    <option value="Mobile-Device-ID">Device ID</option>
                                                    <option value="Merchant-ID">Merchant ID</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="label-group">
                                                <label htmlFor="merchantId" className="label">Search Field:</label>
                                                <input
                                                    type="text"
                                                    id="merchantId"
                                                    value={this.state.merchantId}
                                                    onChange={this.handleMerchantIdChange}
                                                    className="input-field"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="date-group">
                                                <label htmlFor="fromDate" className="label">Date/Time From:</label>
                                                <div className="date-input-container">
                                                    <DatePicker
                                                        id="fromDate"
                                                        selected={this.state.fromDate}
                                                        onChange={this.handleFromDateChange}
                                                        dateFormat="yyyy-MM-dd"
                                                        className="input-field"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="date-group">
                                                <label htmlFor="toDate" className="label">Date/Time To:</label>
                                                <div className="date-input-container">
                                                    <DatePicker
                                                        id="toDate"
                                                        selected={this.state.toDate}
                                                        onChange={this.handleToDateChange}
                                                        dateFormat="yyyy-MM-dd"
                                                        className="input-field"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="submit-button">Fetch Transactions</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="dashboard-container">
                    <Logout/>
                    <div className="main-content">
                        <header className="fixed-header">

                            <div className="button-container">
                                <button onClick={this.openModal} className="submit-home-search-button">
                                    <FaSearch className="search-home-icon"/>
                                    Search
                                </button>
                            </div>
                        </header>

                        <main className="content-wrapper">
                            {this.state.selectedMenu === 'Transaction History' ? (
                                <TransactionHistory searchTerm={selectedOption === 'Option 1' ? searchTerm : ''}/>
                            ) : (
                                <TransactionSearch searchTerm={selectedOption === 'Option 2' ? searchTerm : ''}/>
                            )}
                        </main>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;
