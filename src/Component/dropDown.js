import React from 'react';
import GetRegion from './getRegion';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default class dropDown extends React.Component{
    
    state = {
        open: false,
        region: <GetRegion/>,
      };
    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
      };
    handleChangeAsia = () =>{
        this.setState(state => {
            return{
                region: "Asia",
                open: !state.open,
            };
        });
    };
    handleChangeCentral = () =>{
        this.setState(state => {
            return{
                region: "Central",
                open: !state.open,
            };
        });
    };
    handleChangeEastCoast = () =>{
        this.setState(state => {
            return{
                region: "East Coast",
                open: !state.open,
            };
        });
    };
    handleChangeEurope = () =>{
        this.setState(state => {
            return{
                region: "Europe",
                open: !state.open,
            };
        });
    };
    handleChangeWestCoast = () =>{
        this.setState(state => {
            return{
                region: "West Coast",
                open: !state.open,
            };
        });
    };


    render(){
        
        return (
            <div className="container">
                <button type="button" class="btn btn-secondary dropdown-toggle col-lg" onClick={this.handleButtonClick}>
                    {this.state.region}
                    <span class="caret"></span>
                </button>
                {this.state.open ? (
                    <div class="menu dropdown button boarder border-secondary bg-light rounded Fixed">
                        
                        <div><button onClick={this.handleChangeAsia} class="button btn boarder bg-light col">Asia</button></div>
                        <div><button onClick={this.handleChangeCentral} class="button btn boarder bg-light col">Central</button></div>
                        <div><button onClick={this.handleChangeEastCoast} class="button btn boarder bg-light col">East Coast</button></div>
                        <div><button onClick={this.handleChangeEurope} class="button btn boarder bg-light col">Europe</button></div>
                        <div><button onClick={this.handleChangeWestCoast} class="button btn boarder bg-light col">West Coast</button></div>
                        
                    </div>
                )
                :(null)
                }
            </div>
        )
    }
}
