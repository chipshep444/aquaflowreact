import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import { Link } from 'react-router-dom';
import ScheduleModal from './modal/schedulecomponent';

function Contact() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Contactcontent />
            <Footer />
        </div>
    );
}

function Contactcontent() {
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
                                <h1>Contact Us</h1>
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
                                <h5 className="card-title font-weight-bold">Orlando Plumber and Repipe Specialists</h5>
                                <p className="font-weight-bold">We are available 24 hours a day, 7 days a week for all your plumbing needs. Call us anytime at 407-444-8888 for immediate service.</p>
                                <br />
                                <div className="row">
                                    <div className="col-6">
                                    <ul className="no-bullets">
                                        <li><h5><b>AquaFlow Plumbing</b></h5></li>
                                        <li>1722 Fairhaven Ct</li>
                                        <li>Apopka, FL 32712</li>
                                        <li>Telephone: 407-444-8888</li>
                                        <li><p><ScheduleModal /></p></li>
                                        <li><p><button type="button" className="btn btn-info" data-toggle="modal" data-target="#feedbackModal">Customer Feedback</button></p></li>
                                        <li><p><a href="careers.html"><button type="button" className="btn btn-info">Careers</button></a></p></li>
                                    </ul>
                                    <ul className="no-bullets">
                                        <li><h5><b>Operation Hours:</b></h5></li>
                                        <li>Tuesday : 8:00 am - 5:00 pm</li>
                                        <li>Wednesday : 8:00 am - 5:00 pm</li>
                                        <li>Thursday : 8:00 am - 5:00 pm</li>
                                        <li>Friday : 8:00 am - 5:00 pm</li>
                                        <li>Saturday : 8:00 am - 12:00 pm</li>
                                    </ul>
                                    </div>
                                    <div className="col-6">
                                    <img src="/images/plumber.png" className="float-right" width="340px" alt="AquaFlow Plumbing" />
                                    </div>
                                </div>
                                <br />
                                <div id="socialMedia" className="col text-left">
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                                    <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/pages/category/Plumbing-Service/Aquaflow-Plumbing-Drain-Cleaning-106340521082142/"><i className="fa fa-facebook" /></a>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                                    <a className="btn btn-social-icon btn-google" href="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"><i className="fa fa-thumb-tack" /></a>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13997.337682647509!2d-81.5034693!3d28.7095502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x994e208f3da9bc81!2sAquaflow%20Plumbing!5e0!3m2!1sen!2sus!4v1611874134537!5m2!1sen!2sus" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
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

export default Contact;