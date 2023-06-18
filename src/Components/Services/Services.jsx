import React, { useContext } from 'react';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from "../../img/glasses.png";
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume of Mostafizur Rahman.pdf'
import { themeContext } from '../../Context';
const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>My AweSome</span>
                <span>Service</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Deserunt sapiente ducimus aspernatur sequi quisquam est magnam laudantium accusamus, culpa ea!
                </span>
                <a href={Resume} download>

                <button className='button s-button'>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>


            {/* right side  */}
            {/* first card */}

            <div className="cards" style={{left:'14rem'}}>
            <Card HeartEmoji = {HeartEmoji} heading={'Design'} details={'figma, Sketch ,PhotoShop,adobe'}></Card>
            </div>
             
             {/* second card  */}
             <div className="cards" style={{top:'12rem',left:'-4rem'}}>
            <Card HeartEmoji = {Glasses} heading={'Developer'} details={'figma, Sketch ,PhotoShop,adobe'}></Card>
            </div>

            {/* third card  */}
            <div className="cards" style={{top:'19rem',left:'12rem'}}>
            <Card HeartEmoji = {Humble} heading={'UI/UX'} details={'figma, Sketch ,PhotoShop,adobe'}></Card>
            </div>
            <div className="blur s-blur2 " style={{background:'var(--purple)'}}></div>
        </div>
    );
};

export default Services;