import axios from 'axios';

const fetchDataApi = (searchQuery, page) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '21692069-20428e2069b68a036394e4dd0';
  return axios
    .get(`${URL}?key=${KEY}&per_page=12&page=${page}&q=${searchQuery}`)
    .then(res => res.data);
};

export default fetchDataApi;


