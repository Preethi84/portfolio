import React from 'react';

const Header = () => {
    return(
        <div className='header'>
            <div className='header-brand'>Preethi</div>
            <div className='header-links'>
                <ul>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;