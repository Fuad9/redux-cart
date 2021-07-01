import axios from "axios";

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((todos) => {
        dispatch({
          type: "GET_TODOS",
          todos,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addTodo = (newTodo) => {
  return (dispatch) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { ...newTodo })
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          todo,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
