import React, { Component } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import Window from "./Window.js";
import "./style/PdfReader.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class PdfReader extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      numPages: null,
      pageNumber: 1
    };

    // Bind "this"
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  /**
   * Update the total number of pages when load is successfull.
   */
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  /**
   * Append a new page component for each pdf page.
   */
  paginate() {
    let pages = [];
    for (let i = 1; i <= this.state.numPages; i++) {
      pages.push(<Page pageNumber={i} />);
    }
    return pages;
  }

  render() {
    return (
      <Window onClose={this.props.onClose} name={this.props.name}>
        <Document
          file={this.props.url}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {this.paginate()}
        </Document>
      </Window>
    );
  }
}

export default PdfReader;
