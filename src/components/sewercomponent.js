import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';

function Sewer() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Sewercontent />
            <Footer />
        </div>
    );
}

function Sewercontent() {
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
                            <h1>Orlando Sewer Repair</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/sewerrepair.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>AquaFlow Plumbing understands the severity of a sewer failing. Our knowledgeable staff is prepared with up to date sewer repair certification to get the job done right as quickly and efficiently the first time. We have fully stocked trucks and inventory all the parts needed to repair your sewer system, that means less time waiting for the right parts to arrive!</p>
                            <p>We also guarantee our work. If you are not satisfied for any reason, we will do our very best to leave you feeling happy and content. Free estimates are available after a thorough inspection so you can have peace of mind knowing the exact cost of the repair beforehand.</p>
                            <p>We promise to treat every home as if it was our own. Our customers’ satisfaction is our top priority, so you can expect plumbing work to be well done.</p>
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

export default Sewer;