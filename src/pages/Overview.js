import React from 'react';
import TableComponent from '../Components/Table';
import SearchComponent from '../Components/Search';
import Home from '../Components/Home/Home';
import { useKeycloak } from '@react-keycloak/web';

const Overview = () => {
  return (
    <div>
      <SearchComponent />
      <TableComponent />
    </div>
  );
};

export default Overview;
