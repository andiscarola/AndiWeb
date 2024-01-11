import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className='skillDesc'>I am a sophmore at the Univeristy of Texas at El Paso. I study computer
            science, and hope to obtain my Masters Degree.</span>
            <div className='skillBars'>
              <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Computer Languages</h2>
                    <p>Java, Python, HTML, CSS </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This webpage was created using React.js! Alongside using JavaScript, HTMl, and CSS!</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Non-CS skills</h2>
                    <p>Baking! Ive worked at a cookie shop for over a year. Volleyball! I used to travel 
                        to play this sport back in the day! Gardening! Specifically succulents, I love cacti specifically!
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;