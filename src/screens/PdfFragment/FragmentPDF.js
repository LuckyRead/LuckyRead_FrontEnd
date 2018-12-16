import React, { Component } from "react";
//import API from '../../api';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./fragmentcontainer.css";

class FragmentPDF extends Component {
  state = {
    pdf_link: null
  };

  componentDidMount() {
    let id = this.props.match.params.fragment_id;
    const link =
      "https://luckyread-backend.herokuapp.com/api/fragments_pdf/" +
      id +
      ".pdf";
    this.setState({
      pdf_link: link
    });

  }

  render() {
    return (
      <div className="container-pdf">
        <br />
        <div className="row justify-content-center" id="PDF">
          <iframe
            src={this.state.pdf_link}
            width="550"
            height="600"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            allowFullScreen
            title="fragmentPDF"
          >
            {" "}
          </iframe>
        </div>
        <br />
        <div className="row justify-content-center">
          <Button color="primary" tag={Link} to="/RandomFragmentPage">
            Volver
          </Button>
        </div>
      </div>
    );
  }
}

export default FragmentPDF;
