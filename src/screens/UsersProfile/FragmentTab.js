import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { TabContent, TitleContainer } from "./Styled.js";
import AddImageFragment from './AddImageFragment';
import axios from 'axios';
import Spinner from "react-spinkit";


export default class FragmentTab extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <TabContent>
        <h4 style={{ textAlign: "center", marginBottom: "2%" }}>
          Fragmentos creados
        </h4>
      </TabContent>
    );
  }
}
