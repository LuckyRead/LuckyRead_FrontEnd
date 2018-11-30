import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import { TopicCard, TopicCardSelect } from "../CategoriesInitPage/Styled";
import FragmentCard from "./FragmentCard";

import axios from 'axios';

export default class FragmentsView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fragments: []
        };
    }

    componentWillMount(){
      let id = this.props.match.params.topic_id
      axios({
        method: "get",
        url:
          "https://luckyread-backend.herokuapp.com/api/fragments/by_topic/"+ id,
      }).then(response => {
          console.log('FRAGMENTOS');
          console.log(response)
          this.setState({
              fragments: response.data.fragments
          });
        })
        .catch(function(error) {

        });
    }

    render() {
      const domFragments = this.state.fragments.map(fragment => {
        return (
          <FragmentCard
            key={fragment.id}
            title={fragment.title}
            introduction={fragment.introduction}
            image={fragment.base64_image}
          />
        );
      });
        return (
          <div>
            {domFragments}
          </div>
        )
    }
}
