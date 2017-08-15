import React, { Component } from 'react';

class LatestWorkPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="latestWork__image-wrapper">
                <img className="lazy" src="http://placehold.it/960x500" className="latestWork__image img-responsive" />
                <div className="latestWork__image-title">
                    {this.props.title}
                </div>
            </div>
        )
    }
}


export default LatestWorkPanel;
