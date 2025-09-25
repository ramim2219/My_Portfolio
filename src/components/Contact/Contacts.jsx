import React, { useRef } from 'react';
import './Contact.css'
import FacebookIcon from './images/facebookIcon.png'
import Twitter from './images/twitter.png'
import Github from './images/github.png'
import Instagram from './images/instagram.png'
import Codeforces from './images/codeforces.png'
import emailjs from '@emailjs/browser';
const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
            emailjs.sendForm('service_7a0o4nv', 'template_pw1l8k8', form.current, {
                publicKey: 'dvGnMIGeTtszepI27',
            })
            .then(
            () => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
    };
    return (
        <section id='contact' className="contactPage">
            <div id="contactForm">
                <h1 className="contactPageTitle">
                    Contact Me
                </h1>
                <span className="contactDesc">
                    Please fill out the form below to discuss any work opportunities.
                </span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' name='from_name' placeholder='Your Name'/>
                    <input type="email" className='email' name='from_email' placeholder='Your Email'/>
                    <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className="links">
                        <a target='blank' href="https://www.facebook.com/shafayetullah.ramim">
                            <img src={FacebookIcon} alt="facebook"  className='link'/>
                        </a>
                        <a href="https://x.com/2219Ramim69667" target='blank'>
                            <img src={Twitter} alt="twitter"  className='link'/>
                        </a>
                        <a href="https://github.com/ramim2219" target='blank'>
                            <img src={Github} alt="github" className='link' />
                        </a>
                        <a href="https://www.instagram.com/ramimshafayetullah/" target='blank'>
                            <img src={Instagram} alt="instagram"  className='link'/>
                        </a>
                        <a href="https://codeforces.com/profile/Ramim2219" target='blank'>
                            <img src={Codeforces} alt="instagram"  className='link'/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contacts;