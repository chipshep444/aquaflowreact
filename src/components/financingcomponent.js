import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import ScheduleModal from './modal/schedulecomponent';

function Finance() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Financecontent />
            <Footer />
        </div>
    );
}


function Financecontent() {
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
                          <h1>Financing - Orlando Repiping Financing</h1>
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
                            <h1 className="text-center font-weight-bold">Need to Repipe but don’t have the cash?</h1>
                            <p className="text-center font-weight-bold">Get 12 Months Same as CASH on repiping! Watch the video below for details:</p>
                            <a href="index.html"><img className="image-fluid mx-auto d-block" src="images/plumber2.png" width={400} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>We can repipe most homes in one day. And we will match or beat by 10%, any bona fide written repipe quote wherever possible ( from an active Florida licensed plumbing contractor). Our repipes start as low as $1,475.00 with a Lifetime warranty. Call us today for more details.</p>
                            <p className="font-weight-bold">Call AquaFlow Plumbing and Drain Cleaning today at 407-444-8888</p>
                              <div id="freeestimate3">
                              < ScheduleModal />
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

export default Finance;