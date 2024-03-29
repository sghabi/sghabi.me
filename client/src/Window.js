import React, { Component } from "react";
import { Window, TitleBar } from "react-desktop/macOs";
import Draggable from "./Draggable";

// Default style for window
const windowStyle = {
  position: "absolute"
};

class MyWindow extends Component {
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
    if (this.props.onClose) this.props.onClose();
    this.setState({ isHidden: true });
  }

  render() {
    // Set style
    const height = this.props.height;
    const width = this.props.width;

    const style = {
      ...windowStyle,
      left: window.innerWidth/4 ,
      top: window.innerHeight/4
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

export default MyWindow;
