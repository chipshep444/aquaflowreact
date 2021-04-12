import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';

function Garbagedisposal() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Garbagedisposalcontent />
            <Footer />
        </div>
    );
}

function Garbagedisposalcontent() {
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
                            <h1>Orlando Garbage Disposal Repair &amp; Installation</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/garbagedisposal2.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>Garbage Disposal Giving You Trouble? Call the Experts at AquaFlow Plumbing!</p>
                            <p>If you are experiencing a problem with your disposal, there are a few things you can do before calling for repair. First of all check and see if the power has tripped. There is a reset button on the underside, should be located under the sink. By resetting allot of times this takes care of the problem. Both your dishwasher and garbage disposal share a connection, so if you are having problems with the plumbing related to the disposal, it is probably going to also affect your dishwasher as well.</p>
                            <p>Sometimes the blades will become jammed, often taking a large stick, like a broom handle can dislodge the blades. Another thing is there is something stuck in the disposal. Once you make sure power is turned off, you can stick your hand inside the drain and see if a spoon or something else is stuck in there.</p>
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

export default Garbagedisposal;