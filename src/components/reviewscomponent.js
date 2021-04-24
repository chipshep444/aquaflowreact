import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { SocialIcon } from 'react-social-icons';

function Reviews() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Reviewscontent />
            <Footer />
        </div>
    );
}

function Reviewscontent() {
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
                          <h1>Reviews</h1>
                          <br />
                          <h5 style={{fontSize: '40px', color: 'white'}} className="card-title font-weight-bold">Here Are Some Words From Our Happy Customers!</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Steven M - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Installation or Replacement</p>
                            <p>“Currently working with Aquaflow and the work is great!! Having the entire project home re-piped and nothing but wonderful news! Brian, you guys are a Gem! Looking to finish off soon. Knowledgeable team for sure!”</p>
                            <p>Jun 4, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Nick N. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Water Heater Installation or Replacement</p>
                            <p>“Water Heater Installation or Replacement. Very helpful. Even came when I was having an issue and didn’t charge me. Even though it wasn’t his fault. Great guy and company.”</p>
                            <p>Nov 21, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Freddie C. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Installation or Replacement</p>
                            <p>"Re-piped My entire house. Three bathrooms Kitchen and all outside water pipes. Arrived on time and Brian and his team knocked it out in one day. Cleaned up and used the best quality Pex pipes. I will recommend to all of my clients and friends. Brian is an honest and fair priced Plumber!!!”</p>
                            <p>Nov 14, 2020 Verified</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">James N. - ★★★★★> <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Shower and Bathtub Repair</p>
                            <p>“Brian was able to assess the issue, provided a fair estimate and fit me into his schedule within a few days! He showed up on time(early) and after inspecting the problem got right to work... My shower handle needed to be replaced,.. the Moen cartridge had also corroded. Great guy, knowledgeable and friendly. Wouldn’t hesitate to contact him for future plumbing problems.”</p>
                            <p>Oct 7, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Ashley Z. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Shower and Bathtub Repair</p>
                            <p>“5 stars! 10/10! Highly recommend! Brian was great! Extremely knowledgeable and courteous. It was a pleasure having him in our home. He installed a kitchen faucet and cleaned out the water line for us. We have already scheduled a time for him to return and install a new toilet. Pricing was very reasonable and fair. He will be our plumber from now on!”</p>
                            <p>Sep 19, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Merzak B. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Installation or Replacement</p>
                            <p>“Bryan was AMAZING! Best prices, highest quality, and the education he gives every step of the way in unmatched. Most people try to upset on almost every job they do but he took the time to educate and only fix the things that needed to be done. We had our kitchen sink replaced and he was just amazing, super responsive to messages, and an overall great guy. Highly recommend!”</p>
                            <p>July 22, 2020 Verified</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Kristina B. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Installation or Replacement</p>
                            <p>“Currently working with Aquaflow and the work is great!! Having the entire project home re-piped and nothing but wonderful news! Brian, you guys are a Gem! Looking to finish off soon. Knowledgeable team for sure!”</p>
                            <p>July 15, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Courtney G. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Repair</p>
                            <p>"Discovered my shut off valve was leaking and not closing all the way. Brian was extremely responsive and knocked out the job quickly. He was able to answer a few other plumbing questions I had while here as well. Highly recommend!"</p>
                            <p>July 11, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Paulette I. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Sink or Faucet Installation or Replacement</p>
                            <p>“Brian was Professional, punctual, professional, very responsive and did an excellent job. I would highly recommend him for any plumbing need you may have!”</p>
                            <p>June 8, 2020 Verified</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Alexis D. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Repair</p>
                            <p>"Brian did a great job and he was very professional and very helpful. Very reasonably priced and very knowledgeable. Will definitely hire again.”</p>
                            <p>June 6, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Lee S. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Repair</p>
                            <p>“Amazing experience. Will certainly use again for any plumbing needs. Fast, very reasonable pricing, repairs made on the spot. Thank you!”</p>
                            <p>June 5, 2020 Verified</p>
                          </div>
                        </div>
                        <div id="mcontent11" className="card" style={{width: '28rem'}}>
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Jayne M. - ★★★★★ <SocialIcon className="float-right" id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"/></h5>
                            <p>Plumbing Pipe Repair</p>
                            <p>“Excellent. Solved the issue and fixed it at a reasonable price. Will definitely be calling him again for my next issue.”</p>
                            <p>May 23, 2020 Verified</p>
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

export default Reviews;