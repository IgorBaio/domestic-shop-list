// src/components/TodoList.tsx
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { TodoModel } from "./stores/Todos/types";
import { Container } from "./styles";
import HeaderTitleApp from "./components/HeaderTitleApp";
import TodosList from "./components/TodoList";

const TodoList: React.FC = () => {
 

  return (
    <Container>
      <HeaderTitleApp />
      <TodosList />
     
    </Container>
  );
};

export default TodoList;
