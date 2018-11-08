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
    //subir imagen
    axios.post('https://luckyread-backend.herokuapp.com/api/photo/upload',
      formData, {
        onUploadProgress: progressEvent =>{
          console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100)+ '%');
        }
      }).then( response =>{
      console.log('upload photo')
      console.log(response)
      console.log('el id de la foto es: ' + response['data']['id']);
      axios({
        method: 'patch',
        url: 'https://luckyread-backend.herokuapp.com/api/photo/set_profile_photo',
        data: {
          id_photo: response['data']['id']
        },
        headers: {
            Authorization: "Bearer "+ localStorage.getItem('jwtToken')
        }
      }).then( response =>{
          console.log(response)
      }).catch(function (error) {
        console.log('el error es vinculando la foto con un usuario');
      });

    }).catch(function (error){
      console.log('el error es cargando la foto');
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
