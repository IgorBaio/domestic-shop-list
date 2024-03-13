import React from 'react';
import { AddButton, AddContainerModal, AddForm, AddInput, ModalCloseButton, ModalContent, ModalWrapper } from './styles';
import { TodoModel } from '../../stores/Todos/types';

interface AddModalProps {
    isOpen: boolean;
    onClose: () => void;
    saveItem: (todo: TodoModel) => void;
    createItem: (todo: TodoModel) => void;
    todos: TodoModel[];
    setTodos: (data: TodoModel[]) => void;
}

export const AddModal = ({ isOpen, onClose, saveItem, todos, setTodos, createItem }: AddModalProps) => {

    const [text, setText] = React.useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text) return;
        const todo: TodoModel = {
            id: '',
            text,
            completed: false,
            // date: new Date().toISOString(),
            //TODO create date format dd/mm/yyyy
            date: new Date().toLocaleDateString(),
            author: 'user',
        }
        createItem(todo)// saveItem(todo);
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        onClose();
    }

    if (!isOpen) return null;

    return (
        <ModalWrapper>
            <ModalContent>
                <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
                <AddContainerModal>
                    <AddForm onSubmit={handleSubmit}>
                        <AddInput
                            type="text"
                            placeholder="Add a new todo"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <AddButton type="submit">Add</AddButton>
                    </AddForm>
                </AddContainerModal>
            </ModalContent>
        </ModalWrapper>
    );
};
