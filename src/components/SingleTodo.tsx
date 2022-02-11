import React from "react";
import { List } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface props {
  singleTodo: List;
  todoList: List[];
  setTodoList: React.Dispatch<React.SetStateAction<List[]>>;
}
const SingleTodo = ({ singleTodo, todoList, setTodoList }: props) => {
  const handleDone = (id: number) => {
    const newTodo = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(newTodo);
    // setTodoList(
    //   todoList.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
  };

  return (
    <form className="single-todos">
      {singleTodo.isDone ? (
        <s className="single-todo-text">{singleTodo.text}</s>
      ) : (
        <span className="single-todo-text">{singleTodo.text}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(singleTodo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
