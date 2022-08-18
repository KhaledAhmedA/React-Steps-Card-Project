import React, { useState } from "react";
import styles from "./FilterInput.module.css";

const Filter = ({ filteration }) => {
    const [filterState, setFilter] = useState("");

    const filterHandler = (e) => {
        const name = e.target.value;
        setFilter(name);
        // console.log(filterState);
        filteration(name);

        if (name.length > 10) {
            alert("10")
        }
    }
    return (
        <div className={styles.mp}>
            <input type="text" placeholder="useRef" value={filterState} onChange={filterHandler} />{/* ref={inputEl} onChange={refHandler}*/}
            {/* <button onClick={focusHandlerByState}>click focus</button> */}
        </div>)
};

export default Filter;