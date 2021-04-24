import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Residential() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Residentialcontent />
            <Footer />
        </div>
    );
}

function Residentialcontent() {
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
                            <h1>Orlando Residential Plumber</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/residentialplumbing.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p className="font-weight-bold">If you are in need of residential plumbing in Orlando, FL then you have come to the right place. AquaFlow Plumbing has been serving satisfied homeowners for almost a decades now, and they can do the same for you.</p>
                            <p>Whether you need drain cleaning, a sink installation or a tankless water heater installed, the residential plumbing team at Aquaflow Plumbing can help.</p>
                            <p>All of our residential plumbers are knowledgeable, professional and reliable. We provide free estimates for every project and we offer guarantees on all of our work.</p>
                            <ul>
                                <li>On-time and Quick Response – when you have a busy schedule you need a residential plumber that can get to you quickly and arrive on-time.</li>
                                <li>Guaranteed Services – you can be confident that your residential plumbing work has been done properly – with a written guarantee backed by a business that has been serving your area for over 20 years.</li>
                                <li>Up-front, Fair Pricing – we provide fair, comprehensive quotes before the work begins so you are never surprised with unforeseen ‘extra’ costs.</li>
                                <li>Friendly and Professional Service – you want plumbers that are experienced, clean-cut, and that keep your residence and business tidy.</li>
                                <li>24 HR Emergency Response – emergency plumbing situations don’t wait for business hours, which is why you can rely on our rapid response emergency service 24 hours a day 7 days a week.</li>
                                <li>Free Estimates – we are happy to provide free estimates on-site for your convenience – and in most cases we can have a technician complete the work the same day you call us.</li>
                            </ul>
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


        </div>

    );
}

export default Residential;