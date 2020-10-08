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




  return (
<>
    <div className="App-searchbar">

            <a >Search by game</a>
            <input type="text" value={this.state.sg} onChange={this.gameChange} />
      &emsp;
    <a >Search by user</a>
            <input type="text" value={this.state.su} onChange={this.userChange} />
      &emsp;

    <Button variant="secondary" size="lg" onClick={this.searchPress} > Search </Button>{''}

        </div>




</>

  );
}
}
export default Home;
