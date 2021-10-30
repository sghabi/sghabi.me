import React, { Component } from "react";
import Window from "./Window.js";
import TypingText from "./TypingText";
import Icon from "./Icon.js";
import WelcomeMessage from "./ressources/welcome.js";
import { getFilesMeta } from "./apiHelper";

class Desktop extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  /**
   * Get the fils metadata from the server to display the corresponding icons.
   */
  async componentDidMount() {
    const res = await getFilesMeta();
    this.setState({ files: res.files });
  }

  terminalStyle = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2,
  }

  render() {
    return (
      <>
        <Window background="#000" name="Terminal" {...this.terminalStyle} >
          <TypingText speed="50" text={WelcomeMessage} color="#56CE06" />
        </Window>
        {this.state.files.map(file => {
          return <Icon name={file.name} type={file.type} url={file.url} />;
        })}
      </>
    );
  }
}

export default Desktop;
