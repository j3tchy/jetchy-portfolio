import React, { Component } from 'react';

import bigtext from 'bigtext/src/bigtext';
import ScrollDown from './ScrollDown';

class Intro extends Component {
    componentDidMount() {
        $('.home__main-header').bigtext();
    }

    render() {
        return (
            <div id="home" className="section container home">
                <div className="container__wrapper">
                    <div className="home__main-header-wrapper-outer">
                        <div className="home__main-header-wrapper-inner">
                            <h1 className="home__main-header">
                                <span>Jermaine</span>
                                <span>Gyekye</span>
                            </h1>
                            <p className="home__main-header--small">Front end developer</p>
                        </div>
                        <p className="home__about">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <ScrollDown />
                </div>
            </div>
        )
    }
}

export default Intro;
