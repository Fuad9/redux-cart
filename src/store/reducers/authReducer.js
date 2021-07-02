const authReducer = (users = {}, action) => {
  switch (action.type) {
    case "GET_AUTH_USER":
      return action.users;

    default:
      return users;
  }
};

export default authReducer;
