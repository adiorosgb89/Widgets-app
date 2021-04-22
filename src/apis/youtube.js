import axios from 'axios';
const KEY = 'AIzaSyCl5tBfHRgW6QSMQ2nM-F1VJaOvauczMRA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
