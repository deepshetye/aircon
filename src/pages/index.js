import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
                <Route exact={true} path="/">
                    <h1>Still thinking of      </h1>
                </Route>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
}

export default Home