import axios from 'axios';

const API_KEY = "50828964-e021381452ec656de38c2c47d";
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  };

  return axios.get(BASE_URL, { params })
    .then(res => {
      return res.data; 
    });
}