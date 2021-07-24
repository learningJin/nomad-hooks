const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = '';
    }
    const enablePrevent = () => window.addEventListener('beforeunload', listener);
    const disablePrevent = () => window.removeEventListener('beforeunload', listener);

    return {
        enablePrevent,
        disablePrevent,
    };
}

export default usePreventLeave;


// import './App.css';
// import React, { useEffect, useState, useRef } from 'react';



// const App = () => {
//     const { enablePrevent, disablePrevent } = usePreventLeave();

//     return (
//         <div className="App">
//             <button onClick={enablePrevent}>protect</button>
//             <button onClick={disablePrevent}>unprotect</button>
//         </div>
//     );
// } 

// export default App;
