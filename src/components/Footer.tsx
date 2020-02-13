import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../context";

export const Footer = () => {
  const { todo } = useStore();
  return useObserver(() => (
    <div>
      {todo.remainingTodos}/{todo.todos.length}
    </div>
  ));
};
