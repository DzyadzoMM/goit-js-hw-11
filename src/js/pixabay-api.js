import axios from 'axios';

const API_KEY = "50828964-E021381452EC656DE38C2C47D";
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
      if (res.data.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      return res.data; 
    });
}