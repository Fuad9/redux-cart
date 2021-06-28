import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../store/actions/todoActions";

export default function ListTodos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.name}</h3>
      ))}
    </>
  );
}
