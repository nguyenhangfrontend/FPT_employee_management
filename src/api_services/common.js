import axios from "axios";
import store from "store";
import { POST_LOGIN, POST_REGISTER } from "network/key";
// export const HOST = process.env.NEXT_PUBLIC_API_URL;
let token_cookie = "";
// if (typeof window !== "undefined") {
//   token_cookie = document.cookie;
// }

axios.interceptors.request.use(
  (config) => {
    token_cookie = localStorage.getItem("token")  || ""
    const token = store.getState().auth.token || token_cookie;
    if (token) {
      config.headers = {
        ...config.headers,
        'Authorization':`Bearer ${token}`
      };
    }
    // perform a task before the request is sent
    console.log("Request was sent", token);
    return config;
  },
  (error) => {
    // handle the error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // do something with the response data

    return response;
  },
  (error) => {
    // handle the response error
    console.log("error: ", error.response?.data)
    const errorData = error.response?.data
    if ( errorData?.statusCode === 401 ) {
      //call api refresh token or log out
    }
  }
);

export { axios };
