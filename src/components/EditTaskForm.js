import React, {useState} from "react";
import {connect} from 'react-redux';
import {editTask} from "../store/actions";
import Modal from "react-bootstrap/Modal";
import {priorities} from "../utils/priorities";

const EditTaskForm = (props) => {

    const {isEditTaskMode, setEditTaskMode, task, editTask} = props;
    const {id, title, description, priority} = task;
    const [taskTitle, setTaskTitle] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskPriority, setTaskPriority] = useState(priority);

    const onTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    }

    const onPriorityChange = (e) => {
        setTaskPriority(e.target.value);
    }

    const onSaveClick = () => {
        editTask(id, taskTitle, taskDescription, taskPriority);
        setTaskTitle(taskTitle);
        setTaskDescription(taskDescription);
        setTaskPriority(taskPriority);
        setEditTaskMode(false);
    }
    const isSaveDisabled = taskTitle.trim() === '' || taskDescription.trim() === '';

    const onHide = () => {
        setTaskTitle(title);
        setTaskDescription(description);
        setTaskPriority(priority);
        setEditTaskMode(false);
    }

    return (
        <Modal show={isEditTaskMode} onHide={onHide} centered>
            <div className="p-3">
                <h4>Edit Task</h4>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" id="title" value={taskTitle} onChange={onTitleChange}
                           placeholder="Enter Task Title..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control min-h-100" id="description" defaultValue={taskDescription}
                              onChange={onDescriptionChange} placeholder="Enter Task Description..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" className="form-control" value={taskPriority} onChange={onPriorityChange}>
                        {
                            priorities.map((priority) => {
                                return <option key={priority} value={priority}>{priority}</option>;
                            })
                        }
                    </select>
                </div>
                <button onClick={onHide} className="btn btn-secondary float-right ml-2">Cancel</button>
                <button onClick={onSaveClick} className="btn btn-primary float-right" disabled={isSaveDisabled}>Save
                </button>
            </div>
        </Modal>
    );
};

const mapDispatchToProps = {editTask};

export default connect(null, mapDispatchToProps)(EditTaskForm);