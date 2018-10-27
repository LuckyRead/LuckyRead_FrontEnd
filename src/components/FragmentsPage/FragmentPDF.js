import React, { Component } from 'react'
import API from '../../api';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../styles/fragmentcontainer.css';
class FragmentPDF extends Component {
  state = {
    post: null
  }

  componentDidMount(){
    console.log('pdf page');
    let id = this.props.match.params.fragment_id;
    API.get('/api/fragments_pdf/'+id+'.pdf')
      .then(res => {
        console.log('pdf')
        console.log(res)
        this.setState({
          post: res.data
        });
      });
  }

  render() {
    return (
      <div className= "container-pdf">
        <br/>
        <div className="row row justify-content-center" id="PDF">
          <iframe src="http://www.slideshare.net/slideshow/embed_code/key/fZHbg6xSXHL9Ua?startSlide=32" width="595" height="795" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" allowFullScreen> </iframe>
        </div>
      </div>
    )
  }
}

export default FragmentPDF
