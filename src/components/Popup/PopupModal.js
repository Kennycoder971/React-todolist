import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function PopupModal({ TriggerComponent, children, className }) {

    return (
        <Popup
            trigger={<button className='button'>{TriggerComponent}</button>}
            modal
            nested
            className={className && className}
        >
            {close => {
                return <div>
                    {children}
                    <button onClick={close}>Close</button>
                </div>
            }}



        </Popup>


    )
}

