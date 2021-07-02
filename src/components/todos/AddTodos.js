import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

export default function AddTodos({ todo, setTodo }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      ...todo,
    };

    dispatch(addTodo(newTodo));

    setTodo({
      name: "",
      email: "",
    });
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <input
          type="email"
          value={todo.email}
          onChange={(e) => setTodo({ ...todo, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
