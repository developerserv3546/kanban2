import React from "react";
import {connect} from 'react-redux';
import {reorderTasks} from "../store/actions";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {statuses} from "../utils/statuses";
import StatusColumn from "./StatusColumn";

const Board = (props) => {

    const onDragEnd = result => {
        const {draggableId, source, destination} = result;

        if (destination) {
            props.reorderTasks(draggableId, source, destination);
        }
    };

    const onDraggingOver = (isDraggingOver) => ({
        backgroundColor: isDraggingOver ? '#bee1ff' : '#fff'
    });

    return (
        <div className="board">
            <DragDropContext onDragEnd={onDragEnd}>
                {
                    statuses.map(status => {
                        return (
                            <Droppable droppableId={status} key={status}>
                                {
                                    (provided, snapshot) => {
                                        return (
                                            <div ref={provided.innerRef} className="status-col" style={onDraggingOver(snapshot.isDraggingOver)}>
                                                <StatusColumn status={status}/>
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }
                                }
                            </Droppable>
                        );
                    })
                }
            </DragDropContext>
        </div>
    );
};

const mapDispatchToProps = {reorderTasks};

export default connect(null, mapDispatchToProps)(Board);