import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {priorities} from "../utils/priorities";
import {connect} from 'react-redux';
import {createTask} from "../store/actions";

const AddTaskForm = (props) => {

    const {isCreateTaskMode, setCreateTaskMode, createTask} = props;
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState(priorities[priorities.length - 1]);

    const onTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    }

    const onPriorityChange = (e) => {
        setTaskPriority(e.target.value);
    }

    const onHide = () => {
        setTaskTitle('');
        setTaskDescription('');
        setTaskPriority(priorities[priorities.length - 1]);
        setCreateTaskMode(false);
    }

    const onCreate = () => {
        createTask(taskTitle, taskDescription, taskPriority);
        onHide();
    }

    const isSaveBtnDisabled = taskTitle.trim() === '' || taskDescription.trim() === '';

    return (
        <Modal show={isCreateTaskMode} onHide={onHide} centered>
            <div className="p-3">
                <h4>Create Task</h4>
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
                <button onClick={onCreate} className="btn btn-primary float-right" disabled={isSaveBtnDisabled}>Save</button>
            </div>
        </Modal>
    );
};

const mapDispatchToProps = {createTask};

export default connect(null, mapDispatchToProps)(AddTaskForm);