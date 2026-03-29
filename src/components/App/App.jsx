import './App.css';
import Toolbar from '../Toolbar/Toolbar.jsx';
import Header from '../Header/Header.jsx';
import Services from '../Services/Services.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';

/**
 * Root application component
 * @component
 * @returns {JSX.Element}
 */
const App = () => (
  <div className="App">
    <a className="skip-link" href="#main">
      Skip to main content
    </a>
    <div className="pageContent pageContent--wide">
      <Header />
      <Toolbar />
    </div>
    <main id="main">
      <Services />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
