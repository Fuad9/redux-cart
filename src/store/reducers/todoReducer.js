const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;

    default:
      return todos;
  }
};

export default todoReducer;
