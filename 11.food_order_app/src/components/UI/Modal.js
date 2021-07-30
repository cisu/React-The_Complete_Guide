import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>  
}

// target the id we want to connect with the portal
const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
            {/* create a portal  */}
          {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}

          {ReactDOM.createPortal(<ModalOverlay>
              {props.children}
          </ModalOverlay>, portalElement) }           

        </Fragment>
    )
}

export default Modal
