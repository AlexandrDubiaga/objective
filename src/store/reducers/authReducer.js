import { LOGIN_USER} from "../types";
import { REGISTER_USER} from "../types";




const initiallState = {
  userData: [],
};
export const authReducer = (state = initiallState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state
      };
    }
    case REGISTER_USER: {
        console.log(action.payload)
        return {
          ...state
        };
      }

    
    default:
      return state;
  }
};