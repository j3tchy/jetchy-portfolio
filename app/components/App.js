import React, { Component } from 'react';

import Nav from './Nav';

import Home from './Home';
import LatestWork from './LatestWork';

import fullpage from 'fullpage.js/dist/jquery.fullpage.js';

class App extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <Nav />
                <div className="main-content" id="main-content">
                    <Home />
                    <LatestWork />
                </div>
            </div>
        )
    }
}

export default App;
