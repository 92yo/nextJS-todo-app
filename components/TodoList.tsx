import React from "react";
import Link from "next/link";
import { useStore } from "../helpers/useStore";
import { TodoItem } from "./TodoItem";
import { useObserver } from "mobx-react";
import { List } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";

export const TodoList = () => {
  const todoList = useStore();

  return useObserver(() => (
    <div>
      <ListItemText style={{ color: "blue" }}> Todos</ListItemText>
      <div>
        {todoList.openTodos.map((todo: any) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
      <div>
        <ListItemText style={{ color: "red" }}>Finished Todos</ListItemText>
        <List>
          {todoList.finishedTodos.map((todo) => (
            <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
          ))}
        </List>
      </div>
    </div>
  ));
};
