import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, filter } = useSelector((state) => state.tasks);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed;
        }
        if (filter === 'pending') {
            return !task.completed;
        }
        return true;
    });

    return (
        <ul className="task-list">
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;