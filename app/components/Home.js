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
                    <h1 className="home__main-header">
                        <span>Title111</span>
                        <span>Title1</span>
                    </h1>
                    <ScrollDown />
                </div>
            </div>
        )
    }
}

export default Home;
