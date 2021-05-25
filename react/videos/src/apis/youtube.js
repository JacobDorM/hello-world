import axios from 'axios';

// const KEY = 'AIzaSyB3kqHfOKhvdKiyncU-Q2u5c9njysKBODQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
  //   params: {
  //     part: 'snippet', 
  //     type: 'video',
  //     maxResults: 5,
  //     key: `${KEY}`
  // }
});