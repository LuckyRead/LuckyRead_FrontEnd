import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Link } from "react-router-dom"
import ChangeAvatar from './ChangeAvatar'

class PopUp extends React.Component {
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
        <Button color="success" onClick={this.toggle} size='xs'>Cambiar</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Cambiar foto de perfil</ModalHeader>
          <ModalBody>
            <ChangeAvatar/>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Cerrar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUp;
