import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.js';
import App from './App';



function btPress() {
    alert('Code to do here!');
}


function log() {

}



class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }
  componentDidMount= async()=>{
    this.setState({loaded:true})
}
  render(){


  return (

    <div className="Home">
          <div className= "Home-header" >

                <h1 style={{display:"inline", alignItems:"center"}}> GAME CHASERS!</h1>

                <Button style={{ alignItems:"right"}} variant="secondary" size="sm" onClick={log} > Login </Button>{''}
           <label style={{ display: "inline", float: "right" }}>Region: NA</label>

          </div>{/*End of header*/}

          <div className="Home-searchbar">

            <a >Search by game</a>
            <input type="text" />
              &emsp;
            <a >Search by user</a>
            <input type="text" />
              &emsp;
            <Button variant="secondary" size="lg" onClick={btPress} > Search </Button>{''}
          </div> {/* End of searchbar */}



    </div>
  );
}
}
export default Home;
