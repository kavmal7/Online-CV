import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#work-experience'>Work Experience</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#certifications'>Certifications</a></li>
                    <li><a href='#languages'>Languages</a></li>
                    <li><a href='#skills-hobbies'>Additional Skills and Hobbies</a></li>
                    <li><a href='#footer'>Footer</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;