
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import useAxios from './useAxios';

const App = () => {
    const { loading, data, error, refetch } = useAxios({
        url: "https://script.google.com/macros/s/AKfycbyChcXD-jMoee85UP-gn_WnsNBz__QoN-B_njZqnra7fVTqMPeMgpz7GcTRSrzfNpmj_Q/exec",
    });

    console.log(loading, data, error);

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h3>{data && data.status}</h3>
            <h3>{loading && "loading"} </h3>
            <button onClick={refetch}>refetch</button>
        </div>
    );
}

export default App;
