import React, { Component } from "react";
import Window from "./Window.js";
import "./style/ImgReader.css";

class ImgReader extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Window onClose={this.props.onClose} name={this.props.name}>
        <img className="imgReader" src={this.props.url} />
      </Window>
    );
  }
}

export default ImgReader;
