import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';

function Helpfultips() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Helpfultipscontent />
            <Footer />
        </div>
    );
}

function Helpfultipscontent() {
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
                          <h1>Helpful Plumbing Tips</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent20" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent20b" className="card">
                          <div className="card-body">
                            <img className="img-fluid" src="images/pipes.png" alt="Pipe" />
                          </div>
                        </div>
                        <div id="mcontent20b" className="card">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Pipes</h5>
                            <p>Many drain cleaners that are sold at supermarkets are very corrosive and can cause injury to plumbers and homeowners when they open up pipes or sink traps for inspection and repairs. Using a non-corrosive drain cleaner is a much better and safer choice. We will be happy to advise you on which products are best for your system.</p>
                            <p>Leaking pipes can damage floors, walls and property. The longer the problem goes unnoticed, the more damage it can do. When you take the time to perform a quick inspection every now and then, you could save a lot of time and money by detecting a leak early. If you notice rust and/or lime deposits on your pipes, this could indicate the beginning of a leak. If you notice this, contact Herrell Plumbing to get the issue dealt with now before it turns into a huge and costly problem.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent21" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent21b" className="card">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Garbage Disposals</h5>
                            <p>Cold water should be used every time you use the garbage disposal. When hot water is used, fats and grease can dissolve and then accumulate in the drain line. Cold water ensures that the fats and grease congeal and harden before they are flushed through the system.</p>
                            <p>Clam shells, oyster shells, cornhusks and other high-fiber food waste should not be put into the garbage disposal. Also, you should NEVER put glass, plastic or metal, non-food materials through a garbage disposal.</p>
                            <p>Garbage disposals are, for the most part, self-cleaning. You can, however, grind up small bones and eggshells to help clean it if deposits are forming. Citric acid (oranges, lemons, limes, etc.) is another way you can clean the garbage disposal and keep it from stinking. Grinding a small amount of ice can also clean out deposits and get rid of unpleasant odors.</p>
                          </div>
                        </div>
                        <div id="mcontent21b" className="card">
                          <div id="garbage" className="card-body">
                            <img className="img-fluid" src="images/garbagedisposal.jpg" alt="Garbage Disposal" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent20" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent20b" className="card">
                          <div className="card-body">
                            <img className="img-fluid" src="images/waterheater2.jpg" alt="Water Heater" />
                          </div>
                        </div>
                        <div id="mcontent20b" className="card">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Water Heaters</h5>
                            <p>According to the Gas Appliance Manufacturers Association, it only takes 1/2 second for 150ºF water to scald someone, 1 second in 140ºF water, and 4 minutes in 120ºF water. Though most modern water heaters are set at 120ºF, many older models are set to much higher temperatures. Call Herrell Plumbing to ensure the safety of your family with a water heater inspection and adjustment.</p>
                            <p>Water heaters with a defective temperature and pressure relief valve are time bombs that plumbers have seen go off all too often. Our technicians can inspect your water heater's gauges and valves to ensure that it is working properly.</p>
                            <p>If your water heater is leaking, it usually means that the bottom of the tank has rusted. The only good repair for this problem is to replace the water tank.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent21" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent21b" className="card">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Faucets</h5>
                            <p>Faucets should be treated gently with normal hand pressure to prevent issues. Turning faucets on and off forcefully can lead to a dripping faucet. this usually indicates that your faucet needs a new washer.</p>
                            <p>Chrome faucets can be cleaned with vinegar, rubbing alcohol or glass cleaner and a soft cloth.</p>
                            <p>Use a mild detergent for your lacquered brass faucets and brass cream for exposed brass faucets.</p>
                            <p>If the lacquer coating on your brass faucets gets scratched, you can prevent your faucet from tarnishing with clear nail polish.</p>
                            <p>For tarnished brass and copper faucets, use a lemon rind to bring it back to its former glory.</p>
                            <p>To clean older steel faucets and fittings, you can use a mild scouring powder.</p>
                          </div>
                        </div>
                        <div id="mcontent21b" className="card">
                          <div className="card-body">
                            <img className="img-fluid" src="images/faucet.png" alt="Faucet" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent20" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent20b" className="card">
                          <div id="toilet" className="card-body">
                            <img className="img-fluid" src="images/toilet.png" alt="Toilet" />
                          </div>
                        </div>
                        <div id="mcontent20b" className="card">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Toilets</h5>
                            <p>Toilet bowl deodorants that hang in your toilet are prone to slip out and get lodged in your plumbing system. We advise you not to use them. Also, some chlorine tablets can corrode your toilet tank components and cause leaks. Contact the professionals at Herrell Plumbing for advice on which toilet cleaners work best and extend the life of your toilet.</p>
                            <p>Running toilets can add almost $100 more per year to your water bill. If jiggling the handle doesn't stop it, then your tank components may need to be replaced.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent21" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent21b" className="card">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Clogged Drains</h5>
                            <p>Keep an eye on what you put down your drains, especially in the kitchen sink. As for bathroom drains, oil residue from soaps and shampoos and hair can contribute to clogs.</p>
                          </div>
                        </div>
                        <div id="mcontent21b" className="card">
                          <div id="drain" className="card-body">
                            <img className="img-fluid" src="images/drain.jpg" alt="Drain" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mcontent20" className="row">
              <div className="container">
                <div className="row">
                  <div id="bodycards" className="container">
                    <div className="row">
                      <div className="card-deck">
                        <div id="mcontent20b" className="card">
                          <div id="solder" className="card-body">
                            <img className="img-fluid" src="images/soldering.png" alt="Soldering" />
                          </div>
                        </div>
                        <div id="mcontent20b" className="card">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Soldering</h5>
                            <p>Do-it-yourself soldering jobs are a routine cause of leaks. Although soldering is not a difficult task, it can cause leaks when it isn't performed by a plumbing professional. Keep an eye on what you put down your drains, especially in the kitchen sink. As for bathroom drains, oil residue from soaps and shampoos and hair can contribute to clogs.</p>
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

export default Helpfultips;