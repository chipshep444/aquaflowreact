import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

function Locations() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Locationscontent />
            <Footer />
        </div>
    );
}

function Locationscontent() {
    return (
        <div>
          
          <div>
              <div id="mainTextblock" className="row">
                <div className="container">
                  <div className="row">
                    <div id="bodycards" className="container">
                      <div className="row">
                        <div id="mainTextblock" className="card text-center">
                          <div className="card-body">
                            <h1>Locations Served</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row row-content">
                  <div id="servicearea" className="col-sm-6">
                    <h3>Service Area</h3>
                    <p>Have a Plumbing problem that needs to be addressed immediately or need the services of a professional Orlando, FL Contractor you can count on? Contact AquaFlow Plumbing today at 407-444-8888. We are available 24 hours a day, 7 days a week for all your plumbing needs.</p>
                  </div>
                  <div id="servicearea" className="col-sm-6">
                    <div className="card">
                      <h3 className="card-header bg-primary text-white">Our Service Areas</h3>
                      <div className="card-body">
                        <dl className="row">
                          <dt className="col-6">Metro West</dt>
                          <dt className="col-6">Windermere</dt>
                          <dt className="col-6">Winter Garden</dt>
                          <dt className="col-6">Casselberry</dt>
                          <dt className="col-6">Ocoee</dt>
                          <dt className="col-6">Winter Park</dt>
                          <dt className="col-6">Altamonte Springs</dt>
                          <dt className="col-6">Kissimmee</dt>
                          <dt className="col-6">Clermont</dt>
                          <dt className="col-6">Lake Mary</dt>
                          <dt className="col-6">Sanford</dt>
                          <dt className="col-6">Winter Springs</dt>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div id="servicearea" className="col-sm-6">
                    <ul className="no-bullets">
                      <li><h5><b>AquaFlow Plumbing</b></h5></li>
                      <li>1722 Fairhaven Ct</li>
                      <li>Apopka, FL 32712</li>
                      <li>Telephone: 407-444-8888</li>
                      <li><h1><button type="button" className="btn btn-info" data-toggle="modal" data-target="#scheduleModal"><i className="fa fa-envelope-o fa-lg" /> Schedule Your Appointment</button></h1> </li>
                    </ul>
                  </div>
                  <div id="servicearea" className="col-sm-6">
                    <ul className="no-bullets">
                      <li><h5><b>Operation Hours:</b></h5></li>
                      <li>Tuesday : 8:00 am - 5:00 pm</li>
                      <li>Wednesday : 8:00 am - 5:00 pm</li>
                      <li>Thursday : 8:00 am - 5:00 pm</li>
                      <li>Friday : 8:00 am - 5:00 pm</li>
                      <li>Saturday : 8:00 am - 12:00 pm</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <div id="socialMedia" className="col text-left">
                        <SocialIcon
                            id="socialicons"
                            url="http://instagram.com/"
                        />
                        <SocialIcon
                            id="socialicons"
                            url="https://www.facebook.com/pages/category/Plumbing-Service/Aquaflow-Plumbing-Drain-Cleaning-106340521082142/"
                        />
                        <SocialIcon
                            id="socialicons"
                            url="http://twitter.com/"
                        />
                        <SocialIcon
                            id="socialicons"
                            url="http://youtube.com/"
                        />
                        <SocialIcon
                            id="socialicons"
                            url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"
                        />
                      <br />
                      <br />
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158610.60917527316!2d-81.47270641024816!3d28.54475645896962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1612379575183!5m2!1sen!2sus" width={370} height={370} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    );
}

export default Locations;