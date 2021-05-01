import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import './Banner.css'
import bannerImg from '../../../images/rakib (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const Banner = () => {
    return (
        <Container maxWidth="lg" className="banner">
            <Grid container className="grid-container">
                <Box clone order={{ xs: 2, sm: 1 }}>
                    <Grid item lg={7}>
                        <div className="banner-grid-left">
                            <h3 className="banner-title">Hello! I'm </h3>
                            <h1 className="banner-name">Rakib</h1>
                            <p className="banner-text">MERN stack web developer</p>
                            <p className="banner-text">A self motivated web developer. I have a deep interest in Javascript. I developed web applications. My core skills is based on Javascript and I love to solve problems using Javascript.</p>
                            <button className="resume-button">Get Resume  <FontAwesomeIcon icon={faDownload} /></button>
                        </div>
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2 }}>
                    <Grid item lg={5} className="banner-grid-right">
                        <img src={bannerImg} alt="bannerImg" />
                    </Grid>
                </Box>
            </Grid>
        </Container>
    );
};

export default Banner;