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
          this.setState({ ip: data.ip, loading: false, timezone: data.location.timezone });
          console.log(this.state.data)
      }

      render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
        if (!this.state.ip) {
          return <div>didn't get a ip</div>;
        }
          if (this.state.timezone == "-03:00" || "-04:00" || "-05:00" || "-06:00" || "-07:00" || "-08:00" || "-09:00" || "-10:00") {
          return <div>NA</div>
        }
          if (this.state.timezone == "+00:00" || "+01:00" || "+02:00" || "+03:00" || "+04:00" || "+05:00" || "+06:00") {
          return <div>EU</div>
        }
        if (this.state.timezone == "+07:00" || "+08:00" || "+09:00" || "+10:00" || "+11:00" || "+12:00") {
          return <div>Asia</div>
        }


      }
}
export default GetRegion
