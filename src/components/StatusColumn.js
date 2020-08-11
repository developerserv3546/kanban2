import React from "react";
import {connect} from "react-redux";
import Task from "./Task";

const StatusColumn = (props) => {

    const {tasks, status} = props;

    const filteredTasks = () => tasks.filter(task => task.status === status);

    return (
        <>
            <div className="font-weight-bold text-secondary mb-2">{status} ({filteredTasks().length} of {tasks.length})</div>
            {
                filteredTasks().sort((a, b) => a.index - b.index)
                    .map((task) => {
                        return (
                            <Task key={task.id} task={task}/>
                        );
                    })
            }
        </>
    );
};

const mapStateToProps = state => {
    return {tasks: state};
}

export default connect(mapStateToProps)(StatusColumn);