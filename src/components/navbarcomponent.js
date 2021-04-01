import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  const MainNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar id="mainnavbar" className="navbar navbar-expand-md navbar-dark sticky-top">
          <NavbarBrand href="/"><img src="/assets/img/droplogo30pix.jpg" height="30" width="30" alt="Water Drop" /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">HOME</NavLink>
              </NavItem>
              <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  COMPANY
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    About
                  </DropdownItem>
                  <DropdownItem>
                    Pricing & Financing
                  </DropdownItem>
                  <DropdownItem>
                    Warranties & Policies
                  </DropdownItem>
                  <DropdownItem>
                    Careers
                  </DropdownItem>
                  <DropdownItem>
                    Customer Feedback
                  </DropdownItem>
                  <DropdownItem>
                  <a href="https://www.cs360studio.biz/blog">Blog</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    24 Hour Emergency Plumbing
                  </DropdownItem>
                  <DropdownItem>
                    Residential Plumber
                  </DropdownItem>
                  <DropdownItem>
                    Sewer Repair & Snaking
                  </DropdownItem>
                  <DropdownItem>
                    Water Heater Installation & Repair
                  </DropdownItem>
                  <DropdownItem>
                    Drain Cleaning
                  </DropdownItem>
                  <DropdownItem>
                    Burst Pipe Repair
                  </DropdownItem>
                  <DropdownItem>
                    Garbage Disposal Repair and Installation
                  </DropdownItem>
                  <DropdownItem>
                    Leak Detection
                  </DropdownItem>
                  <DropdownItem>
                    Home Water Filtration
                  </DropdownItem>
                  <DropdownItem>
                    Slab Leak Repair
                  </DropdownItem>
                  <DropdownItem>
                    Repiping
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    LOCATIONS SERVED
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Metro West
                  </DropdownItem>
                  <DropdownItem>
                    Ocoee
                  </DropdownItem>
                  <DropdownItem>
                    Altamonte Springs
                  </DropdownItem>
                  <DropdownItem>
                    Clermont
                  </DropdownItem>
                  <DropdownItem>
                    Sanford
                  </DropdownItem>
                  <DropdownItem>
                    Windermere
                  </DropdownItem>
                  <DropdownItem>
                    Casselberry
                  </DropdownItem>
                  <DropdownItem>
                    Winter Park
                  </DropdownItem>
                  <DropdownItem>
                    Kissimmeee
                  </DropdownItem>
                  <DropdownItem>
                    Lake Mary
                  </DropdownItem>
                  <DropdownItem>
                    Winter Springs
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">SPECIALS</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    REVIEWS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Testimonials
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://www.facebook.com/pages/category/Plumbing-Service/Aquaflow-Plumbing-Drain-Cleaning-106340521082142/">Facebook</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412011391633072132">Thumbtack</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://nextdoor.com/pages/aquaflow-plumbing-apopka-fl/">Nextdoor</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://www.google.com/maps/place/Aquaflow+Plumbing/@28.7095502,-81.5034693,15z/data=!4m12!1m6!3m5!1s0x0:0x994e208f3da9bc81!2sAquaflow+Plumbing!8m2!3d28.7096255!4d-81.5035551!3m4!1s0x0:0x994e208f3da9bc81!8m2!3d28.7096255!4d-81.5035551">Google Maps</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">CONTACT</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    HELP
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Service Request
                  </DropdownItem>
                  <DropdownItem>
                    Ask A Pro
                  </DropdownItem>
                  <DropdownItem>
                    Faq
                  </DropdownItem>
                  <DropdownItem>
                   Helpful Tips
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
         
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default MainNavBar;