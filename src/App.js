import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
<<<<<<< HEAD
import DropDown from './Component/dropDown';
=======
import Login from './Login.js';
import Home from './Home.js';
import Blank from './blank.js';
import Registration from './Registration.js';
import GetRegion from './components/getRegion';
>>>>>>> master



class App extends React.Component{

  constructor(props) {
          super(props);
          this.state = {
              loaded: false,
              region: <GetRegion/>

          };


      }
      componentDidMount = async () => {
          this.setState({ loaded: true })
      }


  render(){



  return (

    <div className="App">
<<<<<<< HEAD
          <div className= "App-header" >
                <h1 style={{display:"inline", alignItems:"center"}}> GAME CHASERS!</h1>
                <h1 style={{display:"inline", alignItems:"center"}}><DropDown/></h1> 
                

           
          </div>{/*End of header*/}

          <div className="App-searchbar">
             
            <a >Search by game</a>
            <input type="text" />
              &emsp;
            <a >Search by user</a>
            <input type="text" />
              &emsp;
            <Button variant="secondary" size="lg" onClick={btPress} > Search </Button>{''}
          </div> {/* End of searchbar */}

          <div className="App-table">
            <table style={{width:"100%",border: "1px solid black",borderCollapse: "collapse"}} >
                <tr>
                  <th>Game</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Time</th>
                  <th>Notes</th>
                </tr>
                {this.state.loaded ?
                <React.Fragment >
                    {itemList}
                    </React.Fragment>
                  :<div></div>
                  }
            </table> 
          </div>
=======
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="home">Game Chasers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <NavDropdown title="Region" id="collasible-nav-dropdown">
            <NavDropdown.Item href="3.1">NA</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="3.2">SA</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="3.3">Asia</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="3.4">EU</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route exact path="/home" component={() => <Home  tableInfo={this.props.tableInfo} />} />
      </Switch>

    </Router>


>>>>>>> master
    </div>
  );

}

}







export default App;
