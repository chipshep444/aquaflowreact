import React from 'react';
import Header from './headercomponent';
import MainNavBar from './navbarcomponent';
import Footer from './footercomponent';
import './bg.css';
import { Card, Accordion } from 'react-bootstrap'

function Faq() {
    return (
        <div>
            <Header />
            <MainNavBar />
            <Faqcontent />
            <Footer />
        </div>
    );
}

function Faqcontent() {
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
                          <h1>FAQ</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div>
        
        <div id="mcontent80" className="row">
          <div className="container">
            <div className="row">
              <div id="bodycards" className="container">
                <div className="row">
                  <div className="card-deck">
                    <div id="mcontent80b" className="card">
                      <div className="card-body">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title font-weight-bold">Frequently Asked Plumbing Questions</h5>
                              <p className="font-weight-bold">AquaFlow Plumbing Services takes pride in providing honest estimates and high-quality work the first time. For unbeatable quality, service and experience, call us today at (407) 444-8888.
                                Using his expertise and honest practices, Brian and his crew have developed a reputation as one of the most trusted, family-owned and operated plumbing companies in all of central Florida. Below you will find their expert advice for some of the most frequently asked plumbing, water heater &amp; water damage questions in the industry.</p>
                            </div>
                            <div className="col-md-6">
                              <img className="img-fluid" src="/images/faq.jpeg" width={400} alt="AquaFlow Plumbing" />
                            </div>
                          </div>
                        </div>
                        <br />
                        <Accordion defaultActiveKey="0">
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="0">
                                Choosing a Plumber
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body id="accordcard2">
                                    <h5><b>Why should I hire a plumber when buying a new home?</b></h5>
                                    <p>While it is still a good idea to have a home inspector overlook your home for other issues besides plumbing, most general inspectors don’t have the plumbing knowledge that a plumber would have and may overlook things. If you are purchasing a home that is used or fairly old, it is a good idea to invest in a sewer camera to video inspect your drain line. Click to read more about plumbing inspections when buying a home. There are also different types of plumbers that have different specialties that you should learn more about when choosing a plumber.</p>
                                    <h5><b>How do I choose a plumbing company?</b></h5>
                                    <ul>
                                        <li>Check with your local BBB to see the number of complaints they have received and if they were resolved.</li>
                                        <li>Ask for verified customer reviews. Many internet reviews are fake. Ask them to prove if reviews are real or give references.</li>
                                        <li>Call the plumbing company, and ask to speak to a plumber. Ask them questions, and see how they interact with you. By doing this, you can tell a lot about how they treat their customers.</li>
                                    </ul>
                                    <p>These are also important qualities to look for:</p>
                                    <ul>
                                        <li>Drop Clothes to protect carpets</li>
                                        <li>Check the Plumbing Repair 2 or 3 times to make sure there are no plumbing leaks.</li>
                                        <li>Clean Up Work Area Better Than It Was Before</li>
                                        <li>Explain Everything/All Plumbing Repairs upfront.</li>
                                    </ul>
                                    <h5><b>Why is customer service quality important when choosing a plumber?</b></h5>
                                    <p>A local plumber will most likely cost less than a plumber located farther away. Why? Well, the farther away the plumber is located, the more fuel will cost for them. There will be longer travel time making for a higher labor cost. </p>
                                    <h5><b>What if I need a plumber for an emergency situation?</b></h5>
                                    <p>When you call the big companies, you get an answering service and a 4 hour window of possible service times. When you are in an emergency plumbing situation, you want a plumber that will answer your call or at least call back in a timely manner. We are an emergency 24 hour plumbing company. We will answer the phone or call back within 10 0r 15 minutes. We know that a plumbing emergency can be stressful, and you need your questions answered quickly.</p>
                                    <h5><b>Will plumbing companies give free phone estimates?</b></h5>
                                    <p>We do offer free phone estimates, and most of the basic calls such as water heaters, drain cleaning, faucets, garbage disposals and toilet repairs can be diagnosed over the phone with the plumber asking a few questions. There are some situations where we cannot give an estimate over the phone such as remodeling or a bad leak under the slab. With these situations, we charge a service fee, and then if we do the job, we take the service charge of the estimated job cost. </p>
                                    <h5><b>Should I try to fix my own plumbing issues?</b></h5>
                                    <p>Plumbing repairs can be quite expensive, and with people still suffering in this economy, it can be even more of a problem. Below are a few reasons to not do your own plumbing repairs:</p>
                                    <ol>
                                      <li>Damaging your plumbing system: This is the main reason to hire a plumber. If you don’t know what you are doing, attempting a plumbing repair can severely damage your plumbing system and cause more work for your local plumber.</li>
                                      <li>Higher plumbing repair bill: By damaging your plumbing system, a plumbing repair that would have cost $140 may turn into a job that can cost thousands to repair.</li>
                                      <li>Improper Installation: Asking a big box store associate or a friend can cause you to install the product with improper code. The person may not be competent and tell you the wrong way to fix it. This can cause a premature failure of the product and possibly flood your home. </li>
                                    </ol>
                                    <h5><b>What questions should I ask before hiring a plumber?</b></h5>
                                    <ol>
                                      <li>First confirm if the plumber is licensed and insured. Ask them what their license number is and what their insurance policy limits are. If they hesitate to answer, call another plumber. Mistakes do happen and if your plumber makes a mistake, you want his policy to cover it.</li>
                                      <li>Ask what the plumbing repair will cost. Most of the time the plumber can give you an estimate over the phone for basic repairs. However if the problem is in the walls or under the slab, it is a lot harder to give an estimate, but they should give you worst case or best case scenarios on the cost of the repair.</li>
                                      <li>Next you should ask if they offer a warranty and how long is the repair guaranteed for. If they do not offer a warranty, call another plumber. It’s also good to make sure if the plumber is personable and answers all of your questions and explains everything in detail. Click to read more about</li>
                                    </ol>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="1">
                                Prevention Methods
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="1">
                                <Card.Body id="accordcard2">
                                      <h5><b>Why should I partake in prevention methods for my plumbing?</b></h5>
                                      <p>Many people put off minor repairs, and that is when they turn into a major plumbing problem. You then have the added expense of hiring an emergency plumber. Bottom line is, just like a well-maintained car, a well-maintained plumbing system will last much longer. </p>
                                      <h5><b>Are there items that I should not flush down my toilet?</b></h5>
                                      <p>Many people think the drain in their home can handle anything, but that is not the case. Especially in older houses, the drain clogs more often than in the newer homes. This is because in older homes they used cast iron pipe. The pipe becomes rough and catches a lot of products. The same can happen with newer homes if not cared for.</p>
                                      <h5><b>Do you offer preventative maintenance agreements?</b></h5>
                                      <p>AquaFlow Plumbing Services in Orlando, Florida, is proud to announce that it now offers Plumbing Preventive Maintenance Agreement service contracts. The service agreements allow customers to receive priority service, as well as up to 10% discounted off on yearly maintenance necessities.</p>
                                      <h5><b>Are drain cleaners a good preventative measure?</b></h5>
                                      <p>Most plumbers will agree that the little can of drain cleaner that costs $10 is not only a waste of money, but it does a lot of damage to your plumbing system. The first misconception is to dump the drain cleaner down your bathroom sinks or tubs to remove hair. Most drain cleaners will only dissolve soap build up and hard water build up, but hair needs to be removed by professional drain cleaning equipment. </p>
                                      <h5><b>How can I prevent my bathtub or shower from getting clogged?</b></h5>
                                      <p>The most common cause for clogged bathtubs is hair build up. We all shed hair, but it is best if you prevent it from going down your drains. The best prevention is by using a hair catcher that you can purchase from any hardware store. Put it over the drain, and clean the excess hair when done showering. </p>
                                      <h5><b>What should I use when doing a DIY plumbing repair?</b></h5>
                                      <p>There are two types of glues that can be used: clear PVC glue and cleaner or the best glue around for PVC, Rain R Shine. It works even if you have water still coming through the pipe, which clear glue does not. PVC is white in color and is used for outside plumbing. It is not to be used for hot water. </p>
                                      <h5><b>How can I save money on plumbing repairs?</b></h5>
                                      <p>Make a plumbing repair list if you have several plumbing needs. It’s going to be cheaper for the plumber to come to your house once than make several different visits. Consider replacing old plumbing fixtures. After a certain amount of repairs, it will end up being cheaper to just replace the item instead of paying for several repair visits.</p>
                                      <h5><b>How do I protect my plumbing if there are freezing temperatures?</b></h5>
                                      <p>In the rare occurrence of freezing temperatures, we suggest leaving a faucet on at a slow drip to keep water moving and prevent it from freezing. If you have a frozen pipe, many people think it will flood your home. While most of the time this is true, sometimes the pipe will freeze and you will get no water to your fixtures. When it warms back up, the ice will melt and you will have water again. The problem is that where the pipe froze the pipe most likely expanded and weakened the pipe. This will eventually leak causing a plumbing emergency.</p>
                                      <h5><b>Are there plumbing parts that I shouldn’t use?</b></h5>
                                      <ol>
                                        <li>Shark Bite Couplings: While this fitting has changed plumbing forever there are certain pipes that this part cannot be used with, or if you do use it, there are different shark bites for different pipe such as polybutelene.</li>
                                        <li>Needle Valves: Sometimes people want to add an ice-maker line or a dishwasher line, and they use a needle valve. These valves are the worst of the repair parts because they are not meant to be installed on poly lines or plastic lines. They are known for failing and flooding homes.</li>
                                        <li>Glue: Believe it or not, glue is one of the most misused items with plumbing repairs. You must use CPVC glue for CPVC pipe and PVC glue for PVC, and you cannot glue PEX piping.</li>
                                      </ol>
                                      <h5><b>What can I do to prevent a plumbing emergency?</b></h5>
                                      <ul>
                                        <li>Toilets: Check around your toilet periodically for water. Any water on the ground or around the toilet should be addressed by a plumber before it turns into a plumbing emergency.</li>
                                        <li>Water Heater: You should check around your water heater often for leakage. Water around your water heater can mean it is ready to go at anytime and needs to be replaced.</li>
                                        <li>Sinks: Most people don’t check under their sinks, but you should check under your sink. You can find small leaks before they cause big damage. </li>
                                      </ul>
                                      <h5><b>Why is leak detection important?</b></h5>
                                      <p>Leaks can pop up anywhere, and just because you see water in a particular area does not mean that is where the plumbing leak is. Most Orlando plumbing companies can pinpoint a plumbing leak in the wall, but when you have a leak in the slab, you should really think about hiring a company that specializes in leak detection. Most insurance companies cover this process and will cover it with little or no cost to you. </p>
                                      <h5><b>Does a leak always mean that I have a costly repair?</b></h5>
                                      <p>Many people don’t realize most plumbing leaks come from bad caulking or no caulking at all. If the shower control knobs are not caulked chances are it could be coming from there. Also, if you hang stuff on your shower head, the weight can break the line in the wall and cause a plumbing leak. That only would occur when the shower is used.</p>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="2">
                                Clogs 101
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="2">
                                <Card.Body id="accordcard2">
                                      <h5><b>How is my kitchen sink getting clogged?</b></h5>
                                      <p>People often put grease, rice, and pretty much everything you can think of that should not go down your plumbing system into their kitchen sink. Grease is the worst for your plumbing. It sticks to the sides of the plumbing drain pipes and slowly builds up like fat in our body’s arteries.</p>
                                      <h5><b>My kitchen sink is clogged, and my garbage disposal is not working. Why is that?</b></h5>
                                      <p>Most people do not know that if their garbage disposal is not functioning for a long period of time that it will clog. We have had a lot of calls lately about clogged sinks, but the plumber discovers at the root of the problem that the garbage disposal has not worked for some time. </p>
                                      <h5><b>My shower drain is clogged even though I’ve pulled out all the hair. Why?</b></h5>
                                      <p>Soap and soap scum are very damaging to your plumbing. While hair is surely the main culprit, soap and soap scum are right up there for causing shower clogs. What happens is that it becomes hard and start to close off the pipe. Hair then begins to stick to the scum.</p>
                                      <h5><b>Why is my tub clogged?</b></h5>
                                      <p>The first and main reason is usually hair. The next reason is usually negligence. If your tub strainer is broken, it is important to fix it. It is cheaper to fix the strainer than leave an open drain for anything to fall into. Lastly, tile grout from a do-it-yourself tile job will cause a clog. The tile grout is, believe it or not, up there on the list for getting your tub clogged. People wash their grout buckets and tools in the tub and cause major damage to the drainage system.</p>
                                      <h5><b>How do I fix a clogged toilet?</b></h5>
                                      <p>Usually there is something deeper in the toilet than you think that is causing the clog. We have many customers say that nothing else is backed up, so it has to be in the toilet. We mostly see this situation in older homes. Vegetation is a very surprising thing because roots can grow where you’d never expect. It takes a professional to resolve this issue. </p>
                                      <h5><b>What items will clog my garbage disposal?</b></h5>
                                      <ol>
                                        <li>Grease: While grease is liquid when it is hot, it will then cool and turn into a thick waxy substance which will over time build up in the pipe and hardens like a rock. If you add drain cleaners to the line this can make things even worse.</li>
                                        <li>Stringy Veggies: Stringy veggies can reek havoc on your plumbing. They don’t break down and will build up in the line. The garbage disposal also does not chop stringy veggies up fine enough, and this can cause your lines to build up.</li>
                                        <li>Egg Shells and Coffee Grounds: Egg shells and coffee grounds build up in the walls of the pipe and coffee grounds will build a mucky sludge in the pipe which will catch other things in the line causing backups.</li>
                                      </ol>
                                      <h5><b>Is that drain clog the city’s problem or mine?</b></h5>
                                      <p>If the clog is located past the sidewalk, most cites will come out and clean it out. However, some cites require you to hire a local plumber to clean out the drain. If there are roots or a break at the city clean-out, they will fix the break, and you are not responsible. Most of the time you are responsible to fix anything from your house to the street clean-out, and anything past the city clean-out is the city’s responsibility</p>
                                      <h5><b>Is toilet paper causing my drain to clog?</b></h5>
                                      <p>We have seen it first hand that a customer has a drain clog, and they have never had a problem with their drainage. So when we snake the line and pull nothing back, we ask, “Have you recently changed toilet paper?” Most of the time the answer is yes. The single ply toilet paper is less likely to clog your drains. Once you flush the paper, it starts to break down immediately which is a good thing. However most people like the thick, soft toilet paper, and this is where you have a problem. </p>
                                      <h5><b>What is that bubbling sound coming out of my drain?</b></h5>
                                      <p>When you hear this bubbling noise that means that your main drain line is more than likely clogged and is starting to back up. It will only be a matter of time before it turns into a plumbing emergency and you will more than likely have to call a plumber to unclog your drain. You should call a plumber immediately if you hear this sound. </p>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="3">
                                Repair or Replace
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="3">
                                <Card.Body id="accordcard2">
                                      <h5><b>Should I repair or replace my water heater?</b></h5>
                                      <p>If your water heater is not heating, it can only be a few things. There is either a bad circuit breaker or bad thermostats or elements. If your water heater is 7-8 years old, you should think about a water heater replacement especially if it is a 40 or 50 gallon heater. The cost to do a complete water heater rebuild is about $220, and the cost to replace is about $550-$580.</p>
                                      <h5><b>Should I repair or replace my faucet?</b></h5>
                                      <p>Most faucets can be repaired if they are just dripping or leaking from the handle, but when the faucet has had a leak for years and neglected to have a plumber repair it, you tend to have problems. If a faucet is leaking and it’s dripping on the body of the faucet, over time it corrodes. When you finally decide to have it repaired, it is too late because the faucet is corroded.</p>
                                      <h5><b>Should I repair or replace my garbage disposal?</b></h5>
                                      <p>If your garbage disposal stops working and makes a humming noise, this usually means it is jammed and can most likely be repaired. The average disposal lasts 6-10 years with normal use. If there is water leaking from the base of the unit, your garbage disposal will need to be replaced by a plumber. </p>
                                      <h5><b>Should I repair or replace my water main?</b></h5>
                                      <p>These are some reasons that you would want to replace your water main: 1. Copper pipe: If your water main is piped in copper you should think about replacement because you will have constant plumbing leaks on the water main and constant repairs will cost more in the long run than to just replace the main water line. 2. Galvanized pipe: This pipe is known for rusting from the inside out. It can cause very low water pressure, and repairs on this pipe are difficult to perform. 3. Location of piping: If your water main is located under a tree or under heavy shrubbery, you should think about replacement or partial replacement of your water main.</p>
                                      <h5><b>Should I repair or replace my sewer main?</b></h5>
                                      <p>Typically a plumber will run a video camera in the sewer line that will tell you if you just need a repair or if you should replace it. Plumbers should also provide you with a copy of the footage taken in the sewer line so that you can get other estimates and ensure you’re getting the best price. Without the video footage, it’s difficult to be able to estimate how much the repair or replacement would cost.</p>
                                      <h5><b>When should I replace laundry valves?</b></h5>
                                      <p>There are many reasons why you should replace your laundry valves with the most common reasons being age and consumer causing damage to system. Most of our calls regarding laundry valves in Central Florida are from customers getting a new washer and causing a leak in the wall while they attempt to remove the old hoses. On many older homes, people forget to remove and install new washer hoses every few years. In most cases the washer hose gets corroded to the valve, and when the customer tries to remove it, they cause a flood by breaking the valve or the pipe in the wall. </p>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="4">
                                Water Pressure & Leaks
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="4">
                                <Card.Body id="accordcard2">
                                      <h5><b>What do I need to do if there is a leak and flood within my home?</b></h5>
                                      <p>In the event of a flood from a plumbing leak or a major sewer back up, you must hire a professional water restoration company to prevent harmful mold from growing in your home. Once you have a flood in your home, your time is limited to prevent mold. </p>
                                      <h5><b>How do I shut off my water?</b></h5>
                                      <p>Look for the meter box. Usually it is on the same side of the house where the meter box is. Once you find the box, look on that side of the house for a valve with a round handle that is usually blue or red.</p>
                                      <h5><b>Why won’t my shower water get hot?</b></h5>
                                      <p>If the shower valve does not get used for a long period of time, the balancing pin gets stuck and will not let hot water through. If this is the case, we suggest calling a plumber to make the necessary repairs to get hot water to flow once again. Most of the time it is not a big repair cost.</p>
                                      <h5><b>How does the water come out of my pipes?</b></h5>
                                      <p>The height of the water tower and the weight of the water create the pressure to push the water to your plumbing system. If you live close to one of those water towers, your water pressure will be high. The farther you live from the tower, the less pressure you will have.</p>
                                      <h5><b>How does hard water affect my plumbing?</b></h5>
                                      <p>As water heats up, the minerals in the water stick together and sink to the bottom of the water heater tank. Chlorine from hard water can make your water piping leak and wear out quickly. The solution is installing a water softener unit in your home as this will eliminate the scale caused by hard water build up.</p>
                                      <h5><b>What should I do if my hose spigot is leaking?</b></h5>
                                      <p>Many customers feel its just a washer causing the problem, or they think it will just unscrew and the plumber just has to screw it back on. This is far from the truth. Anytime you have a leaking hose spigot 8 times out of 10 you will be replacing it, and we want to let our customers know that it is definitely more involved than just unscrewing and screwing on. </p>
                                      <h5><b>What should I do if I have a drippy shower faucet?</b></h5>
                                      <p>Many customers think that changing the shower head or tub spout will fix this problem, but this is not the case. The place that stops the water from dripping is in the valve of the shower where the handle is located. On newer valves, it is a cartridge assembly. When this fails, your tub will drip, and if it’s only a shower, it will drip from the shower head. On older homes it is usually a bad seal or washer, or both. Sometimes the stem will need replacement also.</p>
                                      <h5><b>What causes a shower pan to leak?</b></h5>
                                      <p>Age is one factor, and some of the older shower pans contain lead. These can deteriorate over the years, but the biggest reason for shower pan failure is installation error. If you feel that you may have a leaking shower pan, call your local plumbing company to resolve the issue. There are many things that could be wrong to cause this problem and other leaks in your shower. </p>
                                      <h5><b>What should I do if I have low-efficiency plumbing fixtures?</b></h5>
                                      <p>Older homes tend to have lower-efficiency plumbing fixtures causing you to have more expensive water bills and waste water. Toilets are now made to require much less water than before to flush and still have decent flushing power. If you want to upgrade your plumbing fixtures to high efficiency and save money on your water bill please call your local plumber.</p>
                                      <h5><b>Why do I have low water pressure in my home?</b></h5>
                                      <ul>
                                        <li>Broken pipe outside or under your home and you have a broken pipe and don’t realize it, this could cause low pressure issues.</li>
                                        <li>Under-sized water piping: under sized water piping is a problem usually found in older homes usually if you have under-sized pipe. If someone opens a faucet, you will lose pressure.</li>
                                        <li>Valve to water heater or main valve to home may be broken or partially closed. This is a big problem our plumbers see.</li>
                                        <li>Clogged aerator in sinks: This is also a big problem and will cause low pressure in the individual fixture i.e. bathroom faucet.</li>
                                      </ul>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="5">
                                Water Heaters
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="5">
                                <Card.Body id="accordcard2">
                                          <h5><b>Why doesn’t my water heater work as well as it used to?</b></h5>
                                          <p>The main reason is sediment. Depending on where you live in the country, the problem could be worse. Orlando, Florida, happens to have the worst water in the United States. There is a lot of calcium and minerals making it hard water. </p>
                                          <h5><b>How do I know how old my water heater is?</b></h5>
                                          <p>First you need to find the sticker with the serial number and the model number. This is usually in the lower section of the water heater and just above the lower access for the thermostat and element. Once you’ve located the tag with the serial number, you can decode it. If you look at the serial number, the year and month it was made are encoded in the serial number. It varies from manufacturer as to where they put the years.</p>
                                          <h5><b>How does my water heater work?</b></h5>
                                          <p>Let’s discuss the inlet and outlet of your water heater. The line on the right side of the water heater is the cold inlet. This brings the water into the tank. Your hot water heater valve is always on the cold side, and if you ever have a leak, this is where you shut it off. However, it will only shut down the hot water to your house</p>
                                          <h5><b>Should I get a tankless water heater or a storage water heater?</b></h5>
                                          <p>Tankless hot water heaters last about 20 years, which is longer than tank heaters. They are also great because they can be mounted on walls and save you a lot of space. Storage water heaters last for 10-15 years and are fairly inexpensive. The tanks allow you to have hot water on demand. </p>
                                          <h5><b>What temperature should my water heater be set at?</b></h5>
                                          <p>Most people like hot water, but the answer is that your water heater should be set at 120 degrees. At this temperature you should have ample hot water, and it is still safe enough not to burn you. Many customers think that by calling a plumber they can come out and make the temperature hotter than the recommended factory setting. This is not true.</p>
                                          <h5><b>Why do some water heaters last longer than others?</b></h5>
                                          <p>It somewhat depends on the brand name. A low quality water heater will not last as long as a better quality water heater, but most of the time it is due to lack of maintenance on the water heater. Over the years of sediment build up, it fills the bottom of the tank up and slowly starts to ruin the efficiency of the heater. Then once the sediment settles over the bottom element, it begins to effect the element. The element needs to be surrounded by water to stay cool. If sediment is surrounding it, then it won’t be able to keep cool causing it to overheat and go bad causing the upper element to work harder. This causes poor efficiency and increases your electric bill. </p>
                                          <h5><b>What should I do if my water heater is leaking?</b></h5>
                                          <ol>
                                            <li>Turn the power off to the water heater, which is usually in the breaker box. If it is gas, turn the gas valve off.</li>
                                            <li>Turn the water supply valve off as this will stop the flow of water into your heater.</li>
                                            <li>Try to drain the water heater even though the water is shut off. The tank may continue to leak because it is usually holding 40 or more gallons of water, and if the tank is cracked, it will leak all 40 gallons on to the floor. This can cause water damage, so attach your hose to the bottom drain line to do this.</li>
                                            <li>Pull the relief pin up as this will allow air into the tank and help it drain faster.</li>
                                            <li>Call a local plumber to replace your water heater.</li>
                                          </ol>
                                          <h5><b>Should I consider a natural gas water heater?</b></h5>
                                          <p>A natural gas water heater is much more efficient than electric water heaters. If you have natural gas or have the opportunity to install it, then do it. It’s well worth the money spent. Yes, gas appliances are usually more expensive than the electric, but they last longer and are more efficient which saves you money in the long run. </p>
                                          <h5><b>Should I invest in a hybrid water heater?</b></h5>
                                          <p>The hybrid water heater works off a heat pump system and is supposed to be a lot more energy efficient. The 50 gallon standard heater uses 4879 Kwh per year which is usually about $600 a year or $50 a month, but the hybrid water heater uses about 1890 Kwh per year at about $20 a month which is about a 62% savings. This is a yearly savings of $360 and would pay for itself and the labor to install it in 4 years. </p>
                                          <h5><b>What should I know when buying a new water heater?</b></h5>
                                          <p>One of the things that new Orlando home owners need for their water heaters are either an expansion valve like the Watts 530 or an expansion tank. These are to be installed on the cold side and are now code. These little devices do cost money to install, so you should ask if the lowest plumbing quote is going to include this. </p>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="6">
                                Kitchen Plumbing
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="6">
                                <Card.Body id="accordcard2">
                                            <h5><b>Why is my dishwasher not draining?</b></h5>
                                            <p>The kitchen sink may be clogged, and many people don’t realize that their dishwasher drains into a port on the garbage disposal. If the drain is clogged, this will affect the dishwasher. Another reason could be that the pump on the dishwasher is broken. If this is the case, you should not call a plumber, but instead call an appliance repair company.</p>
                                            <h5><b>What should I do if there is a leak under my sink?</b></h5>
                                            <p>There are a few things you can do to help out the plumber to know what they’ll need to fix. Check if the garbage disposal is leaking when it is being used. While running your faucet, see if you notice water dripping. Fill your kitchen sink up with water, and then check for drips around the strainers. After filling the sink to check the strainers, dump the water and check for plumbing leaks on the piping. Click to read more about kitchen sink leaks. Take a look at this list of a few specific leak clues to look for when you suspect something is wrong.</p>
                                            <h5><b>Should I try to install a kitchen faucet myself?</b></h5>
                                            <p>Often when customers get involved in the faucet installation, they see it is not so easy. Many kitchen sinks are very tight. To work on them, you need special tools to remove the nuts that mount the faucet to the sink. Sometimes if the faucet has been leaking on to the nuts, they will corrode and make things more difficult. Sometimes our plumbers have to saw off the faucet to remove it from the kitchen sink.</p>
                                            <h5><b>Could I install my own dishwasher?</b></h5>
                                            <p>Many people think the dishwasher is an easy plumbing job, but this is not always the case. We run into a lot of dishwashers that are installed incorrectly, and the customers don’t even know until months down the road. The problem is that when the drain is ran, some people will keep the drain low and come up to the disposal where the dishwasher drain tie-in is located. This is a problem because when using your garbage disposal and draining that side of the kitchen sink, food particles and dirty water make its way down the dishwasher discharge line and sometimes back into the dishwasher causing stagnant water and bad odor. </p>
                                            <h5><b>Why can a garbage disposal be bad in an older home?</b></h5>
                                            <p>In an older home, the plumbing is usually installed with copper piping and is only one and a half inches in diameter. In newer homes the drainage is usually two inches or larger. Because the piping is copper, the fittings are usually very short and have sharp bends, where in newer homes the fittings are more of a long sweep turn. </p>
                                            <h5><b>Should I buy a touchless faucet?</b></h5>
                                            <p>While these faucets can be very handy, just remember the more technical the faucet, the more likely something can go wrong with it. Also, to have a plumber install this type of faucet, it will cost more than the standard faucet because there are more components to it, such as the brain of the unit that requires batteries, mounting it under the sink, and wiring.</p>
                                            <h5><b>What should I know when buying a new garbage disposal?</b></h5>
                                            <p>When purchasing a garbage disposal there are a few important things to look for. The first is to make sure on the bottom of the unit there is a slot to put an Allen key to un-jam the disposal. In the event you drop something in the garbage disposal by accident your plumber can un-jam it. Sometimes you have to replace the entire unit just because there is no spot to put a wrench.</p>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle id="accordcard1" as={Card.Header} eventKey="7">
                                General Plumbing Questions
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="7">
                                <Card.Body id="accordcard2">
                                          <h5><b>Does hot weather cause leaks in homes?</b></h5>
                                          <p>The answer is yes, it can if we go through a long period without rain. The ground can dry out and cause it to settle. If this happens under your plumbing system, it can cause your water main to crack and leak. It can also cause your sewer main to settle and break or make a dip in your sewer line, better known as a belly. Hot weather and UV rays can also damage exposed plumbing pipes.</p>
                                          <h5><b>How would I know that I have a slab or wall leak?</b></h5>
                                          <p>Many times the customer has no clue that they have a plumbing leak until they get a water bill. Most of the time these type of leaks need to be electronically found and can be costly for your plumber to fix. When repairing this type of leak it is best sometimes to just reroute the water lines into the attic. This is called a repipe and will alleviate this problem from happening again.</p>
                                          <h5><b>What needs to be done if I have a slab leak?</b></h5>
                                          <p>Many people think that a leak under the slab is only caused by pressurized water lines. That is not true in older homes. The drains are cast iron, and the drain has the potential to rust out and leak causing damage to your home. Wall leaks, on the other hand, are usually a lot easier to repair and locate for your plumber. Most of the time the customer hears a spraying sound, and the wall is moist when the plumber opens the wall to make the repair.</p>
                                          <h5><b>What is a dry well?</b></h5>
                                          <p>A dry well is an underground, drain-like structure that is strategically placed in areas prone to flooding. When it rains, gravity carries the excess water and runoff from the roof into the dry well. This absorbs the water and then dispels it across a large surface area away from your home. Additionally, if routed correctly, the dry well can also receive gray water from other sources such as sinks, showers, and laundry machines. </p>
                                          <h5><b>What happens when roots get in my drain line?</b></h5>
                                          <p>If there are roots in your drain line that means there is a breach in the drain line, even after your plumber has performed a drain cleaning service and has unclogged your drain. The problem will occur again once the line is broken and roots are present. They will grow back again causing you to have your plumber perform drain cleaning every 8 months or less. </p>
                                          <h5><b>Why does my toilet take a long time to fill?</b></h5>
                                          <p>The main reason why the toilet is not filling or filling slowly is debris in the water line. The debris will work its way into the toilet and cause it to clog up in the fill valve. This can cause the toilet to fill extremely slowly. If one of your family members uses the toilet and someone else goes in right after them and flushes the toilet, it will not have enough water to flush the waste which causes a drain clog.</p>
                                          <h5><b>Will copper piping cause plumbing leaks?</b></h5>
                                          <p>Copper pipe and Florida water do not mix. The water is very harsh and affects the copper pipe causing it to fail after a short period of time. Pinholes start in the pipe very small and microscopic. It’s so small that you can’t see the hole sometimes, and it looks like the pipe is sweating. Pinholes in your copper under the slab are a nightmare. Most of the time, if you have a slab leak, it is best to repipe or replace all the copper pipe in your home.</p>
                                          <h5><b>Can lightning damage copper piping in my home?</b></h5>
                                          <p>Orlando is the lighting capitol of the world and that with a highly conductive copper piping system is trouble. Many of the older homes in Orlando are not grounded properly. When the lightning hits near or directly at your home, it sends a jolt through your copper. It usually leaves your pipe with multiple pinholes in the slab or wall. This usually requires a repipe from your plumber.</p>
                                          <h5><b>What plumbing products are commonly misused by consumers?</b></h5>
                                          <p>Plumbers see just about everything you can imagine because customers aren’t aware of many details when making a plumbing repair. When wrong products are used, more problems are typically created. Plumber’s putty and caulk are two of the most commonly misused products seen.</p>
                                          <h5><b>What should I do with an unused bathroom?</b></h5>
                                          <p>Not using a bathroom can actually cause problems. The main thing you’ll want to do is run water in the sink and shower and flush the toilet at least once a week. This will keep the traps full. A trap that has evaporated will let sewer gas into your home causing odor. Another important thing to do is if your home has a single hand shower valve turn the valve on from cold to hot. </p>
                                          <h5><b>Do you offer video/camera sewer inspections?</b></h5>
                                          <p>AquaFlow Plumbing Services is now offering video/camera sewer inspections. It saves time on diagnosing your plumbing problem and damage to the area that needs to be dug up. By doing a video inspection on a problem sewer line, it will save you money in the long run because your sewer will be fixed permanently, and you will not have a recurring problem costing you more money. </p>
                                          <h5><b>What is causing my plumbing leaks?</b></h5>
                                          <p>Most people that see water in their cabinets automatically think it is a broken pipe, but most plumbing leaks are caused by poorly manufactured supply lines. Supply lines carry water from the angle valve under your sink to the faucet and are usually poly or plastic based. This plumbing leak can sometimes be handled by a homeowner but sometimes small jobs like this can turn into plumbing disasters. If the nuts are rusted, they can snap and break causing a bigger problem.</p>
                                          <h5><b>How do I fix a rocking toilet?</b></h5>
                                          <p>Many of our customers get aggravated with a rocking toilet and think they can just tighten the two bolts at the bottom of the bowl to fix it. Wrong! By doing this, you are likely going to cause a bigger problem. If you over tighten the bolts, you can break the flange. The flange is a plastic or cast iron part of your drainage system that allows you to bolt the toilet to the floor and connects the toilet to the plumbing system. It is best to call a trusted plumber when in this situation.</p>
                                          <h5><b>What can pests do to my plumbing?</b></h5>
                                          <p>The worst pests to cause damage to plumbing are rats, mice, and the occasional raccoon, but the rat is the most pesky because they will chew through wood. If your water lines are ran in the attic, they will chew through the pipe to get water, and we have seen them completely eat all the water piping causing water damage in the home. If you suspect rats in your home, first call a vermin specialist to seal and get rid of the issue then call a plumber to check for any plumbing issues. </p>
                                          <h5><b>Should I install my new bathtub myself?</b></h5>
                                          <p>Some people think a bathtub installation is simple and can be done on their own, but this is far from the truth and should only be done by a qualified plumbing company in order to be installed properly. A bathtub installation requires demolition, drain line work, and sometimes water line work. It also requires special tools and knowledge in the plumbing field. </p>
                                          <h5><b>What are the benefits of a recirculating pump?</b></h5>
                                          <p>1. The obvious one is that you will have hot water on tap and not take minutes to wait for hot water. It would be pretty much within a few seconds that you would have hot water. 2. The next reason is water saving. Think about it, whenever you use your hot water and have to wait for it to get hot, you are wasting water. For example, the average shower uses 2.5 gallons of water per min, so if you have to wait 2 or 3 minutes you are wasting 5-7.5 gallons and if you have a family of four, that’s 20-30 gallons a day wasted and, 600-900 gallons wasted a month. 3. The next is electric savings. All that wasted water also means that your water heater has to work harder also causing your electric bill to be higher.</p>
                                          <h5><b>Can I have touchless flushing in my home?</b></h5>
                                          <p>With many consumers worried about germs and the spread of illness, the bathroom has long been the breeding ground for germs and what a way to cut germ exposure than to not have to touch your toilet. Kohler has designed a touchless kit that fits with almost every toilet. This is awesome because you no longer have to change your whole toilet out to make this upgrade. </p>
                                          <h5><b>What should you know before calling a plumber about a main drain clog?</b></h5>
                                          <p>First, find out if you are on septic or city sewer. Check your water bill. It will show a sewer base charge and sewer charge. If you are being billed for sewer waste water, you are on city sewer and most likely have a main drain clog. If you are having trouble finding the water bill, look outside in the street and if you see manholes that say sanitary on them, you are on city sewer. In some older cities, however, it is hard to see the manholes because they are in grassy easements and not in the street. If you can figure this out before calling a plumbing company, you can save yourself time and aggravation.</p>
                                          <h5><b>How do you find a clean-out if you have a newer home?</b></h5>
                                          <p>You should have a clean-out, and they are usually located on the opposite side of the house that your water comes in. So if your water comes in on the left side of your home, your sewer clean-out should be on the opposite side, usually about 2-3 feet off the house. It’s also usually in line with the plumbing vent on the roof. If you can’t locate it, a camera inspection can be done by a plumber to locate the clean-out and if you don’t have a clean-out, the camera can locate where your drain line exits the home.</p>
                                          <h5><b>When would I need a french drain?</b></h5>
                                          <p>Often times when the plumber arrives, they find the ground spongy and very wet. When they look at the meter for any water movement, there is none. Then we ask about the cost of the water bill, and they state that it’s normal. In these cases, the plumbing issue is not a leak but high ground water. Many ask how this can be resolved and a french drain is the answer. </p>
                                          <h5><b>Could a broken drain cause bad odor in my home?</b></h5>
                                          <p>There are many reasons for your plumbing system to have a bad odor and one reason could be that you have a broken drain line in the wall. We have seen broken drains in the wall, and it will fill the block cells with water and then rot in the walls. If this happens, you would have to hire a plumber to make the repair. However, sometimes the smell comes from a fixture that people don’t use often such as a sink or a bathtub. </p>
                                          <h5><b>How do you clean a clogged urinal?</b></h5>
                                          <p>You would first want to pull the urinal off the wall, take it outside, and soak it in a special calcium dissolver. Then we run a snake through the 2 inch urinal drain, reset the urinal, and test the plumbing fixture. This process is the best and the only way to do drain cleaning on a urinal. Click to read more about urinal drain cleaning.</p>
                                          <h5><b>What is a plumbing vent for?</b></h5>
                                          <p>A plumbing vent is a critical part of your plumbing system. First it helps vent out harmful sewer gases from building up in your home and causing odor problems. The next and most important function for a vent is to allow proper air flow into the drainage system. Without proper air flow the plumbing system would not drain.</p>
                                          <h5><b>What part of my home should I remodel?</b></h5>
                                          <p>When you are thinking about remodeling your home, you should start with a kitchen remodel or bathroom remodel for a few reasons. The first reason is the obvious, you spend most of your time in these areas so you want to enjoy cooking a big family dinner in your kitchen and then being able to relax in a nice big tub in your bathroom. Another reason to start with kitchen and bathrooms is because of the return on investment. </p>
                                          <h5><b>What are the problems with terra cotta sewer mains?</b></h5>
                                          <p>Terra cotta pipe has been around for thousands of years and is in many older homes in the U.S.A. The pipe itself is very durable and the problems with terra cotta are the joints or the connections which are the weakest point on the pipe allowing the roots to penetrate into the plumbing system and breaking the line causing your drain to clog. Another problem with terra cotta pipe is that it is very short in length which means you have many connections. The more connections, the more flex you have in the line, so as the ground settles, you get bellies in the sewer line causing tissue to build up and cause your drain to back up. </p>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion> 
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

export default Faq;