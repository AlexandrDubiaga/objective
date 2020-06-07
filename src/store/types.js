export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const SUCCESS = "SUCCESS";

export const ERROR = "ERROR";

import axios from "axios";

export const setError = (error) => {
  return async (dispatch) => {
    dispatch({
      type: ERROR,
      error: error,
    });
  };
};
export const setSuccess = (success) => {
  return async (dispatch) => {
    dispatch({
      type: success,
      success,
    });
  };
};

export const login = (userData) => {
  let formData = new FormData();
  formData.append("email", userData.email);
  formData.append("password", userData.password);

  return async (dispatch) => {
    try {
      const responce = await axios.post(
        "https://dev.addictivelearning.io/api/v1/login",
        formData,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      dispatch({
        type: LOGIN_USER,
        payload: responce.data,
      });
    } catch (err) {
      dispatch(setError("Нету такого пользователя!"));
    }
  };
};

export const registration = (userData) => {
  let formData = new FormData();
  formData.append("email", userData.email);
  formData.append("password", userData.password);
  formData.append("password_confirmation", userData.password_confirmation);
  return async (dispatch) => {
    try {
      const responce = await axios.post(
        `https://dev.addictivelearning.io/api/v1/register`,
        formData,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      dispatch({
        type: REGISTER_USER,
        payload: responce.data,
        success:'Успешная регистрация!'
      });
    
    } catch (err) {}
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      let responce = await axios.post(
        `https://dev.addictivelearning.io/api/v1/logout` ,
        { headers: { 
          "Content-Type": "application/x-www-form-urlencoded"
      
      }
     }
      );

      dispatch({
        type: LOGOUT_USER,
      });
    } catch (err) {}
  };
};
