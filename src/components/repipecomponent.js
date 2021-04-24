import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Repipe() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Repipecontent />
            <Footer />
        </div>
    );
}

function Repipecontent() {
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
                            <h1>Repiping in Orlando, FL</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/repipe.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>Is your home more than a decade old? Do you need to replace leaking, damaged, or outdated plumbing lines? Call AquaFlow Plumbing now at 407-444-8888 to learn more about our repiping services in the Orlando, FL area. We are the repiping specialists for your home or office in the Orlando, FL area.</p>
                            <p>At AquaFlow Plumbing, we only use the best materials when it comes to your safety.</p>
                            <p className="font-weight-bold">What are the Benefits of Timely Pipe Replacement?</p>
                            <p>Repiping your home can alleviate many of your plumbing issues and bring you the peace of mind you need.</p>
                            <ul>
                                <li>Healthier and cleaner water</li>
                                <li>Improved water pressure</li>
                                <li>Increase in your home’s value</li>
                                <li>Decreased risk of further plumbing damage</li>
                            </ul>
                            <p className="font-weight-bold">When is Repiping Necessary?</p>
                            <p>Repiping is often needed in older homes. If your home is over 10 years old, you may need to consider a water line repipe.</p>
                            <p>Some of the more common signs that repiping is necessary:</p>
                            <ul>
                                <li>Unusual color or taste to your water</li>
                                <li>Decreased water pressure/li&gt;
                                </li><li>Slab leak problems</li>
                                <li>Leaking pipes due to corrosion or other damage</li>
                            </ul>
                            <p>If you notice these or other issues with your water line or water supply, it’s recommended to call a professional for an inspection and accurate diagnosis. A licensed plumber will be able to let you know if a full repipe is recommended.</p>
                            <p className="font-weight-bold">Do You Still Have Galvanized Steel Pipes?</p>
                            <p>Older homes are more likely to feature galvanized steel piping. These materials were once thought to be the most reliable; however, it has been discovered that they are prone to corrode and fail over time.</p>
                            <p>If your home is still using galvanized steel pipes, we urge you to replace them ASAP. Corroded lines can lead to sudden pipe bursts, damaging clogs, and other major issues that will affect the health and safety of your water supply as well as the structure of your home.</p>
                            <p className="font-weight-bold">What About Polybutylene Pipes?</p>
                            <p>Another type of piping that needs to be replaced quickly is polybutylene. This material, also once highly regarded, reveals a propensity for premature failure. Polybutylene is likely to disintegrate or decompose and lead to significant wear over time, causing the pipe to burst.</p>
                            <p>Avoid significant property damage and consult your trusted plumber for the steps you need to take to ensure your plumbing lines are safe for long-term use.</p>
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

export default Repipe;