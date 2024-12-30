import React from 'react';
import {Button} from 'antd';

const Main = () => {
    return(
        <section className='main'>
            <div className='main-jumbotron'>
                <h1 className='jumbotron-title'>Hi, I'm, Preethi</h1>
                <p className='jumbotron-subtitle'>Full Stack Developer</p>
                <a href='#projects'>
                    <Button type='primary'>View My Work</Button>
                </a>
                <p>
                    I'm a passionate Full Stack Developer with expertise in Vue, React, Python, and FastAPI. My goal is to build efficient, scalable, and user-friendly applications. 
                </p>
            </div>
        </section>
    )
}

export default Main;