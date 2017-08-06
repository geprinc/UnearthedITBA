

const baseURL = API_BASE_URL;

const api = create({
  baseURL: 'http://localhost:3000/' ,
  timeout: parseInt(API_TIME_OUT, 10)
});

export default api;
