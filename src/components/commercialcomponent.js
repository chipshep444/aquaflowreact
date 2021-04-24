import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Commercial() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Commercialcontent />
            <Footer />
        </div>
    );
}

function Commercialcontent() {
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
                            <h1>Orlando Commercial Plumbing</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/commercialplumbing.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>Need a repair or upgrade to your business? Not many plumbers can handle all the technical details of a commercial project. At AquaFlow Plumbing we are the Orlando Commercial Plumbing company you can trust to get the job done.</p>
                            <p>When you need a Commercial Plumbing Contractor in the Orlando Area, think of AquaFlow Plumbing.</p>
                            <p>We go the extra mile to provide an honest team of knowledgeable plumbers while offering competitive rates. We believe in doing the job right the first time, utilizing top quality industry standard parts to ensure that everything works properly. You can trust us to provide you with the service you deserve, satisfaction guaranteed!</p>
                            <p>The Commercial Division includes new construction, renovation, remodel, and design build. Past projects include schools, retail, hotels, churches, medical, retirement facilities, manufacturing and athletic facilities.</p>
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

export default Commercial;