import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './MySkills.css';
import react from '../../../images/reactjs-icon.svg';
import node from '../../../images/nodejs-icon.svg';
import express from '../../../images/express-109.svg';
import mongo from '../../../images/mongodb.svg';
import material from '../../../images/material-ui-1.svg';
import bootstrap from '../../../images/bootstrap-5-1.svg';

const skills = [
    {
        name: 'React Js',
        img: react
    },
    {
        name: 'Express Js',
        img: express
    },
    {
        name: 'Node Js',
        img: node
    },
    {
        name: 'MongoDB',
        img: mongo
    },
    {
        name: 'Material UI',
        img: material
    },
    {
        name: 'Bootstrap',
        img: bootstrap
    },
]

const MySkills = () => {
    return (
        <section>
            <Container>
                <h2 className="text-center">My Skills</h2>
                <div className='button-container'>
                    <button className="skills-button">Web</button>
                    <button className="skills-button">Programming</button>
                    <button className="skills-button">Others</button>
                    <button className="skills-button">Tools</button>
                </div>
                <Grid container>
                    {
                        skills.map(skill => (
                            <Grid item lg={3} md={3} sm={4} xs={6}>
                                <div className="skill">
                                    <img src={skill.img} alt={skill.name} style={{width: '100%', height: '100px'}} />
                                    <p>{skill.name}</p>
                                </div>
                            </Grid>))
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default MySkills;