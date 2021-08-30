import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const useStyles = makeStyles((theme) => ({
  root: {
    color:'blue',
    width: '50%',
    backgroundColor:'#495057',
    paddingLeft:'25%'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor:'#495057',
  },
  activeStep:{
      color:'#ced4da'
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
    backgroundColor:'#495057',
    color:'#ced4da'
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor:'#495057',

  },
  icon:{
    color: '#55a630',
  "&$activeIcon": {
    color: theme.palette.secondary.main
  },
  "&$completedIcon": {
    color: '#55a630'
  }
},
activeIcon: {},
completedIcon: {}
}));

function getSteps() {
  return ['HTML', 'CSS', 'JavaScript','NodeJS','React'];
}


const Steps = (props) =>{
    return (
        <p style={{color:'#ced4da', fontSize:'18px'}}>{props.text}</p>   
    )
}
export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const playAnimation = () =>{
        for(var i =0; i<5;i++){
          setTimeout(handleNext,i * 2000)
        }
        handleReset()
        
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      
    <div className={classes.root}>
        {/* <button onClick={playAnimation}>Play</button> */}
            <div>
            <PlayCircleOutlineIcon style={{cursor:'pointer',fontSize:'17vh',color:'#ced4da'}} onClick={playAnimation}/>
            <p style={{marginTop:'0'}}>Play animation</p>
            </div>
      <Stepper style={{backgroundColor:'#495057', marginBottom:'220px',marginLeft:'auto',marginRight:'auto',width:'50%'}} activeStep={activeStep}  orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} style={{textAlign:'left'}}>
            <StepLabel  text StepIconProps={{ classes:{ root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }}><Steps text={label}/> </StepLabel>
            <StepContent  >
            </StepContent>
          </Step>
        ))}
      </Stepper>

    </div>
  );
}