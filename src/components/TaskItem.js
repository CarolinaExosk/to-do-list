import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompleted, editTask } from '../features/tasks/tasksSlice';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask({ id: task.id, newText: newText }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTaskCompleted(task.id))}
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="edit-input"
                    />
                ) : (
                    <span>{task.text}</span>
                )}
            </div>
            <div className="task-actions">
                <button onClick={handleEdit} className="icon-button">
                    {isEditing ? <FaSave /> : <FaEdit />}
                </button>
                <button onClick={() => dispatch(deleteTask(task.id))} className="icon-button">
                    <FaTrash />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;