import { LOGIN_USER} from "../types";
import { REGISTER_USER} from "../types";
import { LOGOUT_USER} from "../types";



const initiallState = {
  userData: {},
  isRegister:false,
  isLogined:false,
};
export const authReducer = (state = initiallState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        userData:action.payload.data,
        isLogined:true
      };
    }
    case REGISTER_USER: {
      console.log(action.payload)
        return {
          ...state,
          isRegister:true
        };
      }
      case LOGOUT_USER: {
          return {
            ...state,
            isLogined:false
          };
        }

    
    default:
      return state;
  }
};