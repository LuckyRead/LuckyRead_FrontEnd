import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TopicCard, TopicCardSelect } from "./Styled";

export default class Topic extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      selectTopic: false
    };
  }

  toggle() {
    this.setState({
      selectTopic: !this.state.selectTopic
    });

    this.props.selectTopic(this.props.topicid, !this.state.selectTopic);
  }

  render() {
    return (
      <TopicCard
        topicimage={this.props.topicimage}
        select={!this.state.selectTopic}
      >
        <TopicCardSelect onClick={this.toggle} select={!this.state.selectTopic}>
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
