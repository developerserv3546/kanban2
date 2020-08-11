import {CREATE_TASK, EDIT_TASK, GET_ALL_TASKS, REORDER_TASKS, DELETE_TASK} from './actions';
import {initialState} from "../utils/initialState";
import {v4 as uuid} from "uuid";
import {statuses} from "../utils/statuses";

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TASKS:
            return state;
        case REORDER_TASKS:
            return reorderTasks(action.payload, state);
        case CREATE_TASK:
            return createTask(action.payload, state);
        case EDIT_TASK:
            return editTask(action.payload, state);
        case DELETE_TASK:
            return deleteTask(action.payload, state);
        default:
            return state;
    }
};

const deleteTask = (id, tasks) => {
    return tasks.filter(task => task.id !== id);
}

const editTask = (editedTask, tasks) => {
    return tasks.map(task => {
        if (task.id === editedTask.id) {
            task = {...task, ...editedTask};
        }
        return task;
    });
};

const createTask = (payload, tasks) => {
    const {title, description, priority} = payload;
    const newTasks = [...tasks];
    const index = tasks.filter(task => task.status === statuses[0]).length;
    newTasks.push({
        id: uuid(),
        title,
        description,
        status: statuses[0],
        priority,
        index
    });

    return newTasks;
};


const reorderTasks = (payload, tasks) => {
    const {draggableId, source, destination} = payload;
    if (source.droppableId === destination.droppableId) {
        const newTasks = [...tasks];

        if (destination.index < source.index) {
            newTasks.map(el => {
                if (el.status === source.droppableId && el.index >= destination.index && el.index < source.index) {
                    el.index = el.index + 1
                }
                return el;
            });
        } else {
            newTasks.map((el) => {
                if (el.status === source.droppableId && el.index <= destination.index && el.index > source.index) {
                    el.index = el.index - 1
                }
                return el;
            });
        }

        newTasks.map((el) => {
            if (el.status === source.droppableId && el.id === draggableId) {
                el.index = destination.index;
            }
            return el;
        });
        return newTasks;
    } else {

        const newTasks = tasks.map((el) => {
            if (el.status === source.droppableId && el.index > source.index) {
                el.index = el.index - 1;
            } else if (el.status === destination.droppableId && el.index >= destination.index) {
                el.index = el.index + 1;
            }
            return el;
        });

        newTasks.map(el => {
            if (el.id === draggableId) {
                el.status = destination.droppableId;
                el.index = destination.index;
            }
            return el;
        });
        return newTasks;

    }
}
