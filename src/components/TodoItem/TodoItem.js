import React from 'react'
import classes from './TodoItem.module.css'

export default function TodoItem() {
    return (
        <li className={classes.todoItem}>
            <span>hello</span>
            <button>x</button>
        </li>
    )
}
