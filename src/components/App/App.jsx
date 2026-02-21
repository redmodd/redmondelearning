import React from 'react';
import './App.css';

import Toolbar from '../Toolbar/Toolbar.jsx';
import Header from '../Header/Header.jsx';
import Services from '../Services/Services.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';

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
