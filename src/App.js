
import './App.css';
import React, { useState } from 'react';

import useInput from './useInput';


const App = () => {
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Wonddsdn", maxLen);

    return (
        <div className="App">
            <h1>hi</h1>
            <input placeholder="Name" {...name}></input>
        </div>
    );
}

export default App;
