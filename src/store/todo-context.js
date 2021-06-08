import React, { useState, createContext } from 'react'

const TodoListsContext = createContext({
    userName: '',
    bgColor: '#fffff',
    bgImageUrl: '',
    todoLists: [],
    changeBgImageUrl: (bgImageUrl) => { },
    changeBgColor: (bgColor) => { },
    changeUserName: (userName) => { },
    addTodoList: (todoList) => { },
    removeTodoList: (todoListId) => { },
    addTodo: (todoListId, todo) => { },
    removeTodo: (todoListId, todoIndex) => { }
})

export function TodoListsContextProvider({ children }) {
    const [userName, setUserName] = useState('')
    const [todoLists, setTodoLists] = useState([])
    const [bgColor, setBgColor] = useState('#ffffff')
    const [bgImageUrl, setBgImageUrl] = useState('')

    function changeBgImageUrl(bgImageUrl) {
        setBgImageUrl((prevImageUrl) => {
            return bgImageUrl
        })
    }
    function changeBgColor(bgColor) {
        setBgColor((prevBgColor) => {
            return bgColor
        })
    }
    function changeUserName(userName) {
        setUserName((prevUserName) => {
            return userName
        })
    }

    function addTodoListsHandler(todoList) {
        setTodoLists((prevTodoLists => {
            return [...prevTodoLists, todoList]
        }))
    }
    function removeTodoListsHandler(todoListId) {
        setTodoLists((prevTodoLists) => {
            return prevTodoLists.filter(todoList => {
                return todoList.id !== todoListId
            })
        })
    }

    function addTodo(todoListId, todo) {
        setTodoLists((prevTodoLists => {
            return prevTodoLists.map((todoList) => {
                console.log('triggered');
                if(todoList.id === todoListId) {
                    todoList.listOfTodos.push(todo)
                }
                return todoList
            })

            
        }))
    }

    function removeTodo(todoListId, todoIndex) {
        setTodoLists((prevTodoLists => {
            const foundTodoList = prevTodoLists.find(todoList => {
                return todoList.id === todoListId
            })

            foundTodoList.todos.splice(todoIndex, 1)
            return prevTodoLists
        }))
    }
    const context = {
        userName,
        todoLists,
        bgColor,
        bgImageUrl,
        changeBgImageUrl,
        changeBgColor,
        changeUserName,
        addTodoList: addTodoListsHandler,
        removeTodoList: removeTodoListsHandler,
        addTodo,
        removeTodo
    }


    return <TodoListsContext.Provider value={context}>
        {children}
    </TodoListsContext.Provider>
}

export default TodoListsContext