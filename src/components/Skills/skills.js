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
                    <p>This webpage was created using React.js! Alongside using JavaScript, HTML, and CSS!</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Non-CS skills</h2>
                    <p>Baking: I have accumulated over a year of experience working at a cookie shop, honing my skills in the art of baking.<br></br>

Volleyball: In the past, I dedicated time to traveling for competitive play in volleyball, reflecting my passion and commitment to the sport.<br></br>

Gardening: My green thumb finds its focus in the realm of succulents, with a particular affection for cacti.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;