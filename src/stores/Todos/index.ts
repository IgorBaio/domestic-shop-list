import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UseTodoProps } from "./types";

export const useTodo = create<UseTodoProps>()(
    persist((set, get) => ({
        todo: {
            id: '',
            text: '',
            completed: false,
            author: '',
            date: ''
        },
        todos: [],
        setTodo: (data) => {
            set({ todo: data })
        },
        setTodos: (data) => {
            set({ todos: data })
        },
        setUid: (data) => {
            set({ uid: data })
        },
        uid: ''
    }),
        {
            name: 'todo-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: ({ todo }: UseTodoProps) => ({ todo }),
        })
)