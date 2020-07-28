import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './App.css';
import ReactGa from 'react-ga';

import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = () => {     
      setSideDrawerOpen(true)
  };
  
    const closeSideDrawer = () => {
      setSideDrawerOpen(false);
    };

    useEffect(() => {
      ReactGa.initialize('UA-171779412-1')
      //to report page view
      ReactGa.pageview(window.location.pathname)
    },[])
 
    return (
      <div className="App">
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} drawerClose={closeSideDrawer}/>
        <Header />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
}

export default App;
