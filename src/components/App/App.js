import React from 'react';
import './App.css';

import Toolbar from '../Toolbar/Toolbar';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {
    return (
      <main className="App">
        <Header />
        <Toolbar />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    );
}

export default App;
