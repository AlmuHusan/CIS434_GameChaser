import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    async componentDidMount() {
        const response = await fetch('GameChasers/getLoginData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        });
        const data2 = await response.json();
        console.log(data2);
        console.log(data2[0].username);
        this.setState({ tableInfo: data2, loaded: true });
    }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    handleSubmit(event) {
        console.log(this.state.tableInfo);
        var data = this.state.tableInfo;
        console.log(data);
        const { email, password } = this.state;

        var i = 0;
        var flag = 0;
        while (i < 3) {
            if (data[i].username == (this.state.email)) {
                if (data[i].password == this.state.password) {
                    alert(this.state.email + " has been logged in");
                    flag = 1;
                    break;
                } else {
                    alert("incorrect password");
                    flag = 1;
                    break;
                }
                i++;
                //console.log(this.state.tableInfo);
            }
            i++;
        }
        if (flag == 0) {
            alert("user does not exist");
        }


}



    render() {


    return (
      <div>
      <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
