
import './App.css';
import React, { useEffect, useState, useRef } from 'react';

const useFullScreen = (callback) => {
    const element = useRef();

    const triggerFull = () => {
        if (element.current) {
            if(element.current.requestFullscreen){
                element.current.requestFullscreen();
            } else if(element.current.mozRequestFullscreen) {
                element.current.mozRequestFullscreen();
            } else if(element.current.webkitRequestFullscreen){
                element.current.webkitRequestFullscreen();
            } else if(element.current.msRequestFullscreen){
                element.current.msRequestFullscreen();
            }

            if(callback && typeof callback==='function'){
                callback(true);
            }
        }
    }
    const exitFull = () => {
        if(document.exitFullscreen){
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen){
            document.mozCancelFullScreen(); 
        } else if (document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen){
            document.msExitFullscreen();
        }

        if(callback && typeof callback==='function'){
            callback(false);
        }
    }

    return { 
        element, 
        triggerFull, 
        exitFull 
    };
}

const App = () => {
    const onFullS = (isFull) => {
        console.log(isFull);
    }

    const { element, triggerFull, exitFull } = useFullScreen(onFullS);

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img alt="aa" src="https://www.knou.ac.kr/images/knou/common/logo-header.png" />
                <button onClick={exitFull}>nomal screen</button>
            </div>
            <button onClick={triggerFull}>full screen</button>
        </div>
    );
}

export default App;
