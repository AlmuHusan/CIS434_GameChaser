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
import GetRegion from './components/getRegion';



class App extends React.Component{

  constructor(props) {
          super(props);
          this.state = {
              loaded: false,

              /*having 2 sets of these prevents typing in the text boxes from doing weird stuff, and makes
              the search button function properly*/
              userSearchText: '', userSearchActual: '', gameSearchText: '', gameSearchActual: '',
              searchIndex: 0,
          };


      }
      componentDidMount = async () => {
          this.setState({ loaded: true })
      }

      userChange = (uc) => this.setState({
          userSearchText: uc.target.value
      })
      gameChange = (gc) => this.setState({
          gameSearchText: gc.target.value
      })




      searchPress = (sp) => {
          if (((this.state.gameSearchText == undefined) || (this.state.gameSearchText == '')) && ((this.state.userSearchText == undefined) || (this.state.userSearchText == ''))) {
              this.setState({ searchIndex: 0 });
      }
          else if ((this.state.gameSearchText != '') && ((this.state.userSearchText == '') || (this.state.userSearchText==undefined))) {

              this.setState({ searchIndex: 1});
              this.setState({ gameSearchActual: this.state.gameSearchText});
      }
          else if ((this.state.gameSearchText == '') && (this.state.userSearchText != '')) {

              this.setState({ userSearchActual: this.state.userSearchText });
              this.setState({ searchIndex: 2 });
      }
      else {
              this.setState({ searchIndex: 3 });
              this.setState({ gameSearchActual: this.state.gameSearchText });
              this.setState({ userSearchActual: this.state.userSearchText });
      }
      }



  render(){
    let filteredTable = this.props.tableInfo.filter(
            (items) => {
                if (this.state.searchIndex == 0) {
                    return items;
                }
                else if (this.state.searchIndex == 1) {
                    return items.Game.toLowerCase().indexOf(this.state.gameSearchActual.toLowerCase()) !== -1
                }

                else if (this.state.searchIndex == 2) {
                    return items.Name.toLowerCase().indexOf(this.state.userSearchActual.toLowerCase()) !==-1
                }

                else if (this.state.searchIndex == 3) {
                    while ((items.Game.toLowerCase().indexOf(this.state.gameSearchActual.toLowerCase()) !== -1) &&
                        (items.Name.toLowerCase().indexOf(this.state.userSearchActual.toLowerCase()) !== -1)) {
                            return items;
                    }


                }
            }
        );

        const items = filteredTable;

    const itemList = items.map((items,index) =>

    <tr key={index}>
    <td>{items.Game.toString()}</td>
    <td>{items.Name.toString()}</td>
    <td>{items.Size.toString()}</td>
    <td>{items.Time.toString()}</td>
    <td>{items.Notes.toString()}</td>
  </tr>);


  const Search = ({  }) => {

    return (
  <>
      <div className="App-searchbar">

              <a >Search by game</a>
              <input type="text" value={this.state.sg} onChange={this.gameChange} />

              <a >Search by user</a>
              <input type="text" value={this.state.su} onChange={this.userChange} />

      <Button variant="secondary" size="lg" onClick={this.searchPress} > Search </Button>{''}

          </div>




  </>

    );
  };

  return (

    <div className="App">
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
        <Route exact path="/home" render={(props) => <Search {...props} />} />
      </Switch>
      <Switch>
        <Route exact path="/home" render={(props) => <Table {...props} itemList={itemList}/>} />
      </Switch>
    </Router>


    </div>
  );

}

}

const Table = ({ itemList }) => {
  return (
    <>


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
