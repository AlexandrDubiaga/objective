export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT_USER = "LOGOUT_USER";
import axios from 'axios';


export const login = (userData) => {
let formData = new FormData();
formData.append('email',userData.email);
formData.append('password',userData.password);
  return async (dispatch) => {
    const user = await axios.post('https://dev.addictivelearning.io/api/v1/login',formData,{headers: {"Content-Type": "application/x-www-form-urlencoded"}});
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
    const user = await axios.post(`https://dev.addictivelearning.io/api/v1/register`,
    formData,
    {headers: {"Content-Type": "application/x-www-form-urlencoded"}});
    dispatch({
      type: REGISTER_USER,
      payload: user.data,
    });
  };
};
export const logout = () => {
    return async (dispatch) => {
      let responce = await axios.post(`https://dev.addictivelearning.io/api/v1/logout`,  {headers: {"Content-Type": "application/x-www-form-urlencoded"}});
      dispatch({
        type: LOGOUT_USER
      });
  };
}

