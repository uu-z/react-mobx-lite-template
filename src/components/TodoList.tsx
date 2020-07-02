import React, { useRef, useCallback } from "react";
import { useStore } from "../context";
import { useObserver } from "mobx-react-lite";

export const TodoList = () => {
  const { todo } = useStore();
  const todoRef = useRef<HTMLInputElement>(null);

  const addTodo = useCallback(() => {
    if (!todoRef?.current?.value) return;
    todo.addTodo(todoRef.current.value);
    todoRef.current.value = "";
  }, [todo]);
  return useObserver(() => (
    <div>
      <input ref={todoRef} className="border border-grey" />
      <button onClick={addTodo}>add</button>
      <div>
        {todo.todos.map((t, i) => (
          <li
            onClick={() => todo.toggleTodo(i)}
            style={{
              margin: 10,
              opacity: t.completed ? 0.5 : 1,
              cursor: "pointer",
              textDecoration: t.completed ? "line-through" : "none",
            }}
            key={t.id}
          >
            {t.text}
          </li>
        ))}
      </div>
    </div>
  ));
};
