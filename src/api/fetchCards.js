import axios from 'axios';

export const fetchCards = async searchKey => {
  const response = await axios.get(`/articles?title_contains=${searchKey}`);
  return response.data;
};
