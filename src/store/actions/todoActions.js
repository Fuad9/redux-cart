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
