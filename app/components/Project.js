import React, { Component } from 'react';

import ProjectsAPI from '../utils/ProjectsAPI';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const project = ProjectsAPI.get(parseInt(this.props.match.params.id));

        return (
            <div className="projects">
                <div className={"projects__header " + project.slug}>
                    <h1>{project.title}</h1>
                </div>
                <div className="container__wrapper">
                    <div className="projects__summary">
                        <p>{project.summary}</p>
                    </div>
                    <div className="projects__image">
                        <img src={project.websiteImg} alt={project.title} className="website-img img-responsive" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Project
