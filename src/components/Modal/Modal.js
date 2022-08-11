import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";


const Backdrop = ({ close, show }) => {
    return <div className={`${styles.backDrop} ${show ? styles.showBackdrop : null}`} onClick={close}></div>
}

const Overlay = ({ show }) => {
    return <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}></div>
}


const Modal = ({ show, closeModal }) => {
    return (
        // show && (
        <Fragment>
            {ReactDom.createPortal(
                <Fragment>
                    <Backdrop close={closeModal} show={show} />
                    <Overlay show={show} />
                </Fragment>,
                document.getElementById('modal')

            )
            }


            {/* method to make it with two portal div */}
            {/* {ReactDom.createPortal(<Backdrop />, document.getElementById("backdrop"))}
            {ReactDom.createPortal(<Overlay />, document.getElementById("overlay"))} */}
        </Fragment>
    )

};

export default Modal;