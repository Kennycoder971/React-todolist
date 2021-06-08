import React,{useContext} from 'react'
import classes from './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'
import TodoListsContext from '../../store/todo-context'

export default function TodoList({ listTitle, listOfTodos, todoListId }) {
    const todoListCtx = useContext(TodoListsContext)
    console.log(listOfTodos);
   
    return (
        <div className={classes.todoList}>
            <div className={classes.head}> <h3>{listTitle}</h3> <p onClick={e => {
                todoListCtx.addTodo(todoListId,'hi')
                
            }}>+ Ajouter</p> </div>

            <ul>
                {
                    listOfTodos.map((todo,index) => {
                        return <TodoItem todoTitle={todo} key={index} />
                    })
                }

            </ul>
        </div>
    )
}
