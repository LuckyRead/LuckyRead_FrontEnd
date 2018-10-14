import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RegistrationPopUp extends React.Component {
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
        <Button color="success" onClick={this.toggle} size="lg">Continuar&nbsp;<FontAwesomeIcon icon="angle-right" size ="lg"/></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><FontAwesomeIcon icon="exclamation-triangle"/>&nbsp;Aviso</ModalHeader>
          <ModalBody>
          Si deseas que se guarden tus preferencias, por favor registrate.
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle} size="xs" tag={Link} to="/homePageWithOutLogin">Continuar sin registrar</Button>
            <Button color="primary" onClick={this.toggle} tag={Link} to="/signUp">Registrarse</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RegistrationPopUp;
