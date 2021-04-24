import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import ScheduleModal from './modal/schedulecomponent';

function About() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Aboutcontent />
            <Footer />
        </div>
    );
}


function Aboutcontent() {
    return (
        <div>
  <div id="mainTextblock" className="row">
    <div className="container">
      <div className="row">
        <div id="bodycards" className="container">
          <div className="row">
            <div id="mainTextblock" className="card text-center">
              <div className="card-body">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="mcontent3" className="row">
    <div className="container">
      <div className="row">
        <div id="bodycards" className="container">
          <div className="row">
            <div className="card-deck">
              <div id="mcontent3b" className="card">
                <div className="card-body">
                <Link to="/"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/plumber640.jpg" width={450} alt="AquaFlow Plumbing" /></Link>
                  <br />
                  <br />
                  <p>AquaFlow Plumbing has been in operation for the last few years servicing the central Florida area in residential and commercial installations and repair. Our experience ranges from small repairs and installation in residential homes to large repairs and installations on commercial properties. We can clean and repair sewer lines and have the equipment for jet cleaning sewer lines up to 8″. We have video camera equipment for sewer drains, to check for any breaks and roots in the line. We can locate and repair slab and wall leaks and also have the electronic equipment to find leaks with our state of the art leak detector. We can Repipe homes and offices, repair and replace hot water heaters, laundry sinks, kitchen sinks, lav sinks and tubs and all types of faucets. We work on single story homes, apartments, condominiums and office buildings. We have a 24 hour emergency service and we always have at least one technician on call at all times. In most cases we can set up accounts with our corporate customers.</p>
                  <p>We also have available to us a full line of replacement products if you want to upgrade or update.</p>
                  <p>We have been doing plumbing for over 40 years!</p>
                  <p className="font-weight-bold">Have a Plumbing problem that needs to be addressed immediately or need the services of a professional Orlando, FL Contractor you can count on? Contact AquaFlow Plumbing and Drain Cleaning today at 407-444-8888.</p>
                  <div id="freeestimate3">
                      <ScheduleModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default About;