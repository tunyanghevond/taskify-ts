import React, { useState } from "react";
import "./App.css";
import InputFilde from "./components/InputFilde";
import TodoList from "./components/TodoList";

import { List } from "./model";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [emptyText, setEmptyText] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<List[]>([]);

  const addTodoList = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!text) {
      setEmptyText(!emptyText);
    } else {
      setTodoList([...todoList, { id: Date.now(), text: text, isDone: false }]);
      setText("");
    }
  };
  console.log(todoList);
  return (
    <header className="header">
      <div className="header-title">
        <h1>Taskify</h1>
      </div>
      <InputFilde
        text={text}
        setText={setText}
        addTodoList={addTodoList}
        emptyText={emptyText}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </header>
  );
};

export default App;
