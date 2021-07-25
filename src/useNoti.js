
import React, { useEffect, useState, useRef } from 'react';

const useNoti = (title, options) => {
    if(!("Notification" in window)){
        console.log('aa')
        return;
    }

    const fireNoti = () => {
        console.log('fbb')
        if(Notification.permission !== "granted"){
            Notification.requestPermission().then(permission => {
                if(permission === 'granted'){
                    new Notification(title, options);
                } else {
                    return;
                }
            })
        } else {
            console.log('ccccc')
            new Notification(title, options);
        }
    }

    return fireNoti; 
}

export default useNoti;

// import './App.css';
// import React, { useEffect, useState, useRef } from 'react';
// const App = () => {
//     const trigerNoti = useNoti('hi');

//     return (
//         <div className="App" style={{ height: "1000vh" }}>
//             <button onClick={trigerNoti}>triger</button>
//         </div>
//     );
// }

// export default App;
