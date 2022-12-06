// src/pages/Work.js

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Todo() {
  const param = useParams();
  const users = useSelector((state) => state.buttoner.todos);
  console.log(users);

  const user = users.find((user) => user.id === parseInt(param.id));
  console.log(user);
  return <div>{user.todo}</div>;
}

export default Todo;
