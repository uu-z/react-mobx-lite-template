import { TodoStore } from "./stores/TodoStore";
import React from "react";

export const StoresContext = React.createContext({
  todo: new TodoStore()
});

export const useStore = () => React.useContext(StoresContext);
