import React from 'react';
import {Button} from 'antd';

const Header = () => {
    return(
        <div className='header'>
            <div className='header-brand'>Preethi</div>
            <div className='header-links'>
                <ul>
                    <li><Button type='link'><a href="#main">Home</a></Button></li>
                    <li><Button type='link'><a href="#skills">Skills</a></Button></li>
                    <li><Button type='link'><a href="#projects">Projects</a></Button></li>
                    <li><Button type='link'><a href="#contact">Contact</a></Button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;