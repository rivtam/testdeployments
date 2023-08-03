import React from 'react';
import TableComponent from '../Components/Table';
import Home from '../Components/Home/Home';
import { useKeycloak } from '@react-keycloak/web';
import WelcomePage from './Welcome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Root';
import ErrorPage from './Error';
import HomePage from './Home';

import OverviewPage from './Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Reports';
import Team from './Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdvancedSearchComponent from './AdvancedSearch';
import Sidebar from '../Components/SideBar/Sidebar';

const AuthRouter = () => {
  const { keycloak } = useKeycloak();
  if (keycloak.authenticated === true) {
    return <RouterProvider router={router} />;
  } else {
    return <WelcomePage />;
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <OverviewPage />,
      },
      {
        path: '/overview',
        element: <OverviewPage />,
      },
      {
        path: 'search',
        element: <AdvancedSearchComponent />,
      },
    ],
  },
]);

export default AuthRouter;
