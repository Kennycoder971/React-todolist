import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import TodoListsContext from '../store/todo-context'
import classes from './Home.module.css'

export default function Home() {
    const history = useHistory()
    const todoListCtx = useContext(TodoListsContext)
    const [userName, setUserName] = useState('');

    return (
        <div className={classes.homeContainer}>
            <form onSubmit={e => {
                e.preventDefault()
                history.push('/dashboard')
                todoListCtx.changeUserName(userName)
            }}>
                <h2>Votre nom</h2>
                <input type="text"
                    placeholder='Entrez votre nom'
                    value={userName}
                    onChange={e => setUserName(e.target.value)} />
                <button className='button'>Confirmer</button>
            </form>
        </div>
    )
}
