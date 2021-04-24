import React from 'react';
import Main from './components/maincomponent';
import About from './components/aboutcomponent';
import Finance from './components/financingcomponent';
import Warranty from './components/warrantycomponent';
import Careers from './components/careerscomponent';
import Locations from './components/locationscomponent';
import Specials from './components/specialscomponent';
import Reviews from './components/reviewscomponent';
import Contact from './components/contactcomponent';
import Faq from './components/faqcomponent';
import Helpfultips from './components/helpfultipscomponent';
import Emergency from './components/emergencycomponent';
import Residential from './components/residentialcomponent';
import Commercial from './components/commercialcomponent';
import Sewer from './components/sewercomponent';
import Waterheater from './components/waterheatercomponent';
import Drain from './components/draincomponent';
import Burstpipe from './components/burstpipecomponent';
import Garbagedisposal from './components/garbagedisposalcomponent';
import Leakdetection from './components/leakdetectioncomponent';
import Homewater from './components/homewatercomponent';
import Slab from './components/slabcomponent';
import Repipe from './components/repipecomponent';
import Terms from './components/termscomponent';
import Privacypolicy from './components/privacypolicycomponent';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/about" component={About} />
        <Route path="/finance" component={Finance} />
        <Route path="/warranty" component={Warranty} />
        <Route path="/careers" component={Careers} />
        <Route path="/locations" component={Locations} />
        <Route path="/specials" component={Specials} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/helpfultips" component={Helpfultips} />
        <Route path="/emergency" component={Emergency} />
        <Route path="/residential" component={Residential} />
        <Route path="/commercial" component={Commercial} />
        <Route path="/sewer" component={Sewer} />
        <Route path="/waterheater" component={Waterheater} />
        <Route path="/drain" component={Drain} />
        <Route path="/burstpipe" component={Burstpipe} />
        <Route path="/garbagedisposal" component={Garbagedisposal} />
        <Route path="/leakdetection" component={Leakdetection} />
        <Route path="/homewater" component={Homewater} />
        <Route path="/slab" component={Slab} />
        <Route path="/repipe" component={Repipe} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacypolicy" component={Privacypolicy} />
      </Switch>
    </main>
  );
}

export default App;



