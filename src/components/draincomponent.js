import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Drain() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Draincontent />
            <Footer />
        </div>
    );
}

function Draincontent() {
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
                            <h1>Orlando Drain Cleaning</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/drain2.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>When drains and sewer lines back up it's very frustrating. There are different reasons for clogs. Mainline sewer its roots, grease, tampons, in smaller lines like lavatory sinks, tubs &amp; showers its usually hair and soap buildup. In kitchen sinks, mostly it is food from the disposal and grease, these are the most common reasons for backups in a house today.</p>
                            <p>At AquaFlow Plumbing we have years of experience in unclogging &amp; cleaning sewer and drain lines. We use state of the art equipment. General drain machines and or a hydro jetter.</p>
                            <p>A clogged drain can be a real hassle, but Aquaflow Plumbing has the solution. First, our professionals in the Orlando Area drain cleaning contractors will open the line and review the problem at hand. Then we will use our company process to thoroughly clean any clogs that are there.</p>
                            <p>From problems as simple as when your two year old has flushed his favorite toy down the toilet to a more difficult sewer backup – we’ve got the equipment and the trained technicians on the job to get things flowing for you quickly and efficiently. Bathroom sink, bathtub, kitchen sink, main sewer, etc. we can take care of all of it for you in a jiffy.</p>
                            <p>Many of the countless pipes beneath our Orlando homes and streets are very old. Though very durable–typically made of cast iron or terra cotta–these structures are not invulnerable to disruption caused by exterior sources. Roots commonly cause clogs which require professional sewer line cleaning from a professional Orlando sewer line cleaning company, like AquaFlow Plumbing.</p>
                            <p>If you have a  repeating problem or the cable cannot get through this is when cameras come into play, however, if you just moved in or finished a remodel sometimes its good to check out the line condition. Here are some pictures of some common problems below.</p>
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

export default Drain;