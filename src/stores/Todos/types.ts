export interface UseTodoProps {
    todo: TodoModel;
    todos: TodoModel[];
    setTodo: (data: any) => void;
    setTodos: (data: any) => void;
    setUid: (data: any) => void;
    uid?: string;
}

export interface ProviderData {
    displayName: string | null;
    email: string;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
    uid: string;
}

export interface StsTokenManager {
    accessToken: string;
    expirationTime: number;
    refreshToken: string;
}

export interface TodoModel {
    id: string;
    text: string;
    completed: boolean;
    author: string;
    date: string;

}
