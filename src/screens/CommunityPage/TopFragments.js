import React, { PureComponent } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import PropTypes from "prop-types";
import { TopicCard, TopicCardSelect } from "../CategoriesInitPage/Styled";
//import FragmentCard from "./FragmentCard";


import axios from 'axios';

export default class TopFragments extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fragments: []
        };
    }

    componentWillMount(){
      axios({
        method: "get",
        url:
          "https://luckyread-backend.herokuapp.com/api/fragments/stat/five_fragments_more_percentage_likes",
      }).then(response => {
          console.log('FRAGMENTOS');
          console.log(response)
          // this.setState({
          //     fragments: response.data.fragments
          // });
        })
        .catch(function(error) {

        });
    }

    render() {
      // const domFragments = this.state.fragments.map(fragment => {
      //   return (
      //     <FragmentCard
      //       key={fragment.id}
      //       title={fragment.title}
      //       introduction={fragment.introduction}
      //       image={fragment.base64_image}
      //       id={fragment.id}
      //     />
      //   );
      //});
        return (
           <CardColumns>
           HOla
          </CardColumns>
        )
    }
}
