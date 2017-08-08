import React, { Component } from 'react';

import bigtext from 'bigtext/src/bigtext';
import ScrollDown from './ScrollDown';

class Home extends Component {
    componentDidMount() {
        $('.home__main-header').bigtext();
    }

    render() {
        return (
            <div id="home" className="section container home">
                <div className="container__wrapper">
                    <div className="home__main-header-wrapper">
                        <h1 className="home__main-header">
                            <span>Jermaine</span>
                            <span>Gyekye</span>
                        </h1>
                        <p className="home__main-header--small">Front end developer</p>
                    </div>
                    <ScrollDown />
                </div>
            </div>
        )
    }
}

export default Home;
