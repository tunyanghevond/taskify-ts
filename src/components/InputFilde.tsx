import React, { useRef } from "react";
import "./styles.css";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  addTodoList: (e: React.FormEvent<EventTarget>) => void;
  emptyText: boolean;
}

const InputFilde: React.FC<Props> = ({
  text,
  setText,
  addTodoList,
  emptyText,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        addTodoList(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className={emptyText ? "red-text input-box" : "input-box"}
      />
      <button className="submit-btn" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFilde;
