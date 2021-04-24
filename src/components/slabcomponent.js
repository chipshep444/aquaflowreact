import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Slab() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Slabcontent />
            <Footer />
        </div>
    );
}

function Slabcontent() {
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
                            <h1>Orlando Slab Leak Repair</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/slableak.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>The slab is the concrete beneath your home that makes up the foundation. So many water pipes run through the foundation that it is possible for any one of them to receive damage due to ground movement, shifts, or natural corrosion. Cracks or holes in underlying pipes cause water to leak under the foundation, this is called a slab leak, and it can cause major water damage to your home and go from a small leak to a hazardous position to the structure of your home.</p>
                            <p className="font-weight-bold">Significant increase in your water or electricity bill:</p>
                            <p>if you notice that your water bill increases drastically, it is most likely due to a water leak.</p>
                            <p className="font-weight-bold">Visible wet or damp stains on carpet or flooring:</p>
                            <p>a slab leak can sometimes reach the flooring, creating noticeable spots or stains.</p>
                            <p className="font-weight-bold">Reduced water pressure:</p>
                            <p>if you notice a decrease in water pressure, it may be caused by a slab leak.</p>
                            <p className="font-weight-bold">Settling of the foundation:</p>
                            <p>when an actual shifting of the home’s foundation is felt, a slab leak may have occurred.</p>
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

export default Slab;