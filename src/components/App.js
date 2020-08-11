import React, {useState} from 'react';
import Board from "./Board";
import AddTaskForm from "./AddTaskForm";

const App = () => {

    const [isCreateTaskMode, setCreateTaskMode] = useState(false);

    const onClickCreateTask = () => {
        setCreateTaskMode(true);
    };

    return (
        <div className="text-center mt-5">
            <AddTaskForm isCreateTaskMode={isCreateTaskMode} setCreateTaskMode={setCreateTaskMode}/>
            <Board/>
            <button className="btn btn-light m-3" onClick={onClickCreateTask}>Create Task</button>
        </div>
    );
}

export default App;
