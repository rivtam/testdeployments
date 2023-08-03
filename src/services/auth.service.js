import axios from "axios";

const API_URL = "https://auth-server-stage.wizzitdigital.com/realms/WIZZIT/protocol/openid-connect/token";


const login = (username, password) => {
  return axios
    .post(API_URL, {
      username,
        password,
        "grant_type": "password",
        "scope": "email"
    },

    {
      headers: {
        'Authorization': 'Basic ZWZpbmFuY2Utc2VydmljZXM6',
        'Content-Type': 'application/x-www-form-urlencoded'

      }
    }

    )
    .then((response) => {

      console.log('response', response)


      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};