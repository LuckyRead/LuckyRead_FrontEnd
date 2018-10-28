import React, { Component } from 'react'
import API from '../../api';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../styles/fragmentcontainer.css';
class FragmentPDF extends Component {
  state = {
    pdf_link: null
  }

  componentDidMount(){
    console.log('pdf page');
    let id = this.props.match.params.fragment_id;
    const link = "https://luckyread-backend.herokuapp.com/api/fragments_pdf/" + id + ".pdf"
    this.setState({
      pdf_link: link
    });
    console.log(link)
    /*API.get('/api/fragments_pdf/'+id+'.pdf')
      .then(res => {
        console.log('pdf')
        console.log(res)
        this.setState({
          pdf_url: res['config']['headers']['url']
        });
        console.log(res['config']['headers']['url'])
      });*/
  }

  render() {
    return (
      <div className= "container-pdf">
        <br/>
        <div className="row justify-content-center" id="PDF">
          <iframe src={this.state.pdf_link} width="550" height="600" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" allowFullScreen> </iframe>
        </div>
        <br/>
        <div className="row justify-content-center">
          <Button color='primary' tag={Link} to="/fragmentspage">Volver</Button>
        </div>
      </div>
    )
  }
}

export default FragmentPDF
