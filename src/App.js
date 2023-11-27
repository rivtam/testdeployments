import * as React from 'react';
import authServer from './Keycloak.js';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { ReactKeycloakProvider } from '@react-keycloak/web';
// import {Routes, Route, BrowserRouter,} from "react-router-dom";
// import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './Pages/Root.js';
import ErrorPage from './Pages/Error.js';
import HomePage from './Pages/Home.js';

import OverviewPage from './Pages/Overview.js';
import WelcomePage from './Pages/Welcome.js';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Pages/Reports.js';
import Team from './Pages/Team.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Components/SideBar/Sidebar';
import AdvancedSearchComponent from './Pages/AdvancedSearch.js';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Overview from './pages/Overview';
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
// import Team from './pages/Team';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     id: 'root',
//     // loader: tokenLoader,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: 'home', element: <HomePage /> },
//       { path: '/overview', element: <Overview /> },
//       { path: '/reports', element: <Reports /> },
//       { path: '/reports/reports1', element: <ReportsOne /> },
//       { path: '/reports/reports2', element: <ReportsTwo /> },
//       { path: '/reports/reports3', element: <ReportsThree /> },
//       { path: '/team', element: <Team /> },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <div>
//       <ReactKeycloakProvider authClient={authServer}>
//         <RouterProvider router={router} />,
//       </ReactKeycloakProvider>
//     </div>
//   );
// }

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GroceryDetail from './Pages/Groceries/GroceryDetail.jsx';

import Root from './Pages/Root.js';
import './App.css';
import AuthRouter from './Pages/AuthRouter.js';
import Todo from './Components/Todo';
// import { useKeycloak } from '@react-keycloak/web';

// function App() {

import PrivateRoute from './helpers/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Sidebar />,
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/rivtam/testdeployments',
        element: <HomePage />,
      },
      {
        path: '/testdeployments',
        element: <HomePage />,
      },
      {
        path: '/rivtam/',
        element: <HomePage />,
      },
      {
        path: 'groceries/:id',
        element: <GroceryDetail />,
      },
      // {
      //   path: '/overview',
      //   element: (
      //     <PrivateRoute>
      //       <OverviewPage />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'search',
      //   element: (
      //     <PrivateRoute>
      //       <AdvancedSearchComponent />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: '*',
    // element: <Sidebar />,
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/rivtam/testdeployments',
        element: <HomePage />,
      },
      {
        path: '/testdeployments',
        element: <HomePage />,
      },
      {
        path: '/rivtam/',
        element: <HomePage />,
      },
      {
        path: 'groceries/:id',
        element: <GroceryDetail />,
      },
      // {
      //   path: '/overview',
      //   element: (
      //     <PrivateRoute>
      //       <OverviewPage />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'search',
      //   element: (
      //     <PrivateRoute>
      //       <AdvancedSearchComponent />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
// {
//   /* {keycloak.authenticated === true ? <RouterProvider router={router} /> : <WelcomePage />} */
// }
// {
//   /* <WelcomePage /> */
// }
// {
//   /* <RouterProvider router={router} /> */
// }
function App() {
  // const { keycloak } = useKeycloak();
  return (
    <div className="appDiv">
      <ReactKeycloakProvider authClient={authServer}>
        <RouterProvider router={router} />

        {/* <AuthRouter /> */}
      </ReactKeycloakProvider>
    </div>
  );
}
// return (

//       <RouterProvider router={router} />

// <Router>
//   <Sidebar />
//   <Routes>
//     <Route path="/" element={<Overview />}>
//       <Route path="messages" element={<Reports />} />
//       <Route path="tasks" element={<Reports />} />
//     </Route>
//     <Route path="about" element={<Team />} />
//   </Routes>
/* <Routes>
        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/team" exact component={Team} />
      </Routes> */
// </Router>
//   )

// }

export default App;
