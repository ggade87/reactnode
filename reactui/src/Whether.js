import React from "react";
import axios from "axios";
export default class Whether extends React.Component {
  constructor() {
    super();
    this.state = {
      Weather: "No set",
    };
  }
  componentDidMount = () => {
    /* axios.get("/getWhetherNewyork").then((response) => {
      console.log(response.data.temp_c);
      
      this.setState({ Weather: response.data.temp_c });
    });
      */
  };

  handleButtonClick = () => {
    axios
      .get("/getWhetherNewyork", {
        params: {
          city: "New York",
        },
      })
      .then((response) => {
        console.log(response.data.temp_c);
        this.setState({ Weather: response.data.temp_c });
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          Get weather in ney york
        </button>
        <h1>The weather in new york is: {this.state.Weather}</h1>
      </div>
    );
  }
}
