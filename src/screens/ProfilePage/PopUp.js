import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
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
  Reload(){
    window.location.reload();
  }

  render() {
    return (
      <div>
        <a onClick={this.toggle} size='xs'>Cambiar Foto</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Cambiar foto de perfil</ModalHeader>
          <ModalBody>
            <ChangeAvatar/>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.Reload}>Cerrar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUp;
