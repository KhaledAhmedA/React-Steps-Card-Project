import React from "react";
// import style from "./CardList.module.css";
import Card from "../Card/Card";

const CardList = ({ nameList, deleteHandler }) => {
    const cards = nameList.map(({ id, ...otherProps }) => (
        <Card key={id} {...otherProps} id={id} deleteHandler={deleteHandler} />
    )
        // <div className={style.wrap} key={id} style={{
        //     backgroundColor: type === "boy" ? "gray" : color
        // }}>
        //     <div>Name is : {name}</div>
        //     <div>Age is : {age}</div>
        //     <div>Ads is : {ads}</div>
        //     <div>Phone is : {phone}</div>
        //     <div className={style.deleteBtn} onClick={(event) => deleteHandler(event, id)}>X</div>
        // </div>
    )
    return (
        <div>{cards}</div>
    )
};

export default CardList;