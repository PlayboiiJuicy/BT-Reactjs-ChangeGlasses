import React, { Component } from "react";
import Model from "./Model";
import data from "./dataGlasses.json";
import bgImg from "../bg.jpg";
import Glasses from "./Glasses";
export default class ChangeGlasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGlasses: data[0],
    };
  }

  handleGlasses = (glasses) => {
    console.log(glasses);
    this.setState({ selectedGlasses: glasses });
  };

  render() {
    return (
      <div style={{ backgroundImage: `url(${bgImg})`, minHeight: "100vh" }}>
        <header style={{ backgroundColor: `rgb(0, 0, 0, 0.8)` }}>
          <h3 className="text-center py-4 text-white container">
            Try Glasses App Online
          </h3>
        </header>
        <Model selectedGlasses={this.state.selectedGlasses} />
        <Glasses data={data} onSelect={this.handleGlasses} />
      </div>
    );
  }
}
