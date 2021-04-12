import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';

function Emergency() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Emergencycontent />
            <Footer />
        </div>
    );
}

function Emergencycontent() {
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
                          <h1>Orlando 24 Hour Emergency Plumber</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/homeflood.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p className="font-weight-bold">At AquaFlow Plumbing, we don’t just offer 24 hour a day, 7 day per week emergency service in the Orlando Area - we deliver it.</p>
                            <p>Anytime you are having a plumbing emergency – Do not hesitate to call AquaFlow Plumbing. We respond to all emergencies, no matter what time! 2:00 a.m. Saturday night – No problem, we’re on our way. 4:00 a.m. Monday morning – we’re on our way.</p>
                            <p>We will never leave you stranded when you are having a plumbing emergency. Our operators are there to answer your calls 24 hours a day – So you don’t have to worry about leaving a message on some machine and wait to have your call returned the next day, when it’s too late.</p>
                            <p className="font-weight-bold">In an Orlando plumbing emergency, you’ll need to stop the flow of water quickly. To do this, you and each member of your family need to know the location of the shutoff valve for every fixture and appliance, as well as the main shutoff valve for the house, and how they operate.</p>
                            <p>What Sort Of Emergency Plumbing Repairs Can We Do?</p> 
                            <ul>
                              <li>Repair leaking or burst feed pipes</li>
                              <li>Fix a leak from a waste pipes</li>
                              <li>Fix faulty toilet flushing mechanisms</li>
                              <li>Repair leaking internal stop taps</li>
                              <li>Ensure leaking tanks or cylinders are safe</li>
                              <li>Unblock sinks, showers, baths and basins</li>
                              <li>Drain Cleaning</li>
                              <li>And More</li>
                            </ul>
                            <p className="font-weight-bold">Have a Plumbing problem that needs to be addressed immediately or need the services of a professional Orlando, FL Contractor you can count on? Contact AquaFlow Plumbing and Drain Cleaning today at 407-444-8888.</p> 
                            <h1 id="freeestimate"><button type="button" className="btn btn-info" data-toggle="modal" data-target="#scheduleModal"><i className="fa fa-envelope-o fa-lg" /> Schedule Your Appointment</button></h1> 
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

export default Emergency;