import React from 'react';

const Projects = () => {
    const project_list = [
        {title: "Project 1", description:"A Web app built with React", link:"#"},
        {title: "Project 2", description:"A backend API using FastAPI", link:"#"},
    ]

    return(
        <section className='projects'>
            <h2>Projects</h2>
            <div className='project-list'>
                {project_list.map((project) => (
                    <div className='project-board'>
                        <h3 className='project-title'>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;