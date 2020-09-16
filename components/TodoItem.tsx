import React, { useState } from "react";
import TodoItemStore from "../store/TodoItem";
import { useStore } from "../helpers/useStore";
import { onEnterPress } from "../helpers/useEnter";
import { warningEditMsg, successEditMsg } from "../helpers/toastr";

import {
  TextField,
  IconButton,
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

interface Props {
  todo: TodoItemStore;
}

export const TodoItem = ({ todo }: Props) => {
  const todoList = useStore();
  const [newText, setText] = useState("");
  const [isEditing, setEdit] = useState(false);

  const saveText = () => {
    if (newText == "") {
      warningEditMsg();
    } else {
      todo.updateText(newText);
      setEdit(false);
      setText("");
      successEditMsg();
    }
  };

  return (
    <ListItem style={{ margin: 16, padding: 16 }} divider={true}>
      {isEditing ? (
        <div>
          <TextField
            fullWidth
            onKeyDown={onEnterPress(saveText)}
            onChange={(e) => setText(e.target.value)}
          />
          <ListItemSecondaryAction>
            <IconButton onClick={saveText}>
              <SaveIcon style={{ color: "black" }} />
            </IconButton>
          </ListItemSecondaryAction>
        </div>
      ) : (
        <div>
          <ListItemText>{todo.text}</ListItemText>
          <ListItemSecondaryAction>
            <Checkbox
              disableRipple
              onChange={todo.toggleIsDone}
              defaultChecked={todo.isDone}
            ></Checkbox>
            <IconButton onClick={() => setEdit(true)}>
              <EditIcon style={{ color: "#4274D6" }} />
            </IconButton>
            <IconButton onClick={() => todoList.removeTodo(todo)}>
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
          </ListItemSecondaryAction>
        </div>
      )}
    </ListItem>
  );
};
