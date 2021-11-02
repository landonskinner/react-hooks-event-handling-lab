// Code Keypad Component Here
import React from "react"

const Keypad = () => {
    return (
        <input type="password" onChange={addInput}></input>
    )
}

const addInput = (event) => {
    console.log('Entering password...')
}

export default Keypad