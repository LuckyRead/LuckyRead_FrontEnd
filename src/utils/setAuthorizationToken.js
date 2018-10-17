import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('Esta autorizado en el siguiente header de axios');
    console.log(axios.defaults.headers);
    console.log('Fin header axios');
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
