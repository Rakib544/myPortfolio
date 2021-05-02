import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [isSent, setIsSent] =  useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const sendEmail = e => {
        setIsClicked(true)
        e.preventDefault();
        emailjs.sendForm('service_wjlaxa2', 'template_2olgdk4', e.target, 'user_R0MpxgA5bneXLqOPLfFpp')
            .then((result) => {
                setIsSent(true)
            }, (error) => {
                setIsSent(false)
            });
        e.target.reset();
    }
    return (
        <section id="contact">
            <h1 className="text-center">Contact Me</h1>
            <Grid container>
                <Grid item lg={3} md={3} sm={3} xs={12}>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Phone:</h3>
                            <p>01786542643</p>
                        </div>
                        <div className="contact-info">
                            <h3>Email:</h3>
                            <p>dev.rakib01@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <h3>Address:</h3>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={12}>
                    <form onSubmit={sendEmail}>
                        <Grid container>
                            <Grid item lg={6} sm={12} xs={12}>
                                <input className="form-control mt-3" type="text" placeholder="Entre Name" name="name" />
                            </Grid>
                            <Grid item lg={6} sm={12} xs={12}>
                                <input className="form-control mt-3" type="text" placeholder="Entre Email" name="email" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={6} sm={12} xs={12}>
                                <input className="form-control mt-3" type="text" placeholder="Entre Number" name="number" />
                            </Grid>
                            <Grid item lg={6} sm={12} xs={12}>
                                <input className="form-control mt-3" type="text" placeholder="Entre Subject" name="subject" />
                            </Grid>
                        </Grid>
                        <textarea className="form-control text-area mt-3" placeholder="Message" rows="6" name="message"></textarea>
                        <button className="send-message-btn mt-3" type="submit">Submit Message</button>
                        {isClicked && isSent && <p style={{color: 'green', textAlign: 'center', fontSize: '18px'}}>Message sent successfully</p>
                        }
                    </form>
                </Grid>
            </Grid>
        </section>
    );
};

export default ContactMe;