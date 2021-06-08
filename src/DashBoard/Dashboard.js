import React, { useContext, useState } from 'react'
import TodoListsContext from '../store/todo-context'
import classes from './Dashboard.module.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import {IoSettings} from 'react-icons/io5'
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../components/TodoList/TodoList'

export default function Dashboard() {
    
    const todoListCtx = useContext(TodoListsContext)
    const [listNameInputVal, setListNameInputVal] = useState('')

    return (
        <div>
            <header className={classes.header}>
                <h1>Bonjour {todoListCtx.userName}.</h1>
                <div className={classes.btnContainer}>
                    <Popup 
                        trigger={<button className='button'> <IoSettings/> <span>Paramètres</span></button>}
                        modal
                        className='popup-dashboard'
                    >
                        {
                            close => (
                                <div className='modal'>
                                   <div className={classes.modalContainer}>
                                   <h2>Paramètres</h2>
                                    <div className={classes.formControl}>
                                        <label>Nom</label>
                                        <input type="text" placeholder='Entrez votre nom' />
                                    </div>
                                    <div className={classes.formControl}>
                                        <label>Sélectionez une couleur</label>
                                        <div className={classes.selectColor}>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                            <div className={classes.currentColor}></div>
                                        </div>
                                    </div>
                                    <div className={classes.formControl}>
                                        <label>Url d'image</label>
                                        <input type="url" placeholder='https://url-image.com' />
                                    </div>
                                    <div className={classes.btnContainer}>
                                        <button className='button' onClick={close}>Annuler</button>
                                        <button className='button-green'>Sauvegarder</button>

                                    </div>
                                   </div>
                                </div>
                            )
                        }
                    </Popup>
                    <Popup 
                        trigger={<button className='button'> +<span>Ajouter une liste</span></button>}
                        modal
                        className='popup-dashboard'
                    >
                        {
                            close => (
                                <div className='modal'>
                                  <h2>Ajouter une liste</h2>
                                  <form onSubmit={e => {
                                      e.preventDefault()
                                      close()
                                  }}>
                                        <div className={classes.formControl}>
                                            <label>Nom</label>
                                            <input
                                                type="text"
                                                value={listNameInputVal}
                                                placeholder='Entrez votre nom'
                                                onChange={(e) => setListNameInputVal(e.target.value)}
                                            />
                                        </div>
                                        <button onClick={(e) => {
                                            todoListCtx.addTodoList({
                                                id:uuidv4(),
                                                listTitle:listNameInputVal,
                                                listOfTodos:[],
                                            })
                                            setListNameInputVal('')
                                        }} className='button-green'>Sauvegarder</button>
                                  </form>
                                    <br />
                                  <button onClick={close} className='button'>Fermer</button>
                                </div>
                            )
                        }
                    </Popup>
                </div>
            </header>

            <section className={classes.todolistsContainer}>
                        {
                            todoListCtx.todoLists.map((todoList) => {
                                return <TodoList 
                                listTitle={todoList.listTitle}
                                listOfTodos={todoList.listOfTodos}
                                todoListId={todoList.id}
                                key={todoList.id}
                                 />
                            }) 
                        }

            </section>
        </div>
    )
}
