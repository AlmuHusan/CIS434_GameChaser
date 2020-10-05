import React from 'react';

 class GetRegion extends React.Component{
      state = {
        loading: true,
        ip : null,
        timezone : null,
      };
    
      async componentDidMount() {
        const url = "https://geo.ipify.org/api/v1?apiKey=at_gFewbGeplb0gcg0S6HynNZZA5N6gk&ipAddress=";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ ip: data.ip, loading: false, timezone: data.location.timezone});
      }
    
      render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
        if (!this.state.ip) {
          return <div>didn't get a ip</div>;
        }
        if(this.state.timezone == "-04:00"){
            return <div>East Coast</div>
        }
        if(this.state.timezone == "-05:00"){
            return <div>Central</div>
        }
        if(this.state.timezone == "-07:00" || "-06:00"){
            return <div>West Coast</div>
        }
        
      }
}
export default GetRegion