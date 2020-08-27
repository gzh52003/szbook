import axios from 'axios';

const require = axios.create({
  baseURL:"http://42.194.179.50/api"
});


export default require;