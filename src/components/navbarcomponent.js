import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const homeicon = <FontAwesomeIcon icon={faHome} />
const phoneicon = <FontAwesomeIcon icon={faPhone} />

  const MainNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar id="mainnavbar" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home">
              <img
                src="/images/droplogo30pix.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                      <Nav.Link href="/">{homeicon}HOME</Nav.Link>
                      <NavDropdown title="COMPANY" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                        <NavDropdown.Item href="/finance">Pricing & Financing</NavDropdown.Item>
                        <NavDropdown.Item href="/warranty">Warranties & Policies</NavDropdown.Item>
                        <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Customer Feedback</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.cs360studio.biz/blog">Blog</NavDropdown.Item>   
                      </NavDropdown>
                      <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/emergency">24 Hour Emergency Plumbing</NavDropdown.Item>
                        <NavDropdown.Item href="/residential">Residential Plumber</NavDropdown.Item>
                        <NavDropdown.Item href="/commercial">Commercial Plumber</NavDropdown.Item>
                        <NavDropdown.Item href="/sewer">Sewer Repair & Snaking</NavDropdown.Item>
                        <NavDropdown.Item href="/waterheater">Water Heater Installation & Repair</NavDropdown.Item>
                        <NavDropdown.Item href="/drain">Drain Cleaning</NavDropdown.Item>
                        <NavDropdown.Item href="/burstpipe">Burst Pipe Repair</NavDropdown.Item>
                        <NavDropdown.Item href="/garbagedisposal">Garbage Disposal Repair and Installation</NavDropdown.Item>
                        <NavDropdown.Item href="/leakdetection">Leak Detection</NavDropdown.Item>
                        <NavDropdown.Item href="/homewater">Home Water Filtration</NavDropdown.Item>
                        <NavDropdown.Item href="/slab">Slab Leak Repair</NavDropdown.Item>
                        <NavDropdown.Item href="/repipe">Repiping</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="LOCATIONS SERVED" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/locations">Metro West</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Winter Garden</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Ocoee</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Altamonte Springs</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Clermont</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Sanford</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Windermere</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Winter Park</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Kissimmeee</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Lake Mary</NavDropdown.Item>
                        <NavDropdown.Item href="/locations">Winter Springs</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/specials">SPECIALS</Nav.Link>
                      <NavDropdown title="REVIEWS" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/Reviews">Testimonials</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.facebook.com/pages/category/Plumbing-Service/Aquaflow-Plumbing-Drain-Cleaning-106340521082142/">Facebook</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412011391633072132">Thumbtack</NavDropdown.Item>
                        <NavDropdown.Item href="https://nextdoor.com/pages/aquaflow-plumbing-apopka-fl/">Nextdoor</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.google.com/maps/place/Aquaflow+Plumbing/@28.7095502,-81.5034693,15z/data=!4m12!1m6!3m5!1s0x0:0x994e208f3da9bc81!2sAquaflow+Plumbing!8m2!3d28.7096255!4d-81.5035551!3m4!1s0x0:0x994e208f3da9bc81!8m2!3d28.7096255!4d-81.5035551">Google Maps</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/contact">{phoneicon}CONTACT</Nav.Link>
                      <NavDropdown title="HELP" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/faq">Faq</NavDropdown.Item>
                        <NavDropdown.Item href="/helpfultips">Helpful Tips</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
  

  export default MainNavBar;