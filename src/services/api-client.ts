import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'e1103af34bc94fa1b5c6d04f1b39fec6'
  }
})