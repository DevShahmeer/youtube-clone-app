// Importing the 'axios' library to make HTTP requests
import axios from 'axios';

// Base URL for the YouTube API
const BASE_URL = "https://youtube138.p.rapidapi.com";

// Configurations for the API request
const options = {
  params: {
    // The 'q' parameter is used to specify the search query
    q: 'desp',
    // 'hl' parameter is used to set the language to English
    hl: 'en',
    // 'gl' parameter is used to set the region to the United States
    gl: 'US'
  },
  headers: {
    // API key to authenticate the request
    'X-RapidAPI-Key': (Add Here YOUR RAPID Youtube API Key),
    // Host address for the RapidAPI service
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

// Function to fetch data from the API using the provided URL
export const fetchDataFromApi = async (url) => {
  // Sending a GET request to the specified URL along with the 'options'
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  // Returning the received data from the API
  return data;
}
