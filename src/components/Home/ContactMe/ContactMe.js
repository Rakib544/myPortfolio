import { Grid } from '@material-ui/core';
import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
    return (
        <section>
            <h2 className="text-center">Get In Touch</h2>
            <div className="contact-container">
                <form>
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
                    <button className="resume-button mt-3" type="submit">Submit Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;