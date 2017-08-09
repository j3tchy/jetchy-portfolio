import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleOpenClass = this.toggleOpenClass.bind(this);
        this.state = {
            open: false
        }
    }

    toggleOpenClass() {
        const currentState = this.state.open;
        this.setState({
            open: !currentState
        });
    }

    render() {
        return (
            <nav id="main-navigation" className="main-navigation">
                <div className="container__wrapper">
                    <div className="main-navigation__wrapper">
                        <div
                            className={'main-navigation__list ' + (this.state.open ? 'open' : '')}
                            onClick={this.toggleOpenClass}
                            >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
