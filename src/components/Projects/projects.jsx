import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PongJS from './PongJS.png'
import VideoDownloader from './videodownloader.png'
import Ecommerce from './myecommerce.png'
import { useStyles } from '../Home/home';
import { Contact } from '../Contacts/contact';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
  const Projects = () =>{
    const classes = useStyles();
    return(
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} ><p style={{fontSize:'24px'}}><strong>Projects:</strong></p></Paper>
            </Grid>
            <Project name={`PongJS`} description={`PongJS is just the PONG videogame made with pure JavaScript.<br/>
                My objective was to apply all my html and css knowledge adding some logic with JavaScript while i experimented with flexbox, positioning, zIndex, etc. `} img={PongJS} tech={`HTML - CSS - JavaScript`} linkDemo={'https://alanmichelin.github.io/pongjs/'} linkSrc={'https://github.com/alanmichelin/pongjs'}/>
            <Project name={`VideoDownloader`} description={`As title says, this is an app that can download videos from Facebook, Instagram and Youtube. <br/>
                I've learned a lot while doing this app, since everything must be asynchronic. <br/>The way it works with Facebook and Instagram, is by intercepting the media response of a video, getting the mp4 and creating a file.
                With youtube it was a lot easier because i used a library`} img={VideoDownloader} tech={`JavaScript, NodeJS, Puppeteer, YTDL-Core`} linkDemo={'https://github.com/alanmichelin/VideoDownloader/releases/tag/1.0.1beta'} linkSrc={'https://github.com/alanmichelin/VideoDownloader'}/>
            <Project name={`FrontEnd e-commerce`} description={`This is the last project i did. With this one i've learned a lot about React foundaments(split code in components, useState, useEffect, optimizing and making reusable code) along with some JavaScript logic. <br/>
                The way it works is by fetching a random food api, you choose any category, it fetchs the api again, and display new results.`} img={Ecommerce} tech={`JavaScript, React, Redux, React-Bootstrap`} linkDemo={'https://randomapiecommerce.netlify.app/'} linkSrc={'https://github.com/alanmichelin/frontend-ecommerce'}/>
    </Grid>
    )}

    const Project = (props) =>{
        const classes = useStyles();
        return(
        <Grid item xs={12} sm={4}>
                <Paper className={classes.paper} style={{marginTop:'5px'}}>
                <h2>{props.name}</h2>
                <div style={{display:'block'}}>
                <p>{props.description}
                </p>
                </div>
                <img className={classes.img} style={{maxHeight:'250px', maxWidth:'350px',minHeight:'250px'}} src={props.img} alt={props.name} />
                <p>Technologies used: <br/>
                {props.tech}
                </p>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                {/* <Contact/> */}
                <Contact icon={PlayCircleOutlineIcon} link={props.linkDemo} description={'View live demo'} />

                {/* <Contact/> */}
                <Contact icon={FileCopyIcon} link={props.linkSrc} description={'Go to source code'}/>
                </div>
                {/* <Contact/> */}



                
                </Paper>
            </Grid>)
    }
export default Projects