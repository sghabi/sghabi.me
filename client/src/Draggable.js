import React, { Component } from "react";
import Draggable from "react-draggable";

class MyDraggable extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
        zIndex: 0
    };
  }

  onClick = () => {
    this.setState({
        zIndex: this.state.zIndex + 1
    });
  }

  render() {
    return (
        <div className="draggable" style={{zIndex: this.state.zIndex, position: "relative"}} onClick={this.onClick}>
            <Draggable>
                {this.props.children}
            </Draggable>
        </div>
    );
  }
}

export default MyDraggable;
