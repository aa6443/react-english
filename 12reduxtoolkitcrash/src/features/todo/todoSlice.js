import { createSlice, nanoid } from '@reduxjs/toolkit';

// Define the initial state using that const for the todos array
const initialState = {
    todos: [],
}

// Create a slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action ) =>{
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer