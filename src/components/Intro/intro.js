import React from "react";
import './intro.css'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'
const Intro = () => {
    return (
        <section id ='intro'>
           <div className= 'introContent'>
              <span className ='hello'>Hello</span>
              <span className='introText'>I'm <span className= 'introName'>Andi</span><br />A Computer Science Undergrad</span>
              <p className='introPara'>I go to the Univeristy of Texas at El Paso and <br />major in Computer Science</p>
              <Link><button className='btn'><img src={btnImg} alt = "Hire me"className='btnImg' />Hire Me</button></Link>
            </div> 
            <img src ={bg} alt="Profile" className="bg"/>   
        </section>
    );
}

export default Intro