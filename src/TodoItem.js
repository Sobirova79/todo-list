import { useState, useContext, useReducer } from "react";
import React from "react";
import { Context } from "./context";

export default function TodoItem({ title, id, completed }) {
  const { dispatch } = useContext(Context);

  const cls = ["todo"];

  if (completed) {
    cls.push("completed");
  }

  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id,
            })
          }
          className="input"
        />
        <span>{title}</span>

        <i
          className="red-text"
          onClick={() =>
            dispatch({
              type: "remove",
              payload: id,
            })
          }
        >
          delete
        </i>
      </label>
    </li>
  );
}
