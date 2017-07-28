import React, { Component } from 'react';

import Home from './Home';
import Skills from './Skills';

import $ from 'jquery';
import fullpage from 'fullpage.js/dist/jquery.fullpage.js';

class App extends Component {

    componentDidMount() {
        $('#fullpage').fullpage();
    }

    render() {
        return (
            <div id="fullpage">
                <Home />
                <Skills />
            </div>
        )
    }
}

export default App;
