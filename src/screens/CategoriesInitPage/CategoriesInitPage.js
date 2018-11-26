import React, { Component } from 'react'
import API from "../../api";
import Topic from "./Topic";
import { TopicS, TopicsContainer } from "./Styled"
import dark from "../../resources/dark.jpeg";

export default class CategoriesInitPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            topicscards: []
        };
    }

    componentDidMount() {
        API.get("/api/topic/alltopics").then(res => {
            console.log(res.data);
            this.setState({
                topics: res.data
            });
            console.log("antes de llamar a rendertopics")
            this.renderTopics();
        });
    }

    renderTopics() {
        console.log("en render topics")
        const topicsList = this.state.topics.map((item, index) =>
            <Topic key={index} topicname={item.topic_name} topicid={item.id} topicimage={dark}></Topic>
        )
        return topicsList
    }

    render() {
        const topics = this.state.topics ? (
            <TopicsContainer>
                {this.renderTopics()}
            </TopicsContainer>
        ) : (<div>Cargando</div>)
        return (
            <div>
                {topics}
            </div>
        )
    }
}
