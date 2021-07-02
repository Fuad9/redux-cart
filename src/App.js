import React, { useState } from "react";
import "./App.css";
import ListTodos from "./components/todos/ListTodos";
import AddTodos from "./components/todos/AddTodos";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [todo, setTodo] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="App">
      <NavBar />

      <ListTodos />

      <AddTodos todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
