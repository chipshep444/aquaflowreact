import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import './bg.css';
import ScheduleModal from './modal/schedulecomponent';

function Homewater() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Homewatercontent />
            <Footer />
        </div>
    );
}

function Homewatercontent() {
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
                            <h1>Orlando Home Water Filtration Plumber</h1>
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
                            <a href="index.html"><img id="aboutUspic" className="image-fluid mx-auto d-block" src="images/cleanwater.jpg" width={450} alt="AquaFlow Plumbing" /></a>
                            <br />
                            <br />
                            <p>City tap water in Orlando is perfectly clean and acceptable for use in the home. It meets a number of requirements for the personal safety and good health of anyone who drinks it, including the removal of contaminants and purification to kill off harmful bacteria. Many cities also require that fluoride be added to the water to help maintain good strong teeth, as fluoride in small doses strengthens the enamel.</p>
                            <p>The methods used by water treatment plants ensure that tap water coming into the home is safe to drink. However, it can be better.</p>
                            <p>Despite being purified and treated at water treatment plants, tap water does sometimes contain harmful protozoa, single cell creatures, that are resistant to chlorine and cause gastrointestinal problems.</p>
                            <p>Using Orlando Home Water Filtration at home provide the homeowner with cheap, clean water, so the homeowner doesn’t have to purchase bottled water for drinking purposes. It’s also better for the environment as it reduces the amount of plastic to either be recycled or that is tossed into a landfill.</p>
                            <p className="font-weight-bold">Iron Filter</p>
                            <p>Water filtration systems using Iron filters are the most popular filters used in residential homes using municipal or well water. The Iron filter effectively removes iron, manganese, and hydrogen sulfide. It is highly recommended for removing toxins that might find their way into your household’s water system as it travels from the water plant. Iron Filters are especially vital for homes using well water systems.</p>
                            <p className="font-weight-bold">Carbon Filter</p>
                            <p>Activated carbon filters are positively charged therefore attracting negative ions in the water. Carbon filters effectively remove thousands of chemicals that are found in water. The higher concentration of carbon and the lower the water pressure the more effective the filtration of nasty chemicals that could be present in your household water. The more carbon the stronger the attraction and the larger surface area. The lower the water pressure means water runs more slowly, thus the chemicals spend a longer time coming in contact with the filter and attracting more toxins.</p>
                            <p className="font-weight-bold">Aeration Systems</p>
                            <p>Aeration is a unit process in which air and water are brought into intimate contact. These water filtration systems are often used for carbon dioxide, ammonia and hydrogen sulfide reduction, oxidation of iron and is also an effective method of bacteria control.</p>
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

export default Homewater;