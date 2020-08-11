import {v4 as uuid} from "uuid";
import {statuses} from "./statuses";
import {priorities} from "./priorities";

export const initialState = [
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[0],
        priority: priorities[0],
        index: 0
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[1],
        priority: priorities[1],
        index: 0
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[2],
        priority: priorities[2],
        index: 0
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[3],
        priority: priorities[0],
        index: 0
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[0],
        priority: priorities[1],
        index: 1
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[1],
        priority: priorities[1],
        index: 1
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[2],
        priority: priorities[2],
        index: 1
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[3],
        priority: priorities[0],
        index: 1
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[0],
        priority: priorities[1],
        index: 2
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[1],
        priority: priorities[1],
        index: 2
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[2],
        priority: priorities[2],
        index: 2
    },
    {
        id: uuid(),
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        status: statuses[3],
        priority: priorities[0],
        index: 2
    }
];