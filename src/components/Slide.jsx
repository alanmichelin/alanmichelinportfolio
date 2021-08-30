import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const Slide = () =>{



const useStyles = makeStyles({
  root: {
    height: 300,
    color: '#52af77'
  }
});
function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 80,
    label: 'Inicio',
  },
  {
    value: 60,
    label: 'Contacto',
  },
  {
    value: 40,
    label: 'Sobre mi',
  },
  {
    value: 20,
    label: 'Proyectos',
  },
];


  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        Temperature
      </Typography>
      <div className={classes.root}>
        <Slider
          track="inverted"
          orientation="vertical"
          defaultValue={100}
          max={80}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={20}
          // valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    </React.Fragment>
  );


}
export default Slide