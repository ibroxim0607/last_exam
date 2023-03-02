import { combineReducers } from "redux";
import registerReducer from "../reducers/register-reducer";
import likeReducer from "../reducers/like-reducer";

const rootReducer = combineReducers({
  registerReducer,
  likeReducer
})

export default rootReducer;