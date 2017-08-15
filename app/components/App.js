import React, { Component } from 'react';

import Nav from './Nav';

import Home from './Home';
import LatestWork from './LatestWork';
import Social from './Social';

import fullpage from 'fullpage.js/dist/jquery.fullpage.js';

import TwitterLogo from '../assets/images/twitter-logo.svg';


class App extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <Nav />
                <div className="main-content" id="main-content">
                    <Home />
                    <LatestWork />
                    <Social />
                </div>
            </div>
        )
    }
}

export default App;
