import axios from 'axios';
const HandleRequest = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
export default HandleRequest;
