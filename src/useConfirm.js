import React, { useEffect, useState, useRef } from 'react';

const useConfirm = (msg, callback, onCancel) => {
    if(!callback || typeof callback !== 'function') {
        return;
    }
    if(onCancel && typeof onCanel !== 'function'){
        return;
    }

    const confirmAction = () => {
        if(window.confirm(msg)){
            callback();
        } else {
            onCancel();
        }
    }

    return confirmAction;

};

export default useConfirm;


// import './App.css';
// import React, { useEffect, useState, useRef } from 'react';



// const App = () => {
//     const deleteTheWorld = () => {
//         console.log('sdffsf')
//     }
//     const abort = () => {
//         console.log('aborted');
//     }
//     const confirmDelete = useConfirm('are you sure?', deleteTheWorld, abort);

//     return (
//         <div className="App">
//             <button onClick={confirmDelete}>delete the world</button>
//         </div>
//     );
// } 

// export default App;
