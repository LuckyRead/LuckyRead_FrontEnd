import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import { TopicCard } from "./Styled";

export default class Topic extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <TopicCard>
                {this.props.topicname}
            </TopicCard>
        )
    }
}

Topic.propTypes = {
    topicname: PropTypes.string.isRequired,
    topicid: PropTypes.number.isRequired
};