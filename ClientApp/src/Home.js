import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.js';
import App from './App';
import Background from './assets/test.gif';
import PopupForm from './components/PopupForm';

var sectionStyle = {
  width: "auto",
  height: "768px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Background})`
};


class Home extends React.Component{

      constructor(props) {
          super(props);
          this.state = {
              loaded: false,
              tableInfo:null,
              /*having 2 sets of these prevents typing in the text boxes from doing weird stuff, and makes
              the search button function properly*/
              userSearchText: '', userSearchActual: '', gameSearchText: '', gameSearchActual: '',
              searchIndex: 0,
              search: this.props.rgn,
              };
              } 
    async componentDidMount() {
        const response = await fetch('GameChasers/getTableData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        });
        const data = await response.json();
        console.log(data)
        this.setState({ tableInfo: data, loaded: true });
      }
    componentWillUnmount() {
        this._isMounted = false;
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

    render() {
        var itemList = <tr></tr>;
        if (this.state.loaded) {
            let filteredTable = this.state.tableInfo.filter(
                (items) => {
                    if (this.state.searchIndex == 0) {
                        return items;
                    }
                    else if (this.state.searchIndex == 1) {
                        return items.Game.toLowerCase().indexOf(this.state.gameSearchActual.toLowerCase()) !== -1
                    }

                    else if (this.state.searchIndex == 2) {
                        return items.Name.toLowerCase().indexOf(this.state.userSearchActual.toLowerCase()) !== -1
                    }

                    else if (this.state.searchIndex == 3) {
                        while ((items.Game.toLowerCase().indexOf(this.state.gameSearchActual.toLowerCase()) !== -1) &&
                            (items.Name.toLowerCase().indexOf(this.state.userSearchActual.toLowerCase()) !== -1)) {
                            return items;
                        }


                    }  
                }
            );
            filteredTable = this.state.tableInfo.filter(
                (items) => {
                    if (this.state.search === 'All Region') {
                        return items;
                    } else {
                        return items.region === this.state.search;
                    }
                }
            );
            


            const items = filteredTable;

            itemList = items.map((items, index) =>
                
                <tr key={index}>
                        <td>{items.game.toString()}</td>
                        <td>{items.name.toString()}</td>
                        <td>{items.size.toString()}</td>
                        <td>{items.time.toString()}</td>
                        <td>{items.summary.toString()}</td>
                    
                </tr>);
                

              console.log(itemList);
              
        }
        return (
                  <div className="App">
                      <section style={sectionStyle}>

                          <div className="App-searchbar">

                              <a >Search by game</a>
                              <input type="text" value={this.state.sg} onChange={this.gameChange} />
                              &emsp;
              <a >Search by user</a>
                              <input type="text" value={this.state.su} onChange={this.userChange} />
                              &emsp;

              <Button variant="secondary" size="lg" onClick={this.searchPress} > Search </Button>{''}

                          </div>
                          <div style={{ width: "100%", borderCollapse: "collapse" }}><PopupForm /></div>
                          <div className="App-table">
                              <table style={{ width: "100%", borderCollapse: "collapse" }} >
                            <tr style={{ color: "lightgreen", weight: "italic" }}>
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
                                      : <React.Fragment></React.Fragment>
                                  }
                              </table>
                          </div>
                      </section>
                  </div>
              );
          

    }

}
export default Home;
