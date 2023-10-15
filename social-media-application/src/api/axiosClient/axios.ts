import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'https://gorest.co.in/public/v2',
   headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
   }
});

export default axiosClient