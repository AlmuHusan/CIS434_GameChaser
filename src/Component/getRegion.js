import React from 'react';

export default class getRegion extends React.Component{
      state = {
        loading: true,
        ip : null,
        timezone : null,
      };
    
      async componentDidMount() {
        alert("This website is using your location to select server")
        const url = "https://geo.ipify.org/api/v1?apiKey=at_gFewbGeplb0gcg0S6HynNZZA5N6gk&ipAddress=";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ ip: data.ip, loading: false, timezone: data.location.timezone});
      }
    
      render() {
        
        if (this.state.loading) {
          return <div>loading...  </div>;
        }
        if (!this.state.ip) {
          return <div>didn't get a ip  </div>;
        }
        if(this.state.timezone == "-04:00"){
            return <div>East Coast  </div>
        }
        if(this.state.timezone == "-05:00"){
            return <div>Central  </div>
        }
        if(this.state.timezone == "-07:00" || "-06:00"){
            return <div>West Coast  </div>
        }
        if(this.state.timezone == "+01:00" || "+02:00"){
          return <div>Europe  </div>
        }
        if(this.state.timezone == "+08:00" || "+09:00" || "+07:00"){
          return <div>West Coast  </div>
        }
      }
}