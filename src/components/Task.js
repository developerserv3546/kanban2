import React, {useState} from "react";
import {Draggable} from "react-beautiful-dnd";
import {priorities} from "../utils/priorities";
import EditTaskForm from "./EditTaskForm";
import DeleteTaskModal from "./DeleteTaskModal";

const Task = (props) => {

    const {task} = props;
    const {id, title, description, priority, index} = task;
    const [isEditTaskMode, setEditTaskMode] = useState(false);
    const [isDeleteTaskMode, setDeleteTaskMode] = useState(false);

    const getTitleClassName = () => {
        let titleClassName = 'rounded-sm text-white text-center m-0 p-1 ';
        switch (priority) {
            case priorities[0]:
                titleClassName += 'bg-danger';
                break;
            case priorities[1]:
                titleClassName += 'bg-warning';
                break;
            case priorities[2]:
                titleClassName += 'bg-success';
                break;
            default:
                return titleClassName;
        }
        return titleClassName;
    }

    const onEditTaskClick = () => {
        setEditTaskMode(true);
    }

    const onDeleteTaskClick = () => {
        setDeleteTaskMode(true);
    }

    return (
        <>
            <EditTaskForm isEditTaskMode={isEditTaskMode} setEditTaskMode={setEditTaskMode} task={task}/>
            <DeleteTaskModal isDeleteTaskMode={isDeleteTaskMode} setDeleteTaskMode={setDeleteTaskMode} task={task}/>
            <Draggable draggableId={id} index={index}>
                {
                    provided => {
                        return (
                            <div {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                                 ref={provided.innerRef}
                                 className="shadow rounded-sm task">
                                <div className={getTitleClassName()}>{title}</div>
                                <div className="text-left p-2">{description}</div>
                                <div className="text-secondary p-2 row">
                                    <div className="col-7 text-left">Priority: {priority}</div>
                                    <div className="col-5 text-right">
                                        <i className="fa fa-pencil rounded-sm icon" onClick={onEditTaskClick}/>
                                        <i className="fa fa-trash rounded-sm icon" onClick={onDeleteTaskClick}/>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </Draggable>
        </>
    );
};

export default Task;