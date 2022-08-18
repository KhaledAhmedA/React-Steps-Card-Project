import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
import styles from "../Layout/Form.module.css";





const AddUser = () => {


    const [input, setInput] = useState({
        name: "",
        age: "",
        adds: "",
        phone: ""
    });


    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        console.log(ev)
    }

    const inputHnadler = (e) => {
        console.log(e.target);
        const key = e.target.id;
        const value = e.target.value;
        setInput((prevState) => {
            console.log(prevState);
            return { ...prevState, [key]: value }
        }) // or ...input before key without arrowfun 
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Type Name"
                        value={input.name}
                        onChange={inputHnadler}
                    />
                </div>
            </Form.Controller>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        id="age"
                        placeholder="Type Age"
                        value={input.age}
                        onChange={inputHnadler}
                    />
                </div>
            </Form.Controller>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="ads">Address</label>
                    <input
                        type="text"
                        id="ads"
                        placeholder="Type Address"
                        value={input.adds}
                        onChange={inputHnadler}
                    />
                </div>
            </Form.Controller>
            <Form.Controller>
                <div className={styles.control}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Type Phone"
                        value={input.phone}
                        onChange={inputHnadler}
                    />
                </div>
            </Form.Controller>
            <div>
                <Button type="submit">Save</Button>
                <Button type="reset">Reset</Button>
            </div>
        </Form>
    )
}

export default AddUser;