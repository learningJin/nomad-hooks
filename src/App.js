
import './App.css';
import React, { useEffect, useState, useRef } from 'react';

const useScroll = () => {

    const [state, setState] = useState({
        x: 0,
        y: 0,
    });

    const onScroll = event => {
        setState({
            x : window.scrollX,
            y : window.scrollY,
        });
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return state;
}

const App = () => {
    const { y } = useScroll();

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>hihi</h1>
        </div>
    );
}

export default App;
