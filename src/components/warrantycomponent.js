import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';

function Warranty() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Warrantycontent />
            <Footer />
        </div>
    );
}

function Warrantycontent() {
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
                          <h1>Warranties &amp; Policies</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent75" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent75b" className="card">
                          <div className="card-body">
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/plumber640.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>One of the easiest ways to prevent a problem is by preventing it in the first place. The same is true of your plumbing. Without regular maintenance, you are more likely to experience plumbing problems, costly repairs or premature replacement.</p>
                            <p>Annual maintenance plans are also much more affordable than many homeowners believe- often less than the cost of a single ticket to a movie or trip to the coffeehouse. And you get all the benefits of an on-call plumber too!</p>
                            <p>Take a look at some of the other benefits of our Michael’s Plumbing Service Partner Plan, and contact us for more information today</p>
                            <p><b>Priority Service.</b> As a Service Partner, you are our number one priority and jump to the head of the line when you call. Your issue will be scheduled ahead of all others- this applies to routine and emergency calls!</p>
                            <p><b>No Emergency Service Fees.</b> If you are in need of an emergency service, no matter what time of day or night you call, you will not pay a premium fee. You will receive the same quality of service as always but pay only from the standard pricing menu!</p>
                            <p><b>15% Discount.</b> You will receive a 15% discount off the bottom line for our plumbing services for as long as our Service Partner relationship remains effective.</p>
                            <p><b>On-Going Safety Inspections.</b> Your peace-of-mind is our goal. We will assess your home’s plumbing systems to ensure they are in a safe operating condition. You’ll receive a detailed report of our findings, and we’ll explain any concerns. We’ll alert you to potential emergencies before they become disruptive problems. Any minor adjustments will be done FREE. We’ll even call to schedule your appointments, so you won’t have to worry about it.</p>
                            <p><b>A Trusted Professional on Your Home Services Team.</b> Your technician is not only trained to care for your equipment; he’s trained to care for your home. You’ll take comfort in knowing our technicians are drug-tested, and background checked. First rate providers are all we will allow in your home!</p>
                            <p><b>100% Satisfaction Guarantee.</b> We promise your complete satisfaction—GUARANTEED! If you are not fully satisfied, let us know, and we’ll make it right or you don’t pay!</p>
                            <p><b>Transferable.</b> Your service partner agreement can either be transferred to your new home or to the buyer of the home you are selling. Your choice!</p>
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

export default Warranty;