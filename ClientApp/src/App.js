import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import Blank from './blank.js';
import Registration from './Registration.js';
import GetRegion from './components/getRegion';







class App extends React.Component{

  constructor(props) {
          super(props);
          this.state = {
              loaded: false,
              regions: 'All Region',

          };


      }
      componentDidMount = async () => {
          this.setState({ loaded: true })
      }


  handle
  render(){



  return (

    <div className="App">

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Game Chasers </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
            <NavDropdown title={this.state.regions} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => this.setState({ regions: 'NA' })}>NA</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => this.setState({ regions: 'EU' })}>EU</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => this.setState({ regions: 'Asia' })}>Asia</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => this.setState({ regions: 'All Region' })}>All Region</NavDropdown.Item>
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
        <Route exact path="/" component={() => <Home rgn={this.state.regions} />} />
      </Switch>

    </Router>

 </div>

  );

}

}







export default App;
