import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './Banner.css'
import bannerImg from '../../../images/rakib.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const Banner = () => {
    return (
        <Container maxWidth="lg" className="banner">
            <Grid container spacing={3} className="grid-container">
                <Grid item lg={6}>
                    <div className="grid-left">
                        <h3 className="banner-title">Hello! I'm </h3>
                        <h1 className="banner-name">Rakib</h1>
                        <p className="banner-text">I am MERN stack web developer</p>
                        <button className="resume-button">Get Resume  <FontAwesomeIcon icon={faDownload} /></button>
                    </div>
                </Grid>
                <Grid item lg={6}>
                    <img src={bannerImg} alt="bannerImg" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;