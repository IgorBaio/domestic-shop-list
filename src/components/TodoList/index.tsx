// src/components/TodoList.tsx
import React, { useState, useEffect } from "react";
import { TodoModel } from "../../stores/Todos/types";
import { db } from "../../firebaseConfig";
import { Container, List, ListContainer } from "./styles";
import ItemList from "../ItemList";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { FloatAddButton } from "../ItemList/styles";
import { AddModal } from "../AddModal";

const TodosList = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [shopsChecked, setShopsChecked] = useState<TodoModel[]>([]);
  const [showModal, setShowModal] = useState(false);

  const getTodos = async () => {
    const todoCollection = collection(db, "todos");
    const snapshot = await getDocs(todoCollection);
    const todoList: TodoModel[] = [];
    const shopCheckedList: TodoModel[] = [];
    snapshot.docs.forEach((doc) => {
      const shop = {
        id: doc.id,
        text: doc.data().text,
        completed: doc.data().completed,
        author: doc.data().author,
        date: doc.data().date,
      }
      if (!doc.data().completed)
        todoList.push(shop)
      else 
        shopCheckedList.push(shop)
          
    });
    setTodos(todoList);
    setShopsChecked(shopCheckedList);


  }
  useEffect(() => {
    // const fetchData = async () => {

    // };

    // fetchData();

    getTodos();
  }, []);

  const saveItem = async (todo: any) => {
    console.log('todo', todo)
    try {

      const docRef = await updateDoc(doc(db, "todos", todo.id), todo);
      console.log("Document updated with ID: ", docRef);

      if(todo.completed){
        const newShopsChecked = [...shopsChecked, todo]
        setShopsChecked(newShopsChecked);

        const newShopsUnchecked = todos.filter(i=> i.id != todo.id)
        setTodos(newShopsUnchecked)
      }else{
        const newShopsChecked = shopsChecked.filter(i=>i.id != todo.id)
        setShopsChecked(newShopsChecked);

        const newShopsUnchecked = [...todos, todo]
        setTodos(newShopsUnchecked)

      }

    } catch (e) {
      console.error("Error adding document: ", e);
    }
    finally {
      // setIsEditing(false)
    }
  }
  const createItem = async (todo: any) => {
    console.log('todo', todo)
    try {

      const docRef = await addDoc(collection(db, "todos"), todo);
      console.log("Document created with ID: ", docRef);
      getTodos()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    finally {
      // setIsEditing(false)
    }
  }
  const deleteItem = async (id: string) => {
    console.log('todo', id)
    try {

      const docRef = await deleteDoc(doc(db, "todos", id));
      console.log("Document deleted with ID: ", docRef);
      
      if(todos.some(i=>i.id === id)){
        const todosUpdated = todos.filter((item) => item.id !== id)
        setTodos(todosUpdated)
        
      }else{
        const shopsUpdated = shopsChecked.filter((item) => item.id !== id)
        setShopsChecked(shopsUpdated)

      }

    } catch (e) {
      console.error("Error adding document: ", e);
    }
    finally {
      // setIsEditing(false)
    }
  }


  return (
    <Container>
      <ListContainer>


        <List>
          {todos.map((todo) => (
            <ItemList
              id={todo.id}
              author={todo.author}
              completed={todo.completed}
              date={todo.date}
              text={todo.text}
              todo={todo}
              saveItem={saveItem}
              deleteItem={deleteItem}
            />

          ))}
          {shopsChecked.map((todo) => (
            <ItemList
              id={todo.id}
              author={todo.author}
              completed={todo.completed}
              date={todo.date}
              text={todo.text}
              todo={todo}
              saveItem={saveItem}
              deleteItem={deleteItem}
            />

          ))}

        </List>
      </ListContainer>
      <FloatAddButton onClick={() => setShowModal(!showModal)} >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 72 72" fill="#CCC">
          <path d="M36,12c13.255,0,24,10.745,24,24c0,13.255-10.745,24-24,24S12,49.255,12,36C12,22.745,22.745,12,36,12z M44,39	c1.657,0,3-1.343,3-3c0-1.657-1.343-3-3-3c-0.329,0-2.426,0-5,0c0-2.574,0-4.672,0-5c0-1.657-1.343-3-3-3c-1.657,0-3,1.343-3,3	c0,0.328,0,2.426,0,5c-2.574,0-4.671,0-5,0c-1.657,0-3,1.343-3,3c0,1.657,1.343,3,3,3c0.329,0,2.426,0,5,0c0,2.574,0,4.672,0,5	c0,1.657,1.343,3,3,3c1.657,0,3-1.343,3-3c0-0.328,0-2.426,0-5C41.574,39,43.671,39,44,39z"></path>
        </svg>
      </FloatAddButton>
      {showModal && <AddModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        saveItem={saveItem}
        createItem={createItem}
        todos={todos}
        setTodos={setTodos}
      />}
    </Container>

  );
};

export default TodosList;
