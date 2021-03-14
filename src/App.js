import React from 'react';
import Main from './components/maincomponent';
import Header from './components/headercomponent';
import Footer from './components/footercomponent';
import './App.css';
import Googlemap from './components/cstest';

function App() {
  return (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
  );
}

export default App;