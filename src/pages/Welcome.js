import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarItem, MDBNavbarToggler, MDBNavbarLink, MDBContainer, MDBIcon, MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';

import { Navigate } from 'react-router';

import { useKeycloak } from '@react-keycloak/web';

import './Welcome.css';
const WelcomePage = () => {
  const [showBasic, setShowBasic] = useState(false);
  const { keycloak } = useKeycloak();

  return (
    // <header>
    //   <MDBNavbar expand='lg' light bgColor='white'>
    //     <MDBContainer fluid>
    //       <MDBNavbarToggler
    //         aria-controls='navbarExample01'
    //         aria-expanded='false'
    //         aria-label='Toggle navigation'
    //       >
    //         <MDBIcon fas icon='bars' />
    //       </MDBNavbarToggler>
    //       <MDBCollapse show={showBasic}>
    //         <MDBNavbarNav right className='mb-2 mb-lg-0'>
    //           <MDBNavbarItem active>
    //             <MDBNavbarLink aria-current='page' href='#'>
    //               Home
    //             </MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href='#'>Features</MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
    //           </MDBNavbarItem>
    //           <MDBNavbarItem>
    //             <MDBNavbarLink href='#'>About</MDBNavbarLink>
    //           </MDBNavbarItem>
    //         </MDBNavbarNav>
    //       </MDBCollapse>
    //     </MDBContainer>
    //   </MDBNavbar>

    <div id="intro-example" className="p-5 text-center bg-image bg" style={{ backgroundImage: "url('./welcome-background.jpg')" }}>
      {/* // "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}> */}
      <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <img src="./Wizzit-Logo-White-1-768x179.png" className="img-fluid shadow-2-strong" alt="" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <img width="3750" height="874" src="https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1-166x39.png" class="attachment-full size-full wp-image-630" alt="" loading="lazy" srcset="https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1.png 3750w, https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1-300x70.png 300w, https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1-1024x239.png 1024w, https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1-768x179.png 768w, https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1-1536x358.png 1536w, https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1-2048x477.png 2048w, https://wizzit.com/wp-content/uploads/2023/05/cropped-Wizzit-Logo-White-1-166x39.png 166w" sizes="(max-width: 3750px) 100vw, 3750px">				</a> */}
            <h1 className="mb-3 welcome-txt2">Welcome To Wizzit Support Portal</h1>
            <h5 className="mb-4 welcome-txt">We Are Payments Pioneers</h5>
            <MDBBtn color="danger" className="m-2 btn-warning welcomeBtn" tag="a" outline size="lg" rel="nofollow" target="_blank" href="#" onClick={() => keycloak.login()}>
              Login
            </MDBBtn>
            <MDBBtn color="danger" rippleColor="dangers" className="m-2 welcomeBtn" tag="a" outline size="lg" target="_blank" href="https://wizzit.com/contact-us/">
              Contact US
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
    // </header>
  );
};

export default WelcomePage;
