import React from 'react'
import PopupModal from '../components/Popup/PopupModal'
import { AiTwotoneSetting } from 'react-icons/ai'
import classes from './Dashboard.module.css'
export default function DashBoardPopup() {
    return (

        <PopupModal
            TriggerComponent={
                <React.Fragment>
                    <AiTwotoneSetting />
                    <span>Paramètres</span>
                </React.Fragment>
            }
            className='popup-dashboard'
        >
            <div className={classes.popupContainer}>
                <h1>Paramètres</h1>
                <div className={classes.formControl}>
                    <label>Changer le nom</label>
                    <input type="text" placeholder='Nom' />
                </div>
                <div className={classes.formControl}>
                    <label>Sélectionner un thème</label>
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
                    <div className={classes.formControl}>
                        <label>Ajouter une url d'image</label>
                        <input type="text" placeholder=' https://url-image.com' />
                    </div>
                </div>
            </div>
        </PopupModal>
    )
}
