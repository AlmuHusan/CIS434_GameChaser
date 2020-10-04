import React from 'react';
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

function btPress() {
    alert('Code to do here!');
}

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }
  componentDidMount= async()=>{
    this.setState({loaded:true})
}
  render(){
    const items = this.props.tableInfo;

    const itemList = items.map((items,index) =>

    <tr key={index}>
    <td>{items.Game.toString()}</td>
    <td>{items.Name.toString()}</td>
    <td>{items.Size.toString()}</td>
    <td>{items.Time.toString()}</td>
    <td>{items.Notes.toString()}</td>
  </tr>);



  return (

    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="home">Game Chasers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="about">About</Nav.Link>
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
        <Route path="/home" render={(props) => <Table {...props} itemList={itemList}/>} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>


    </div>
  );
}

}

const Table = ({ itemList }) => {
  return (
    <>




    <div className="Home-searchbar">

      <a >Search by game</a>
      <input type="text" />
        &emsp;
      <a >Search by user</a>
      <input type="text" />
        &emsp;
      <Button variant="secondary" size="lg" onClick={btPress} > Search </Button>{''}
    </div> {/* End of searchbar */}

    <div className="Home-table">
      <table style={{width:"100%",border: "1px solid black",borderCollapse: "collapse"}} >
          <tr>
            <th>Game</th>
            <th>Name</th>
            <th>Size</th>
            <th>Time</th>
            <th>Notes</th>
          </tr>

          <React.Fragment>
              {itemList}
              </React.Fragment>


      </table>
    </div>
    </>
  );
};




export default App;
