import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DropDown from './Component/dropDown';

function btPress() {
    alert('Code to do here!');
}


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };  
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
  </tr>
  );

  return (
  	
    <div className="App">
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
    </div>
  );
}
}
export default App;
