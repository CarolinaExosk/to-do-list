import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-input-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Adicionar nova tarefa..."
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TaskInput;