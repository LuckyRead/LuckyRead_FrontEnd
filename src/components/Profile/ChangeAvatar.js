import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/myprofile.css';

class ChangeAvatar extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedFile: null,
      showImage: null
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
  }

  fileSelectedHandler = event =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      showImage: URL.createObjectURL(event.target.files[0])
    })
  };

  fileUploadHandler = () =>{
    console.log(this.state.selectedFile);
    const formData = new FormData()
    formData.append('image', this.state.selectedFile);
    axios.post('https://luckyread-backend.herokuapp.com/api/photo/upload', formData, {
      onUploadProgress: progressEvent =>{
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ '%');
      }
    })
    .then( response =>{
      console.log(response)
      console.log(response['data']['id'])
      localStorage.setItem('idImage', response['data']['id']);
    });
  }

  render(){
    return (
      <div className = "Avatar">
        <div className = 'row justify-content-center'>
          <input
            style={{display: 'none'}}
            type="file"
            className="form-control-file"
            id="exampleFormControlFile"
            onChange = {this.fileSelectedHandler}
            ref = {fileInput => this.fileInput = fileInput}/>
          <button onClick={() => this.fileInput.click()}>Escoger imagen</button>&nbsp;&nbsp;
          <button onClick={this.fileUploadHandler}>Cargar</button>
        </div>
        <div className = 'row' id="crop-img">
          <img src={this.state.showImage} alt='profile'/>
        </div>
      </div>
    )
  }
}

export default ChangeAvatar;
