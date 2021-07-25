
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import useAxios from './useAxios';

const App = () => {
    const { loading, data, error, refetch } = useAxios({
        url: "https://script.google.com/macros/s/AKfycbzLAvetX-sdnYwnHh8WvbxOkSWt9ckuaStB0N6dOCBaIIxQpBye7Er-yonaWj6kzfnZiw/exec",
    });

    console.log(loading, data, error);

    return (
        <div className="App">
            
            <h3>{loading && "loading"} </h3>
            <h3>{data && data.status}</h3>
            <p>{data&&JSON.stringify(data.data.data)}</p>
            <button onClick={refetch}>refetch</button>
        </div>
    );
}

export default App;
