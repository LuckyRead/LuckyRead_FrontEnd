import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import { TopicCard, TopicCardSelect } from "../CategoriesInitPage/Styled";
import { Link } from "react-router-dom";
import "./preferences.css";
import axios from 'axios';
import { history } from "../../_helpers";


export default class Topic extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      selectTopic: true
    };
  }

  toggle() {
    console.log("on toggle");
    this.setState({
      selectTopic: !this.state.selectTopic
    });

    this.props.selectTopic(this.props.topicid, this.state.selectTopic);
    console.log(this.state.selectTopic);
    history.push("/fragmentsview/" + this.props.topicid);
  }

  render() {
    return (
      <TopicCard
        topicimage={this.props.topicimage}
        select={this.state.selectTopic}
      >
        <TopicCardSelect onClick={this.toggle} select={this.state.selectTopic}>
          <strong>{this.props.topicname}</strong>
        </TopicCardSelect>
      </TopicCard>
    );
  }
}

Topic.propTypes = {
  topicname: PropTypes.string.isRequired,
  topicid: PropTypes.number.isRequired,
  topicimage: PropTypes.string,
  selectTopic: PropTypes.func
};
