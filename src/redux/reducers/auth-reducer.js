const initialState = {
  email: ""
}


const authReducer = (state = initialState, action) => {
  //get data
  switch(action.type){
    case "CREATE_USER":
      return {email: action.email}
    default:
      return state
  }
}

export default authReducer;