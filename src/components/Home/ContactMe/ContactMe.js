import { Grid } from '@material-ui/core';
import React from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
                                <input className="form-control mt-3" type="text" placeholder="Entre Name" />
                            </Grid>
                            <Grid item lg={6} sm={12} xs={12}>
                                <input className="form-control mt-3" type="text" placeholder="Entre Email" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={6} sm={12} xs={12}>
                                <input className="form-control mt-3" type="text" placeholder="Entre Number" />
                            </Grid>
                            <Grid item lg={6} sm={12} xs={12}>
                                <input className="form-control mt-3" type="text" placeholder="Entre Subject" />
                            </Grid>
                        </Grid>
                        <textarea className="form-control text-area mt-3" placeholder="Message" rows="6"></textarea>
                        <button className="send-message-btn mt-3" type="submit">Submit Message</button>
                    </form>
                </Grid>
            </Grid>
        </section>
    );
};

export default ContactMe;