import { useContext } from "react";
import { StoreContext } from "./storeProvider";
import { TodoList } from "../store/TodoList";

export const useStore = (): TodoList => useContext(StoreContext);
