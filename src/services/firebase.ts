import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useTodo } from "../stores/Todos";

export const getAllTodos = async () => {
    const snapshot = await getDocs(collection(db, "todos"));
    const users = snapshot.docs.map((doc) => doc.data());

    return users;
}

export const getAllProfessionalsUsers = async () => {
    
    const todos = await getAllTodos();
    console.log('todos', todos)
    return todos;
}

// export const getUserByDB = async () => {
//     const {setUid, setTodo, todo} = useTodo.getState()
//     const querySnapshot = await getDocs(collection(db, "users"));
    
//     const userByDb = querySnapshot.docs?.find((doc) => doc.data().uid === user.uid);
//     console.log('userByDb', userByDb?.data())
//     console.log('userByDb?.data()', userByDb?.data().id)
//     setUid(userByDb?.data().uid)
//     setUser(userByDb?.data())
//   }