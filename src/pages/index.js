import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from '../components/Footer';

const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main