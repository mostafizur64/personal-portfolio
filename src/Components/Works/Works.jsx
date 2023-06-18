import React, { useContext } from 'react';
import './Works.css'
import Upwork from '../../../src/img/Upwork.png';
import fiver from '../../../src/img/fiverr.png';
import amazon from '../../../src/img/amazon.png';
import shopify from '../../../src/img/Shopify.png';
import facebook from '../../../src/img/Facebook.png';
import { themeContext } from '../../Context';
const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="works">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Work for All these</span>
                <span>Brand & Clients</span>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                </span>
              

                    <button className='button s-button'>Hire me</button>
                
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side  */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={fiver} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={facebook} alt="" />
                    </div>
                </div>
             
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>

        </div>
    );
};

export default Works;