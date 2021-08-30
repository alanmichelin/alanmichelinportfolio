    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
    import Grid from '@material-ui/core/Grid';
    import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'
    import VerticalLinearStepper from './stepper';
    import FileCopyIcon from '@material-ui/icons/FileCopy';
    import PaperComponent from '../Contacts/contact';
    import Projects from '../Projects/projects';
    import Skills from '../Aboutme/aboutme';
    import PersonIcon from '@material-ui/icons/Person';
    import Resume from '../Projects/resume.png'
    import ResumePDF from '../Projects/AlanMichelinResume.pdf'
    import MyPhoto from '../Projects/me.png'
    export const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      icon:{
            color: '#55a630',
            fontSize: '5em',
      },
      li:{
        marginTop:'5px',
        '&:hover':{
          textShadow: '0 0 10px #FFFFFF, 0px 0px 10px rgba(121,255,110,0.5)'
        },
      },
      paper: {
        boxShadow: '0 0 5px #FFFFFF, 3px 3px 5px #79FF6E',
        marginTop:'3em',
        backgroundColor:'#495057',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      paperButton: {
        boxShadow: '0 0 5px #FFFFFF, 3px 3px 5px #79FF6E',
        marginTop:'3em',
        backgroundColor:'#495057',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        '&:hover':{
          backgroundColor:'#000012',
          textShadow: '0 0 10px #FFFFFF, 0px 0px 10px rgba(121,255,110,0.5)',
          boxShadow:'0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18'
      }
      },
    }));
    
    const Home = () =>{
      const classes = useStyles();
    
      return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            
                <Grid item xs={12}>
                <Paper className={classes.paper} variant="h1" component="h2">
                    <h1>Alan Michelin</h1>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <PersonIcon className={classes.icon}/>
                    <h2 style={{fontSize:'2em'}}>About Me</h2>
                    <img style={{height:'28vh', borderRadius:'50%'}} src={MyPhoto} alt="me" srcset="" />
                    <h3>Welcome to my portfolio! <br/></h3>
                    <p> My name is Alan Michelin. I'm 21 years old, studying System Analyst. <br/>
                        I started to study programming in middle 2020 by watching Udemy courses and reading documentations. <br/>
                        I hope you have a good experience looking at my portfolio and you like my projects!
                    </p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paperButton} style={{cursor:'pointer'}} onClick={()=>{window.open(ResumePDF,"_blank",'fullscreen=yes')}}>
                    <br/>
                    <FileCopyIcon className={classes.icon}/>
                    <h2 style={{fontSize:'2em'}}>Download my resume</h2>
                    <img style={{height:'30vh'}} src={Resume} alt="Resume" srcset="" />
                    
                    <h3>Click here to download <br/></h3>
                    <br/><br/>
                    </Paper>
                </Grid>


           
            

                <Grid item xs={12} sm={6}>
            <PaperComponent/>
            <Skills/>
                </Grid>
            
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                  <DeveloperModeIcon className={classes.icon}/>
                  
                  <h2 style={{fontSize:'2em'}}>My roadmap on Web Development.</h2>
                  <VerticalLinearStepper />
                  </Paper>
            </Grid>
            

            <Projects/>
            
          </Grid>
        </div>
      );
    }
    
export default Home