import React, { Component } from "react";
import "./style/TypingText.css";

class TypingText extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      message: "",
      index: 0
    };
  }

  /**
   * Actions to execute after the component is mounted.
   */
  componentDidMount() {
    // Execute typeText by interval
    this.timerID = setInterval(() => this.typeText(), this.props.speed);
  }

  /**
   * Actions to execute after the component is unmounted.
   */
  componentWillUnmount() {
    // Clear the interval
    clearInterval(this.timerID);
  }

  /**
   * Types the text letter by letter.
   */
  typeText() {
    // When the text has been entirely written, clear the interval
    if (this.state.index >= this.props.text.length) {
      clearInterval(this.timerID);
      return;
    }

    // Append one letter to the message
    this.setState({
      message: this.state.message + this.props.text[this.state.index],
      index: this.state.index + 1
    });
  }

  render() {
    // Set style from props
    const divStyle = {
      color: this.props.color
    };

    return (
      <div style={divStyle}>
        <pre className="typedText">{this.state.message}</pre>
      </div>
    );
  }
}
export default TypingText;
