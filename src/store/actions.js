export const CREATE_TASK = 'CREATE_TASK';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const REORDER_TASKS = 'REORDER_TASKS';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const reorderTasks = (draggableId, source, destination) => {
    return {
        type: REORDER_TASKS,
        payload: {draggableId, source, destination}
    }
};

export const createTask = (title, description, priority) => {
    return {
        type: CREATE_TASK,
        payload: {title, description, priority}
    }
};

export const editTask = (id, title, description, priority) => {
    return {
        type: EDIT_TASK,
        payload: {id, title, description, priority}
    }
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
};