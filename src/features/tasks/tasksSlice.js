import { createSlice, nanoid } from '@reduxjs/toolkit';

//exemplo inicial
const initialState = {
    tasks: [
        { id: '1', text: 'Projeto TDIG', completed: true },
        { id: '2', text: 'Ir para academia', completed: true },
        { id: '3', text: 'Ir ao mercado', completed: false }
    ],
    filter: 'all'
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        addTask: {
            reducer: (state, action) => {
                state.tasks.push(action.payload);
            },
            prepare: (text) => {
                return { payload: { id: nanoid(), text, completed: false } };
            }
        },
        deleteTask: (state, action) => {
            // Filtramos a tarefa com o ID que queremos remover
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskCompleted: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        editTask: (state, action) => {
            const { id, newText } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.text = newText;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const {
    addTask,
    deleteTask,
    toggleTaskCompleted,
    editTask,
    setFilter
} = tasksSlice.actions;

export default tasksSlice.reducer;