import axios from 'axios';

export default axios.create({
  baseURL: `https://luckyread-backend.herokuapp.com/`
});
