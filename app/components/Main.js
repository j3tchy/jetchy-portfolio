import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Project from './Project';

function Main() {
    return (
        <div className="main-content" id="main-content">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/projects/:id' component={Project} />
            </Switch>
        </div>
    )
}

export default Main
