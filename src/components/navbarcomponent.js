import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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
                    <Nav id="mainnavbar" className="mx-auto">
                        <Nav.Link><Link to="/" id="mainnavbar">{homeicon}HOME</Link></Nav.Link>
                        <NavDropdown title="COMPANY" id="collasible-nav-dropdown" id="mainnavbar">
                        <NavDropdown.Item><Link to="/about" id="dropdowntextcolor">About</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/finance" id="dropdowntextcolor">Pricing & Financing</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/warranty" id="dropdowntextcolor">Warranties & Policies</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/careers" id="dropdowntextcolor">Careers</Link></NavDropdown.Item>
                        <NavDropdown.Item href="https://www.cs360studio.biz/blog" id="dropdowntextcolor">Blog</NavDropdown.Item>   
                      </NavDropdown>
                      <NavDropdown title="SERVICES" id="collasible-nav-dropdown" id="mainnavbar">
                        <NavDropdown.Item><Link to="/emergency" id="dropdowntextcolor">24 Hour Emergency Plumbing</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/residential" id="dropdowntextcolor">Residential Plumber</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/commercial" id="dropdowntextcolor">Commercial Plumber</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/sewer" id="dropdowntextcolor">Sewer Repair & Snaking</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to href="/waterheater" id="dropdowntextcolor">Water Heater Installation & Repair</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/drain" id="dropdowntextcolor">Drain Cleaning</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/burstpipe" id="dropdowntextcolor">Burst Pipe Repair</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/garbagedisposal" id="dropdowntextcolor">Garbage Disposal Repair and Installation</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/leakdetection" id="dropdowntextcolor">Leak Detection</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/homewater" id="dropdowntextcolor">Home Water Filtration</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/slab" id="dropdowntextcolor">Slab Leak Repair</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/repipe" id="dropdowntextcolor">Repiping</Link></NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="LOCATIONS SERVED" id="collasible-nav-dropdown" id="mainnavbar">
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Metro West</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Winter Garden</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Ocoee</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Altamonte Springs</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Clermont</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Sanford</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Windermere</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Winter Park</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Kissimmeee</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Lake Mary</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/locations" id="dropdowntextcolor">Winter Springs</Link></NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link><Link to="/specials" id="mainnavbar">SPECIALS</Link></Nav.Link>
                      <NavDropdown title="REVIEWS" id="collasible-nav-dropdown" id="mainnavbar">
                        <NavDropdown.Item><Link to="/Reviews" id="dropdowntextcolor">Testimonials</Link></NavDropdown.Item>
                        <NavDropdown.Item  id="dropdowntextcolor" href="https://www.facebook.com/pages/category/Plumbing-Service/Aquaflow-Plumbing-Drain-Cleaning-106340521082142/">Facebook</NavDropdown.Item>
                        <NavDropdown.Item id="dropdowntextcolor" href="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412011391633072132">Thumbtack</NavDropdown.Item>
                        <NavDropdown.Item id="dropdowntextcolor" href="https://nextdoor.com/pages/aquaflow-plumbing-apopka-fl/">Nextdoor</NavDropdown.Item>
                        <NavDropdown.Item id="dropdowntextcolor" href="https://www.google.com/maps/place/Aquaflow+Plumbing/@28.7095502,-81.5034693,15z/data=!4m12!1m6!3m5!1s0x0:0x994e208f3da9bc81!2sAquaflow+Plumbing!8m2!3d28.7096255!4d-81.5035551!3m4!1s0x0:0x994e208f3da9bc81!8m2!3d28.7096255!4d-81.5035551">Google Maps</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link><Link to="/contact" id="mainnavbar">{phoneicon}CONTACT</Link></Nav.Link>
                      <NavDropdown title="HELP" id="collasible-nav-dropdown" id="mainnavbar">
                        <NavDropdown.Item><Link to="/faq" id="dropdowntextcolor">Faq</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/helpfultips" id="dropdowntextcolor">Helpful Tips</Link></NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
  

  export default MainNavBar;