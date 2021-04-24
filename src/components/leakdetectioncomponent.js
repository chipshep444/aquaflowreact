import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Leakdetection() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Leakdetectioncomponent />
            <Footer />
        </div>
    );
}

function Leakdetectioncomponent() {
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
                            <h1>Orlando Leak Detection</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/leakdetection.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>When you need Leak Detection or Leak Repair in Orlando, FL think of AquaFlow Plumbing. If you suspect a problem with a leaking pipe in your home, you can count on the experience, technology and professionalism of AquaFlow Plumbing to help in every plumbing situation you may have. From advanced leak detection to slab leak repairs, we can be there fast with a level of service that is second-to-none.</p>
                            <p className="font-weight-bold">Leak Detection and Locationg</p> 
                            <p>With the latest technology to assess if there is a leak, even underground and in inaccessible locations. If you suspect a leak, it is important to have it professionally diagnosed as inaction may lead to more serious, and possibly even structural damage to your property.</p>
                            <p className="font-weight-bold">Leak Repairs</p> 
                            <p>Once diagnosed, Aquaflow Plumbing can help you with a range of possible solutions and a full up-front price for repairs, so you can make an informed choice as to which course of action to take. We are fully licensed and insured professionals, and our workmanship is backed up by a written guarantee.</p>
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

export default Leakdetection;