import { useLocation } from 'react-router-dom';

import React from 'react';
import TableComponent from '../../Components/TableDetailed';
import SearchComponent from '../../Components/Search';
import ProfilePage from '../../Components/Profile';

const Overview = () => {
  // {
  //    name: 'mayonnaise',
  //    price: 1700,
  //    size: '750',
  //    sizeUnits: 'g',
  //    quantity: 1,
  //  },

  const location = useLocation();

  const tableH = ['No.', 'Product', 'Size', 'Price', 'Quantity', 'Discount', 'TOTAL'];

  console.log('location.state', location.state);
  return (
    <div>
      <ProfilePage />
      <SearchComponent />
      <TableComponent tableH={tableH} tableR={location.state} />
    </div>
  );
};

export default Overview;
