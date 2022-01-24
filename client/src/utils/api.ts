import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

const server = "http://localhost:3001/";

// get user token
const setCommonParams = (params: any) => {
  return params;
};

const api = {
  async get(endpoint: string, param?: any) {
    const params = param;
    try {
      const response = await axios.get(`${server}${endpoint}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`ERROR: ${error}`);
      }
      return false;
    }
  },

  async post(endpoint: string, param: any) {
    // api.setAxiosDefaultHeader();
    const params = setCommonParams(param);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    try {
      const response = await axios.post(
        `${server}${endpoint}`,
        { params },
        {
          headers,
        },
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`ERROR: ${error}`);
      }
      return error;
    }
  },
};

export default api;
