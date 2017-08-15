import React, { Component } from 'react';

import bigtext from 'bigtext/src/bigtext';
import ScrollDown from './ScrollDown';

import Intro from './Intro';
import LatestWork from './LatestWork';
import Social from './Social';

function Home() {
    return (
        <div>
            <Intro />
            <LatestWork />
            <Social />
        </div>
    )
} 

export default Home;
