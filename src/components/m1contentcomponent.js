import React from 'react';
import ScheduleModal from './modal/schedulecomponent';
import EmailUsModal from './modal/emailuscomponent';

function M1content() {
    return (
        <div id="mcontent1" className="row">
        <div className="container">
            <div className="row">
            <div id="bodycards" className="container">
                <div className="row">
                <div className="card-deck">
                    <div className="card text-white bg-danger" style={{width: '24rem'}}>
                    <div className="card-body">
                        <h2 className="card-title text-center">1</h2>
                        <h3 className="card-title text-center">Tell us your problem</h3>
                        <p className="text-center">Call us or complete out service form online</p>
                        <div id="freeestimate3">
                            <ScheduleModal />
                        </div>
                        <a href="tel:#"><h1 id="freeestimate"><button type="button" className="btn btn-info"><i className="fa fa-phone-square fa-lg" /> Call Us</button></h1></a>
                    </div>
                    </div>
                    <div className="card text-white bg-warning" style={{width: '24rem'}}>
                    <div className="card-body">
                        <h2 className="card-title text-center">2</h2>
                        <h3 className="card-title text-center">Confirm Appointment</h3>
                        <p className="text-center">We work around your schedule and let you pick the most convenient time</p>
                        <a href="tel:#"><h1 id="freeestimate"><button type="button" className="btn btn-info"><i className="fa fa-phone-square fa-lg" />Call Us</button></h1></a>
                        <div id="freeestimate3">
                            <EmailUsModal />
                        </div>
                    </div>
                    </div>
                    <div className="card text-white bg-success" style={{width: '24rem'}}>
                    <div className="card-body">
                        <h2 className="card-title text-center">3</h2>
                        <h3 className="card-title text-center">Problem Solved</h3>
                        <p className="text-center">Enjoy flate rate pricing and long term peace of mind!</p>
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

export default M1content;