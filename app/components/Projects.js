import React, { Component } from 'react';

import ProjectsAPI from '../utils/ProjectsAPI';

function Projects(props) {
    const project = ProjectsAPI.get(parseInt(props.match.params.id));

    return (
        <div className="projects">
            <div className="projects__header">
                <img src="https://placehold.it/2400x500" className="img-responsive" />
                <h1>{project.title}</h1>
            </div>
            <div className="container">
                <p>{project.summary}</p>
            </div>
        </div>

    )
}

export default Projects;
