import React from 'react'
import classes from './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({ listTitle }) {
    return (
        <div className={classes.todoList}>
            <div className={classes.head}> <h3>{listTitle}</h3> <p>+ Ajouter</p> </div>

            <ul>
                <TodoItem />

            </ul>
        </div>
    )
}
