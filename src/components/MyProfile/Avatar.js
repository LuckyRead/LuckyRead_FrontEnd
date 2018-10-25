import React, { Component } from 'react'
import axios from 'axios'

class Avatar extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedFile: null
    }
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
  }

  fileSelectedHandler = event =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0])
    })
  };

  fileUploadHandler = () =>{

    //axios.post('my-domain.com/file-upload', this.state.selectedFile) mandar file binario
    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('', formData, {
      onUploadProgress: progressEvent =>{
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ '%');
      }
    })
    .then( response =>{
      console.log(response);
    });
  }

  render(){
    return (
      <div className = "Avatar">
        <input
          style={{display: 'none'}}
          type="file"
          className="form-control-file"
          id="exampleFormControlFile"
          onChange = {this.fileSelectedHandler}
          ref = {fileInput => this.fileInput = fileInput}/>
        <button onClick={() => this.fileInput.click()}>Escoger imagen</button>
        <img src={this.state.selectedFile}/>
        <button onClick={this.fileUploadHandler}>Cargar</button>
      </div>
    )
  }
}

export default Avatar;
