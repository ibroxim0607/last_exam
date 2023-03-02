const initialState = {
  email: ""
}

const mainReducer = (state, action) => {
  // get data
  switch(action.type){
    case "CREATE_USER":
      return {email: action.email}
    default:
      return state
  }
}

export default mainReducer;