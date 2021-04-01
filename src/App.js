import React from 'react';
import Main from './components/maincomponent';
import Header from './components/headercomponent';
import MainNavBar from './components/navbarcomponent';
import Footer from './components/footercomponent';
import './App.css';

function App() {
  return (
      <div>
          <Header />
          <MainNavBar />
          <Main />
          <Footer />
      </div>
  );
}

export default App;