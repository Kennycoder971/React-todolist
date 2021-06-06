import React from 'react'
import classes from './Layout.module.css'
export default function Layout({ styles, children }) {
    return (
        <div className={classes.layout}>
            <div className={classes.topColor}></div>

            <div className={classes.container}>
                {children}

            </div>
        </div>
    )
}
