import React from 'react';
import { Button } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

function Header() {
    return (
        <header>
            <div id="emerservice2" className="row">
                    <div className="col">
                        <h1 id="emerservice">24 HOUR EMERGENCY SERVICE</h1>
                    </div>
            </div>
            <div id="bglogocolor" className="row">
                <div className="col">
                    <img id="topmainlogo" className="img-fluid" src="/assets/img/aquaflowlogo-v1.jpg" />
                </div>
                <div className="col-md-6">
                    <h1 id="freeestimate">FREE ESTIMATES!</h1>
                    <h1 id="freeestimate">(407) 444-8888</h1>
                        <div id="freeestimate3">
                            <Button id="freeestimate2" color="info">Schedule Your Appointment</Button>{' '}
                            <Button id="freeestimate2" color="info"> Subscribe</Button>{' '}
                        </div>   
                </div>
            </div>
            <div id="bglogocolor" className="row">
            <div className="container">
                <div className="row">
                    <div id="socialMedia" className="col col-lg-6">
                            <SocialIcon id="socialicons" url="http://instagram.com/" />
                            <SocialIcon id="socialicons" url="https://www.facebook.com/pages/category/Plumbing-Service/Aquaflow-Plumbing-Drain-Cleaning-106340521082142/" />
                            <SocialIcon id="socialicons" url="http://twitter.com/" />
                            <SocialIcon id="socialicons" url="http://youtube.com/" />
                            <SocialIcon id="socialicons" url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242" />
                        <div id="socialbutton">
                            <h4>24 Reviews on Thumbtack with 4.9 Stars!</h4>
                            <h2>40 Years of Plumbing Experience!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}


export default Header;