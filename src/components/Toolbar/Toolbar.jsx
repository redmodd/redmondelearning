import './Toolbar.css';

const Toolbar = () => {
    return(
        <nav className="toolbar">
            <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Toolbar;