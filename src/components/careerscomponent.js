import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';

function Careers() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Careerscontent />
            <Footer />
        </div>
    );
}

function Careerscontent() {
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
                          <h1>Careers</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/plumber6402.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>We appreciate your interest in working for Micheal’s Plumbing based in Orlando, Florida. Michael’s Plumbing is locally owned and operated and has been meeting the plumbing needs of the Orlando community since 1990. Many members of our team have been with us for over a decade, and we are proud to operate as a tight-knit, service-oriented company.</p>
                            <p>At Michael’s Plumbing, we maintain high standards for our service and workmanship and are always looking for dedicated people to join our team. As an employer, Michael’s Plumbing rewards high performance and initiative and strives to provide our team with the best working environment possible.</p>
                            <p className="font-weight-bold">Benefits:</p>
                            <p>Here is a sample of the benefits of joining the team at Michael’s Plumbing:</p> 
                            <ul>
                              <li>Competitive, Incentive-Based Compensation Plan</li>
                              <li>Paid Holidays</li>
                              <li>Paid Time Off Plan including Vacation, Personal and Sick Days</li>
                              <li>Health and Dental Plans</li>
                              <li>Short Term Disability Insurance</li>
                              <li>Long Term Disability Insurance</li>
                              <li>Term Life Insurance</li>
                              <li>Supplemental Health Benefits</li>
                              <li>401(k) Retirement Plan</li>
                            </ul>
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

export default Careers;