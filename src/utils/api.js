import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
    
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
    'X-RapidAPI-Key': '0f334e3949mshf60fb99d3023f71p1a7730jsn69f8e56ec1da',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
  

  export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }