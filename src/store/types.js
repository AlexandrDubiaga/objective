export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

import axios from 'axios';


export const login = (userData) => {
  return async (dispatch) => {
    const user = await axios.post('https://dev.addictivelearning.io/docs/api-docs.json/api/v1/login');
    dispatch({
      type: LOGIN_USER,
      payload: user.data,
    });
  };
};

export const registration = (userData) => {
let formData = new FormData();
formData.append('email',userData.email);
formData.append('password',userData.password);
formData.append('password_confirmation',userData.password_confirmation);
  return async (dispatch) => {
    const user = await axios.post('https://dev.addictivelearning.io/docs/api-docs.json/api/v1/register',
    formData,
    {
      headers: {
          'Content-Type': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  }, 
    );
    alert(1)
    dispatch({
      type: REGISTER_USER,
      payload: user.data,
    });
  };
};
