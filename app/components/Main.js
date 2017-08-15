import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';

function Main() {
    return (
        <div className="main-content" id="main-content">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/projects/:id' component={Projects} />
            </Switch>
        </div>
    )
}

export default Main;
