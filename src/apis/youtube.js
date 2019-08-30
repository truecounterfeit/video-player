import axios from 'axios';

const KEY = 'AIzaSyBu4ypBVUSS3V3ImzOJtEIO75fGMkyU6gY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY

  }
});
