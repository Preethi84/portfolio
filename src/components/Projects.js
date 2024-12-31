import React from 'react';
import {Card, Col, Row} from 'antd'; 

const Projects = () => {
    const project_list = [
        {title: "Project 1", description:"A Web app built with React", link:"#"},
        {title: "Moon", description:"Lunar Moon Rotation", link:"#"},
        {title: "Shirtie", description:"A shopify application to buy shirts", link:"#"},
        {title: "Astra", description:"My story", link:"#"},
        {title: "Hon Voyage Tales", description:"book blog", link:"#"},
    ]

    return(
        <section className='projects'>
            <h2>Projects</h2>
            <div className='project-list'>
                <Row gutter={16}>
                {project_list.map((project) => (
                    <Col span={8}>
                        <Card title={project.title}>
                            {project.description}
                        </Card>
                    </Col>
                ))}
                </Row>
                
            </div>
        </section>
    )
}

export default Projects;