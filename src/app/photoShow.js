import axios from 'axios';
export const photoShow = async querySearch => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '38274005-9e43f18cc0a460a73a74c2c1d',
    q: querySearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const response = await axios.get(`${BASE_URL}?${params.toString()}`);
  return response;
};
