
import './App.css';
import { Grid } from '@material-ui/core';
import Home from './components/Home/home';

function App() {
  return (
    <Grid container style={{backgroundColor:'#212529'}}>
        <Grid item xs={1}>

        </Grid>
        <Grid  item xs={10}>

      <Home/>
   <br/><br/>
        </Grid>

    <Grid item xs={8}>

    </Grid>
    </Grid>
  );
}

export default App;
