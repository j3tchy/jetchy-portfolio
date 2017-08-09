import React, { Component } from 'react';

import LatestWorkPanel from './LatestWorkPanel';

class LatestWork extends Component {
    render() {
        return (
            <div id="latestWork" className="section container latestWork">
                <div className="container__wrapper">
                    <h2 className="latestWork__header">H2 Title</h2>
                    <p className="latestWork__intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="latestWork__image-panel">
                        <LatestWorkPanel title="Title 1" />
                        <LatestWorkPanel title="Title 2" />
                        <LatestWorkPanel title="Title 3" />
                        <LatestWorkPanel title="Title 4" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LatestWork;
