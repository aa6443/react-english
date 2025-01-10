import { createContext, useContext } from 'react';


// 1. Create a context 
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: ()=>{},
    updateTodo: ( id, todo )=>{},
    deleteTodo: ( id )=>{},
    toggleComplete: (id) => {}
});


// 2. Create a custom hook to use the context
export const useTodo = () => {
    return useContext(TodoContext)
};

// 3. Create a provider
export const TodoProvider = TodoContext.Provider;