import React from 'react'
import classes from './TodoItem.module.css'

export default function TodoItem({todoTitle}) {
    return (
        <li className={classes.todoItem}>
            <span>{todoTitle}</span>
            <button>x</button>
        </li>
    )
}
