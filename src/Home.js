import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import TodoListsContext from './store/todo-context'

export default function Home() {
    const history = useHistory()
    const todoListCtx = useContext(TodoListsContext)
    const [userName, setUserName] = useState('');

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                history.push('/dashboard')
                todoListCtx.changeUserName(userName)
            }}>
                <input type="text"
                    placeholder='Entrez votre nom'
                    value={userName}
                    onChange={e => setUserName(e.target.value)} />
                <button>Confirmer</button>
            </form>
        </div>
    )
}
