import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, age, ads, phone, type, color = "orange", deleteHandler }) => {
    return (
        <div className={styles.wrap} style={{
            backgroundColor: type === "boy" ? "gray" : color
        }}>
            <div>Name is : {name}</div>
            <div>Age is : {age}</div>
            <div>Ads is : {ads}</div>
            <div>Phone is : {phone}</div>
            <div className={styles.deleteBtn} onClick={(event) => deleteHandler(event, id)}>X</div>
        </div>
    )
}

export default Card;