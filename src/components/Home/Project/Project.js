import { Accordion, AccordionDetails, AccordionSummary, Container, Grid } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import yacht from '../../../images/yacht-service.png';
import theGem from '../../../images/theGem.png';
import anytimeBuys from '../../../images/anytime-buys.png';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const portfolio = [
    {
        img: yacht,
        title: 'Yacht Rental Service',
        subtitle: 'A rental service website where user can rent yacht with different packages.',
        feature1: 'Admin can add and delete service',
        feature2: 'User can order service',
        feature3: 'User can write review',
        technology: 'React Js, Node Js, MongoDB, Express Js, React Router DOM, Firebase Authentication',
        repo: 'https://github.com/Rakib544/yatch-service-application-client',
        liveSite: 'https://yacht-rental-service.web.app/'
    },
    {
        img: theGem,
        title: 'TheGem',
        subtitle: 'A restaurant website where user can order food and payment here',
        feature1: 'Admin can food and delete service',
        feature2: 'User can order food',
        feature3: 'User can increase and decrease selected food quantity.',
        technology: 'React Js, Node Js, MongoDB, Express Js, React Router DOM, Firebase Authentication',
        repo: 'https://github.com/Rakib544/TheGem',
        liveSite: 'https://thegem-5d710.web.app/'
    },
    {
        img: anytimeBuys,
        title: 'Anytime-Buy',
        subtitle: 'An e-commerce website where user can order products',
        feature1: 'Admin can add and delete products',
        feature2: 'User can order product',
        feature3: 'User can login with firebase authentication',
        technology: 'React Js, Node Js, MongoDB, Express Js, React Router DOM, Firebase Authentication',
        repo: 'https://github.com/Rakib544/anytime-buys-clinet',
        liveSite: 'https://anytime-buys.web.app/'
    },
]

const Project = () => {
    return (
        <section id="projects">
            <Container maxWidth="lg">
                <h2 className="text-center">My Portfolio</h2>
                <Grid container>
                    {
                        portfolio.map((item, index) => (
                            <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
                                <div className="project-container">
                                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
                                    <h2>{item.title}</h2>
                                    <h3>{item.subtitle}</h3>
                                    <Accordion style={{backgroundColor: '#2A2C39', color: '#fff'}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            View Details
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <h3>Overview: </h3>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>1. {item.feature1}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>2. {item.feature2}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>3. {item.feature3}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <h3>Technology Used</h3>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>{item.technology}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <a href={item.repo} target="_blank" rel="noreferrer"><FontAwesomeIcon className="project-icon" icon={faGithub} /></a>
                                            <a href={item.liveSite} target="_blank" rel="noreferrer"><FontAwesomeIcon className="project-icon" icon={faExternalLinkAlt} /></a>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Project;