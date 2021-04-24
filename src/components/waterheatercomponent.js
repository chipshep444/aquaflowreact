import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Waterheater() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Waterheatercontent />
            <Footer />
        </div>
    );
}

function Waterheatercontent() {
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
                            <h1>Orlando Water Heater Installation Repair</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/waterheater3.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>If you own a home, you have a hot water heater. You probably don’t spend a lot of time thinking about your hot water heater, until one day you turn on the shower and the hot water doesn’t work. That’s when AquaFlow Plumbing can help.</p>
                            <p>Whether your hot water heater is traditional, tankless, or even solar, our professional plumbers and plumbing technicians are reliable, experienced and on call 24 hours a day to respond to your plumbing emergency. We can repair your current hot water heater or install a new one in Orlando, FL. Don’t fret, We will get your water hot and steamy in no time at all.</p>
                            <p>Aquaflow Plumbing does repair and replace water heaters. We replace out elements and thermostats, we also install a full range of gas water heaters and tankless hot water heaters including piping new gas lines to the heaters where needed. After we install the water heater we dispose of the old one. Call our office for more details. </p>
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

export default Waterheater;