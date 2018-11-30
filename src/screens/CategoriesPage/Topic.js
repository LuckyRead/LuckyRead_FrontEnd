import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import { TopicCard, TopicCardSelect } from "../CategoriesInitPage/Styled";
import { Link } from "react-router-dom";

import axios from 'axios';

export default class Topic extends PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            selectTopic: true
        };
    }

    toggle() {
        console.log("on toggle")
        this.setState({
            selectTopic: !this.state.selectTopic
        });
        console.log(this.state.selectTopic)
        console.log("topic id")
        console.log(this.props.topicid)

    }


    render() {
        return (
          <Link to={"/fragmentsview/" + this.props.topicid}>
            <TopicCard topicimage={this.props.topicimage}>
                <TopicCardSelect onClick={this.toggle} select={this.state.selectTopic}>
                    <strong>{this.props.topicname}</strong>
                </TopicCardSelect>
            </TopicCard>
          </Link>
        )
    }
}

Topic.propTypes = {
    topicname: PropTypes.string.isRequired,
    topicid: PropTypes.number.isRequired,
    topicimage: PropTypes.string
};
