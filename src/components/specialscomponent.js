import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Specials() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Specialscontent />
            <Footer />
        </div>
    );
}

function Specialscontent() {
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
                        <h1>AquaFlow Plumbing Specials</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="mcontent85" className="row">
            <div className="container">
              <br />
              <h1 className="text-center font-weight-bold">Coupons</h1>
              <div className="row">
                <div id="bodycards" className="container">
                  <div className="row">
                    <div className="card-deck">
                      <div id="mcontent11b" className="card" style={{width: '28rem'}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">$25 Off Drain Cleaning</h5>
                          <p>* Present at time of service. Cannot be combined with other offers or discounts. Some restrictions apply. Expires 12/31/2021.</p>
                          <p>Discount Code: 25DC21</p>
                          <p><button onclick="window.print()" type="button" className="btn btn-primary">Print this Promotion</button></p>
                          <div>
                            <ScheduleModal />
                          </div>
                        </div>
                      </div>
                      <div id="mcontent11b" className="card" style={{width: '28rem'}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">$25 Off Any Plumbing Service Call</h5>
                          <p>* Present at time of service. Cannot be combined with other offers or discounts. Some restrictions apply. Expires 12/31/2021.</p>
                          <p>Discount Code: 25PSC21</p>
                          <p><button onclick="window.print()" type="button" className="btn btn-primary">Print this Promotion</button></p>
                          <div>
                            <ScheduleModal />
                          </div>
                        </div>
                      </div>
                      <div id="mcontent11b" className="card" style={{width: '28rem'}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">$100 Off Complete Home Repiping</h5>
                          <p>* Present at time of service. Cannot be combined with other offers or discounts. Some restrictions apply. Expires 12/31/2021.</p>
                          <p>Discount Code: 25CHR21</p>
                          <p><button onclick="window.print()" type="button" className="btn btn-primary">Print this Promotion</button></p>
                          <div>
                            <ScheduleModal />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="card-deck">
                      <div id="mcontent11b" className="card" style={{width: '28rem'}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">$50 Off Installation of Water Heater</h5>
                          <p>* Present at time of service. Cannot be combined with other offers or discounts. Some restrictions apply. Expires 12/31/2021.</p>
                          <p>Discount Code: 50IWH21</p>
                          <p><button onclick="window.print()" type="button" className="btn btn-primary">Print this Promotion</button></p>
                          <div>
                            <ScheduleModal />
                          </div>
                        </div>
                      </div>
                      <div id="mcontent11b" className="card" style={{width: '28rem'}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">5% Off Sewer Cleaning</h5>
                          <p>* Present at time of service. Cannot be combined with other offers or discounts. Some restrictions apply. Expires 12/31/2021.</p>
                          <p>Discount Code: 5SC21</p>
                          <p><button onclick="window.print()" type="button" className="btn btn-primary">Print this Promotion</button></p>
                          <div>
                            <ScheduleModal />
                          </div>
                        </div>
                      </div>
                      <div id="mcontent11b" className="card" style={{width: '28rem'}}>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">$25 Off Leak Detection</h5>
                          <p>* Present at time of service. Cannot be combined with other offers or discounts. Some restrictions apply. Expires 12/31/2021.</p>
                          <p>Discount Code: 25LD21</p>
                          <p><button onclick="window.print()" type="button" className="btn btn-primary">Print this Promotion</button></p>
                          <div>
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
          <div id="mcontent3" className="row">
            <div className="container">
              <div className="row">
                <div className="col">
                  <br />
                  <div>
                    <p className="text-center font-weight-bold">Have a plumbing problem that needs to be addressed immediately? Call AquaFlow Plumbing today at 407-444-8888</p>
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

    );
}

export default Specials;