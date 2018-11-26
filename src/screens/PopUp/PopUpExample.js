import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'

class PopUpExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Oprime</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Alerta</ModalHeader>
          <ModalBody>
            Para poder acceder a esta caracterísitca necesitas registrate
          </ModalBody>
          <ModalFooter>
            <Button color="primary" tag={Link} to ="/RegisterPage" onClick={this.toggle} >Registrarme</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUpExample;
