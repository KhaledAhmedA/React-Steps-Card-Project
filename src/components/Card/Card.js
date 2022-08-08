import React from "react";
import style from "./Card.module.css";

const Card = ({ nameList, color, deleteHandler }) => {
    const cards = nameList.map(({ id, name, age, ads, phone, type }, idx) => (
        <div className={style.wrap} key={id} style={{
            backgroundColor: type === "boy" ? "gray" : color
        }}>
            <div>Name is : {name}</div>
            <div>Age is : {age}</div>
            <div>Ads is : {ads}</div>
            <div>Phone is : {phone}</div>
            <div className={style.deleteBtn} onClick={(event) => deleteHandler(event, id)}>X</div>
        </div>
    ))
    return (
        <div>{cards}</div>
    )
};

export default Card;