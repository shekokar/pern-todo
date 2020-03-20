import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </React.Fragment>
  );
}

export default App;
