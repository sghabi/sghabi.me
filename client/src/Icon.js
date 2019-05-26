import React, { Component } from "react";
import Draggable from "react-draggable";
import PdfReader from "./PdfReader";
import ImgReader from "./ImgReader";
import "./style/Icon.css";

class Icon extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      reader: false
    };

    // Set the props for the reader
    const readerProps = {
      url: this.props.url,
      onClose: () => this.closeReader(),
      name: this.props.name
    };

    // Map each file type to an icon and a component type
    this.map = {
      pdf: {
        path: "/ressources/icons/pdf.png",
        component: <PdfReader {...readerProps} />
      },
      jpg: {
        path: "/ressources/icons/jpg.png",
        component: <ImgReader {...readerProps} />
      }
    };

    // Bind "this"
    this.openReader = this.openReader.bind(this);
    this.closeReader = this.closeReader.bind(this);
  }

  /**
   * Open the reader.
   */
  openReader() {
    this.setState({ reader: true });
  }

  /**
   * Close the reader.
   */
  closeReader() {
    this.setState({ reader: false });
  }

  render() {
    // Get the information about the icon, if the type is not handled render nothing
    const icon = this.map[this.props.type];
    if (icon == null) return <></>;
    return (
      <>
        <Draggable>
          <div className="icon">
            <img
              className="iconImg"
              src={icon.path}
              draggable="false"
              onDoubleClick={() => this.openReader()}
            />
            <p className="iconTitle">{this.props.name}</p>
          </div>
        </Draggable>
        {this.state.reader && icon.component}
      </>
    );
  }
}

export default Icon;
