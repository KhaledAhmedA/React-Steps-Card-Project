import React from "react";
import styles from "./Form.module.css";

const Button = (props) => {
    return <button style={{ marginRight: "20px" }}
        onClick={props.onClick}
        type={`${props.type ? props.type : 'button'}`}
        className={styles.button}>
        {props.children}
    </button>
}

export default Button;