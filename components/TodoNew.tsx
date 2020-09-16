import React, { useState } from "react";
import { useStore } from "../helpers/useStore";
import { onEnterPress } from "../helpers/useEnter";

import {
  addTodoErrMsg,
  limitReachederrMsg,
  addTodoSuccessMsg,
} from "../helpers/toastr";

import { TextField, Paper, Grid, IconButton } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

export const TodoNew = () => {
  const [newTodo, setTodo] = useState("");
  const todoList = useStore();

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todoList.openTodos.length > 10) {
      limitReachederrMsg();
    } else if (newTodo === "") {
      addTodoErrMsg();
    } else {
      todoList.addTodo(newTodo);
      setTodo("");
      addTodoSuccessMsg();
    }
  };

  return (
    <Paper elevation={3} style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            fullWidth
            value={newTodo}
            onKeyDown={onEnterPress(addTodo)}
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <IconButton onClick={addTodo}>
            <AddIcon style={{ color: "#EB5949" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};
