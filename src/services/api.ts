import axios from 'axios';
const HandlePokeRequest = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const HandleApi = axios.create({
  baseURL: 'http://localhost:3030',
});
export { HandlePokeRequest, HandleApi };
