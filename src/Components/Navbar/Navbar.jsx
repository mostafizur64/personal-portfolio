import React from 'react';
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
const Navbar = () => {
    return (
       <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Mostafizur Rahman</div>
           <Toggle></Toggle>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyle:'none'}}>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact 
            </button>
        </div>

       </div>
    );
};

export default Navbar;