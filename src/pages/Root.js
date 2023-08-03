import React from 'react';
import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';

import { SidebarData } from '../Components/SideBar/SidebarData';
// import SubMenu from '../Components/SideBar/SubMenu';
// import { IconContext } from 'react-icons/lib';

function RootLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3">
              <span className="ms-1 fs-4 d-none d-sm-inline">Brand</span>
            </a>
            <hr className="text-secondary d-none d-sm-block" />
            <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
              <li class="nav-item">
                <a href="#" class="nav-link text-white fs-5 my-1 py-2 py-sm-0" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-white fs-5 my-1 py-2 py-sm-0" aria-current="page">
                  <i className="bi bi-table"></i>
                  <span className="ms-3 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-white fs-5 my-1 py-2 py-sm-0" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-3 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-white fs-5 my-1 py-2 py-sm-0" aria-current="page">
                  <i className="bi bi-grid"></i>
                  <span className="ms-3 d-none d-sm-inline">Producs</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-white fs-5 my-1 py-2 py-sm-0" aria-current="page">
                  <i className="bi bi-people"></i>
                  <span className="ms-3 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown open">
            <a class="text-decoration-none text-white dropdown-toggle p3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bi bi-person-circle"></i> <span className="ms-2 d-none d-sm-inline"> User</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">
                <span className=" d-sm-block">1</span>
                <span className="ms-2 d-none d-sm-block">Settings</span>
              </a>
              <a class="dropdown-item" href="#">
                <span className=" d-none d-sm-block">2</span>
                <span className="ms-2 d-none d-sm-block">Profile</span>
              </a>
              <a class="dropdown-item" href="#">
                <span className=" d-none d-sm-block">3</span>
                <span className="ms-2 d-none d-sm-block">Action</span>
              </a>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
      {/* <MainNavigation /> */}
      {/* <header className="fixed-header">
        <div className="button-container">
          <button onClick={() => {}} className="submit-home-search-button"> */}
      {/* <FaSearch className="search-home-icon" /> */}
      {/* Search
          </button>
        </div>
      </header> */}

      {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
      {/* <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <Outlet /> */}
    </div>
  );
}

export default RootLayout;
