import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {useStyles} from '../Home/home'
import CodeIcon from '@material-ui/icons/Code';

const Skills = () =>{
    const classes = useStyles();

    return(
        <Grid item xs={12} sm={12}>
        <Paper className={classes.paper}>
            <CodeIcon className={classes.icon}/>
            <h2 style={{fontSize:'2em'}}>Skills</h2>
            <div style={{textAlign:'left'}}>
            <h3 style={{marginLeft:'40px'}}>Soft</h3>
            <ul style={{listStyle:'none'}}>
                <li className={classes.li}>Attentive and Versatile</li>
                <li className={classes.li}>Good Communication</li>
                <li className={classes.li}>Multi-tasking</li>
                <li className={classes.li}>Collaboration and teamwork</li>
                <li className={classes.li}>Problem solving and creativity</li>
                <li className={classes.li}>Patience</li>
            </ul>
            </div>
            <div style={{textAlign:'end',marginRight:'40px'}}>
            <h3 >Technical </h3>
            <ul style={{listStyle:'none'}}>
                <li className={classes.li} >Web development knowledge</li>
                <li className={classes.li}>Use of Object Oriented Paradigm</li>
                <li className={classes.li}>Programming languages: HTML, CSS, JAVA,<br/> JavaScript, React and NodeJS</li>
                <li className={classes.li}>Software: Jira, Slack, TeamViewer, VSCode</li>

            </ul>

            </div>
            </Paper>
        </Grid>
    )
}

export default Skills