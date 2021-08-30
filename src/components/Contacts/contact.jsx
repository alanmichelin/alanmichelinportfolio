import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';    
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import { useStyles } from '../Home/home';

  const PaperComponent = () =>{
    const classes = useStyles();



    return(
<Grid container spacing={3}>
<Grid item xs={12} sm={12}>
    <Paper className={classes.paper} ><p style={{fontSize:'2em'}}><strong>Contact</strong></p></Paper>

</Grid>

{/* <Grid item xs={12} sm={6}/> */}

    <Contact icon={LinkedInIcon} link={'https://www.linkedin.com/in/alan-michelin'} description={'linkedin.com/in/alan-michelin/'}/>
    <Contact icon={MailOutlineIcon} link={'mailto:alangmichelin@gmail.com'} description={'alangmichelin@gmail.com'}/>
    <Contact icon={GitHubIcon} link={'https://github.com/alanmichelin'} description={'github.com/alanmichelin'}/>
    <Contact icon={PhoneIcon} link={''} description={'+54 9 11 6196-9356'}/>
    </Grid>
    )}

    export const Contact = (props) =>{
        const classes = useStyles();
        return(
        <Grid item xs={6} sm={6}>
        <Paper className={classes.paperButton} style={{marginTop:'5px', cursor:'pointer'}}>
            <props.icon className={classes.icon} onClick={()=>{
                (props.link!=='' ? window.open(props.link,'_blank') : <div/>)
                }}/>
            <p>{props.description}</p>
        </Paper>
    </Grid>)
    }
export default PaperComponent