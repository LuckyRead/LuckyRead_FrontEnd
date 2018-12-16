import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import wolf from "../../resources/pony.gif"
import { ImgS } from "./Styled";
class NonFragmentPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modal
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    this.props.popUptoggle();
    this.props.request();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Fragmentos de usuarios no encontrados</ModalHeader>
          <ModalBody>
            Parece que no hay fragmentos de usuarios que se adecuen a tus preferencias, por favor intenta mas tarde
          </ModalBody>
          <ImgS><img src={wolf} alt="Loading" /></ImgS>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>OK!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

NonFragmentPopUp.propTypes = {
  modal: PropTypes.bool.isRequired,
  popUptoggle: PropTypes.func.isRequired,
  request: PropTypes.func.isRequired,
};


export default NonFragmentPopUp;
