import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import ListTodos from "./components/todos/ListTodos";
import AddTodos from "./components/todos/AddTodos";
import Login from "./components/auth/Login";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  const [todo, setTodo] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="App">
      <ListTodos />

      <AddTodos todo={todo} setTodo={setTodo} />

      <Login loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
    </div>
  );
}

export default App;
