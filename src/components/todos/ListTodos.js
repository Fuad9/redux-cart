import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../store/actions/todoActions";

export default function ListTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {todos.map((todo) => (
          <h6 key={todo.id}>{todo.name}</h6>
        ))}
      </div>
    </>
  );
}
