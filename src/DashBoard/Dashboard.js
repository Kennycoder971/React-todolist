import React, { useContext } from 'react'
import TodoListsContext from '../store/todo-context'
import DashboardPopup from './DashBoardPopup'
import classes from './Dashboard.module.css'
import PopupModal from '../components/Popup/PopupModal'
export default function Dashboard() {

    const todoListCtx = useContext(TodoListsContext)

    return (
        <div>
            <header className={classes.header}>
                <h1>Bonjour {todoListCtx.userName}.</h1>
                <div className={classes.btnContainer}>
                    <DashboardPopup />

                </div>
            </header>


        </div>
    )
}
