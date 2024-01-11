import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FaceBookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7p7jpss', 'template_2ianecu', form.current, 'ta6TS1XhpAqMHDTAy')
          .then((result) => {
                console.log(result.text);
              alert('Email Sent!');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="contactPage">
            <div id="clients">
               <h1 className="contactPageTitle">My Experiences</h1>
               <p className="clientDesc">
                    I had the opportunity to attend the Grace Hopper Conference 2023! 
                    I was given the opportunity to connect with many people from around the world and hear from 
                    many companies, here are some to name a few!
               </p>
               <div className="clientImg">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
               </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc"> Please fill out the form below for work</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type ="text" className="name" placeholder="Your Name" name='your_name' />
                    <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                    <textarea className='msg' name="message" rows ="5" placeholder="Your Message"></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                      <img src={FaceBookIcon} alt="Facebook" className="link" />
                      <img src={TwitterIcon} alt="Twitter" className="link" />
                      <img src={YouTubeIcon} alt="Youtube" className="link" />
                      <img src={InstagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>    
        </section>
    );
}

export default Contact;