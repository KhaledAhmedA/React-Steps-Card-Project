import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";
// import Form from "../Layout/Form";
// import Button from "../Layout/Button";


// const onSubmitHandler = (ev) => {
//     ev.preventDefault();
//     console.log(ev)
// }

const Backdrop = ({ close, show }) => {
    return <div className={`${styles.backDrop} ${show ? styles.showBackdrop : null}`} onClick={close}></div>
}

const Overlay = ({ children, show }) => {
    return <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
        {/* <Form onSubmit={onSubmitHandler}>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Type Name" />
                </div>
            </Form.Controller>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" placeholder="Type Age" />
                </div>
            </Form.Controller>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="ads">Address</label>
                    <input type="text" id="ads" placeholder="Type Address" />
                </div>
            </Form.Controller>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="Type Phone" />
                </div>
            </Form.Controller>
            <div>
                <Button type="submit">Save</Button>
                <Button type="reset">Reset</Button>
            </div>
        </Form> */}
        {children}
    </div>
}


const Modal = ({ children, show, closeModal }) => {
    return (
        // show && (
        <Fragment>
            {ReactDom.createPortal(
                <Fragment>
                    <Backdrop close={closeModal} show={show} />
                    <Overlay show={show}>{children}</Overlay>
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