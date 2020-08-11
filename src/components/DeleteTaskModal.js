import React from "react";
import Modal from "react-bootstrap/Modal";
import {connect} from 'react-redux';
import {deleteTask} from "../store/actions";

const DeleteTaskModal = (props) => {

    const {isDeleteTaskMode, setDeleteTaskMode, task, deleteTask} = props;
    const {id, title} = task;

    const onHide = () => {
        setDeleteTaskMode(false);
    }

    const onDeleteClick = () => {
        deleteTask(id);
        onHide();
    }

    return (
        <Modal show={isDeleteTaskMode} onHide={onHide} centered>
            <div className="p-3">
                <h4>Delete Task</h4>
                <p>Are you sure you want to delete this task: '{title}'?</p>
                <button onClick={onHide} className="btn btn-secondary float-right ml-2">Cancel</button>
                <button onClick={onDeleteClick} className="btn btn-primary float-right">Delete</button>
            </div>
        </Modal>
    );
};

const mapDispatchToProps = {deleteTask};

export default connect(null, mapDispatchToProps)(DeleteTaskModal);