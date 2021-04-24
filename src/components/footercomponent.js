import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
  
        <div id="footerbar" className="row">
          <div className="container">
            <div className="row">
              <div id="finance" className="col text-center">
                <h1>FINANCING AVAILABLE &nbsp; &nbsp; <Link to="/finance"><button type="button" className="btn btn-primary">Click Here For Financing</button></Link></h1>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-start">
                <div className="row justify-content-center">
                  <table id="areasweserve">
                    <tbody><tr>
                        <th style={{textAlign: 'center'}} colSpan={2}>Areas We Serve</th>
                      </tr>
                      <tr>
                        <td>Metro West</td>
                        <td>Windermere</td>
                      </tr>
                      <tr>
                        <td>Winter Garden</td>
                        <td>Casselberry</td>
                      </tr>
                      <tr>
                        <td>Ocoee</td>
                        <td>Winter Park</td>
                      </tr>
                      <tr>
                        <td>Altamonte Springs</td>
                        <td>Kissimmee</td>
                      </tr>
                      <tr>
                        <td>Clermont</td>
                        <td>Lake Mary</td>
                      </tr>
                      <tr>
                        <td>Sanford</td>
                        <td>Winter Springs</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="col align-self-start">
                <div className="row justify-content-center">
                  <table id="areasweserve">
                    <tbody><tr>
                        <th style={{textAlign: 'center'}} colSpan={2}>Social Media</th>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <div className="col text-center">
                                <SocialIcon
                                    id="socialicons"
                                    url="http://instagram.com/"
                                />
                                <SocialIcon
                                    id="socialicons"
                                    url="https://www.facebook.com/pages/category/Plumbing-Service/Aquaflow-Plumbing-Drain-Cleaning-106340521082142/"
                                />
                                <SocialIcon
                                    id="socialicons"
                                    url="http://twitter.com/"
                                />
                                <SocialIcon
                                    id="socialicons"
                                    url="http://youtube.com/"
                                />
                                <SocialIcon
                                    id="socialicons"
                                    url="https://www.thumbtack.com/fl/apopka/plumbing/aquaflow-plumbing/service/381348999605878794?project_pk=412117755054858242"
                                />
                          </div>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="col align-self-start">
                <div className="row justify-content-center">
                  <table id="areasweserve">
                    <tbody><tr>
                        <th style={{textAlign: 'center'}} colSpan={2}>We Accept</th>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <div id="weaccept" className="col text-center">
                            <img src="images/creditcardimage.jpg" alt="..." />
                          </div>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="col align-self-start">
                <div className="row justify-content-center">
                  <table id="areasweserve">
                    <tbody><tr>
                        <th style={{textAlign: 'center'}} colSpan={2}>Contact Us</th>
                      </tr>
                      <tr>
                        <td colSpan={2}>AquaFlow Plumbing</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>4444 Jesus Ct.</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>Apopka, Florida 32712</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>Phone: (407) 444-8888</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>Find Us On Google</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" id="contactus3">
                <h6 id="contactus"><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/terms">Terms of Use</Link> | <Link to="/contact">Contact</Link> | <Link to="/privacypolicy">Privacy Policy</Link></h6>
                <h6 id="contactus2">Copyright <i className="fa fa-copyright" aria-hidden="true" /> 2021 AquaFlow Plumbing. All Rights Reserved.</h6>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Footer;