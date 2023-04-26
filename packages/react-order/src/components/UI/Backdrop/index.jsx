import React from 'react'
import classes from './Backdrop.module.css'
import ReactDom from 'react-dom'

const BackdropRoot = document.getElementById('backdrop-root');

export default function Backdrop(props) {
    return ReactDom.createPortal(<div {...props} className={`${classes.Backdrop} ${props.className}`}>
        {props.children}
    </div>, BackdropRoot)

}
