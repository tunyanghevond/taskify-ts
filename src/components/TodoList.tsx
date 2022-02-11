import React from "react";
import { List } from "../model";
import SingleTodo from "./SingleTodo";

interface props {
  todoList: List[];
  setTodoList: React.Dispatch<React.SetStateAction<List[]>>;
}

const TodoList = ({ todoList, setTodoList }: props) => {
  return (
    <div className="container">
      {todoList.map((singleTodo) => {
        return (
          <SingleTodo
            key={singleTodo.id}
            singleTodo={singleTodo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
