import { combineReducers } from "redux";
import authReducer from "../reducers/auth-reducer";
import likeReducer from '../reducers/like-reducer';

const rootReducer = combineReducers({
  authReducer,
  likeReducer
})

export default rootReducer