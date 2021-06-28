import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import ListTodos from "./components/todos/ListTodos";

export const AuthContext = createContext();

const userData = [
  {
    id: 1,
    name: "John Doe",
    mob: 1234,
  },
  {
    id: 2,
    name: "Jane Doe",
    mob: 5678,
  },
  {
    id: 3,
    name: "Adam Doe",
    mob: 9012,
  },
];

function App() {
  const [userDt, setUserDt] = useState([]);

  useEffect(() => {
    setUserDt(userData);
  }, []);

  return (
    <div className="App">
      {userDt.map((ud) => (
        <h3 key={ud.id}>{ud.name}</h3>
      ))}

      <ListTodos />
    </div>
  );
}

export default App;
