import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Outlet } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const USER = styled.span`
  color: white;
  margin-right: 12px;
  font-size: 1rem;
`;
const SPAN = styled.span`
  color: white;
  margin-left: 10px;
`;

const Nav = styled.div`
  background-image: linear-gradient(to bottom, #b01c24, #5d1717);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background-image: linear-gradient(to bottom, #b01c24, #5d1717);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = props => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const { keycloak, initialized } = useKeycloak();

  console.log('!!keycloak.authenticated', !!keycloak.authenticated);
  console.log('!keycloak.authenticated', !keycloak.authenticated);

  const isLoggedIn = keycloak.authenticated === true;

  return (
    <>
      {isLoggedIn && (
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <img src="./Wizzit-Logo-White-1-768x179.png" className="rounded-circle" height="40" alt="" loading="lazy" />

            {/* <div className="hidden xl:flex items-center space-x-5">
            <div className="hover:text-gray-200"> */}
            {!keycloak.authenticated && (
              <NavIcon to="#">
                <FaIcons.FaSignInAlt onClick={showSidebar} /> <SPAN>Login</SPAN>
              </NavIcon>
            )}
            {!!keycloak.authenticated && (
              <NavIcon onClick={() => keycloak.logout().then(e => (window.location.href = '/'))}>
                <USER>Logout ({localStorage.getItem('names')})</USER>
                <FaIcons.FaSignOutAlt onClick={showSidebar} />
                {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="40" alt="" loading="lazy" /> */}
              </NavIcon>
            )}
            {/* </div>
          </div> */}
            {/* <div className="hidden xl:flex items-center space-x-5">
            <div className="hover:text-gray-200">
              {!keycloak.authenticated && (
                <button type="button" className="text-blue-800" onClick={() => keycloak.login()}>
                  Login
                </button>
              )}

              {!!keycloak.authenticated && (
                <button type="button" className="text-blue-800" onClick={() => keycloak.logout()}>
                  Logout ({keycloak.tokenParsed.preferred_username})
                </button>
              )}
            </div>
          </div> */}
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      )}
      {/* <div className="hidden xl:flex items-center space-x-5">
        <div className="hover:text-gray-200">
          {!keycloak.authenticated && (
            <button type="button" className="text-blue-800" onClick={() => keycloak.login()}>
              Login
            </button>
          )}

          {!!keycloak.authenticated && (
            <button type="button" className="text-blue-800" onClick={() => keycloak.logout()}>
              Logout ({keycloak.tokenParsed.preferred_username})
            </button>
          )}
        </div>
      </div> */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
