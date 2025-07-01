import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasks/tasksSlice';

const FilterButtons = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.tasks.filter);

    return (
        <div className="filter-buttons">
            <button
                onClick={() => dispatch(setFilter('all'))}
                className={currentFilter === 'all' ? 'active' : ''}
            >
                Todas
            </button>
            <button
                onClick={() => dispatch(setFilter('pending'))}
                className={currentFilter === 'pending' ? 'active' : ''}
            >
                Pendentes
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))}
                className={currentFilter === 'completed' ? 'active' : ''}
            >
                Concluídas
            </button>
        </div>
    );
};

export default FilterButtons;