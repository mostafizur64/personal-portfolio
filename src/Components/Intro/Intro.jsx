import React, { useContext } from 'react';
import './Intro.css';
import github from '../../img/github.png'
import linkedIn from '../../img/linkedin.png'
import instragram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color:darkMode? 'white':''}}>Hy! I am</span>
                    <span>Mostafizur Rahman</span>
                    <span>Web Developer with high level experience in web design and development,producting the Quality work</span>
                </div>
                <button className='button i-button'>
                    Hire me
                </button>
                <div className="i-icons">
                    <img src={github} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={instragram} alt="" />
                </div>
            </div>
            <div className="i-right">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={boy} alt="" />
              <img
             
              src={glassesimoji} alt="" />
              <div style={{top:'-4%',left:'68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'> </FloatingDiv>
              </div>
              <div style={{top:'18rem',left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'></FloatingDiv>
              </div>
              {/* blur div  */}
              <div className="blur" style={{background:'rgba(238 210 255)'}}></div>
              <div className="blur" style={{background:'#C1F5FF',top:'17rem',
            width:'21rem',height:'11rem',left:'-9rem'}}></div>
            </div>
        </div>
    );
};

export default Intro;