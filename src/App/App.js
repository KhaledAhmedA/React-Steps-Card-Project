import React, { Fragment, useState, useRef } from "react";
import CardList from "../components/CardList/CardList";
import styles from "./App.module.css";
import Filter from "../components/filter/Filter";
import Modal from "../components/Modal/Modal";

// const App = () => {
//     const styles = { color: "red", marginTop: "150px" };
//     const ele = "Hello from app component";
//     const names = "nn";
//     const arrNames = ["Khaled", "Ahmed", "Mohamed"];
//     return (
//         <Fragment>
//             <h1 style={styles}>{names === "khaled" ? names : ele}</h1>
//             <div>Names: {arrNames.map((el) => (<p>{el}</p>))}</div>
//         </Fragment>
//     );
// };


const App = () => {
    const inputEl = useRef(null);
    const [toggleState, setToggle] = useState(true);
    const [filter, setFilter] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [state, setState] = useState(
        [
            { id: 1, name: "Ahmed", age: 38, adds: "Alex", phone: "0192883", type: "boy" },
            { id: 2, name: "Mohamed", age: 23, adds: "Alex", phone: "0192883", type: "boy" },
            { id: 3, name: "Yasmine", age: 45, adds: "Alex", phone: "0192883", type: "girl" },
            { id: 4, name: "Taha", age: 33, adds: "Alex", phone: "01928833", type: "boy" },
            { id: 5, name: "Roqaia", age: 34, adds: "Alex", phone: "0192883", type: "girl" },
        ]);


    // const arrObjs = [
    //     { name: "Ahmed", age: 38, adds: "Alex", phone: "0192883" },
    //     { name: "Mohamed", age: 23, adds: "Alex", phone: "0192883" },
    //     { name: "Maged", age: 45, adds: "Alex", phone: "0192883" },
    //     { name: "Taha", age: 33, adds: "Alex", phone: "01928833" },
    //     { name: "Hossam", age: 34, adds: "Alex", phone: "0192883" }
    // ];

    const arrObjs2 = [
        { name: "Ahmed", age: 38, adds: "Alex", phone: "0192883", type: "boy" },
        { name: "Mohamed", age: 23, adds: "Alex", phone: "0192883", type: "boy" },
        { name: "Yasmine", age: 45, adds: "Alex", phone: "0192883", type: "girl" },
        { name: "Taha", age: 33, adds: "Alex", phone: "01928833", type: "boy" },
        { name: "Roqaia", age: 34, adds: "Alex", phone: "0192883", type: "girl" }
    ];
    // const frames = arrObjs.map(
    //     ({ name, age, adds, phone }, indx) => (
    //         <div className="wrap" key={indx}>
    //             <p>Name is : {name}</p>
    //             <p>Age is : {age}</p>
    //             <p>Address : {adds}</p>
    //             <p>Phone : {phone}</p>
    //         </div>));
    // return <div className="container">{frames}</div>;

    const toggleHandler = () => {
        // can write this state directly in oclick within arrow func
        // setToggle(!toggleState);
    };



    const deleteHandler = (event, selectedID) => {
        //  set state as a object
        // const deleteOperation = state.filter((el, idx) => idx !== clickedIdx);
        // setState(deleteOperation);
        // second way called setState as a function
        setState((prevState) => {
            console.log(prevState)
            return prevState.filter(el => el.id !== selectedID);

        });
        console.log(state);
    };

    // out side state return newest changes
    // console.log("out side state", state);

    // const refHandler = () => { console.log(inputEl.current.value) };
    // const focusHandlerByState = () => { inputEl.current.focus() }

    const filterNames = (name) => {
        setFilter(name);
    }

    const namesHandler = () => {
        console.log(filter);
        if (filter !== 0) {
            return state.filter((el) => el.name.includes(filter))
        }
        return state;
    }

    return (
        <React.StrictMode>
            <div className={styles.container}>
                <Modal show={showModal} closeModal={() => setShowModal(false)} />
                <h1>List of Data</h1>

                <div style={{ display: "flex", merginBottom: "10px" }}>
                    <button style={{ marginRight: "20px" }} onClick={() => { setToggle(!toggleState) }}
                        className={styles.button}>
                        {toggleState ? "Hide Names" : "Show Names"}
                    </button>

                    <button className={styles.button}
                        onClick={() => setShowModal(true)}
                    >New Record</button>
                </div>

                <Filter filteration={filterNames} />

                {/* <div style={{ marginBottom: "20px" }}>
                    <input type="text" placeholder="useRef" /> */}
                {/* ref={inputEl} onChange={refHandler}*/}
                {/* <button onClick={focusHandlerByState}>click focus</button> */}
                {/* </div> */}

                <div className={toggleState ? styles.show : styles.hide}>
                    <CardList nameList={namesHandler()} deleteHandler={deleteHandler} color="orange" />
                </div>
                {/* reusable component */}
                {/* <h1>arrNames Two</h1>
                <Card nameList={arrObjs2} color="orange" type="Two" /> */}
            </div>
        </React.StrictMode >
    )
};
export default App;