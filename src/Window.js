import React, { Component } from "react";
import { Window, TitleBar } from "react-desktop/macOs";
import Draggable from "react-draggable";

// Default style for window
const windowStyle = {
  position: "absolute"
};

export default class extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      isHidden: false
    };

    // Bind "this"
    this.close = this.close.bind(this);
  }

  /**
   * Closes the window.
   */
  close() {
    this.setState({ isHidden: true });
  }

  render() {
    // Set style
    const height = window.innerHeight / 2;
    const width = window.innerWidth / 2.5;
    const style = {
      ...windowStyle,
      left: (window.innerWidth - width) / 2 + "px",
      top: (window.innerHeight - height) / 2 + "px"
    };

    return (
      <Draggable>
        <div className="window">
          <Window
            style={style}
            chrome
            height={`${height}px`}
            width={`${width}px`}
            padding="10px"
            background={this.props.background}
            hidden={this.state.isHidden}
          >
            <TitleBar
              title={this.props.name}
              controls
              onCloseClick={this.close}
            />
            {this.props.children}
          </Window>
        </div>
      </Draggable>
    );
  }
}
