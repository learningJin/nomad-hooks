const useBeforeLeave = (onBefore) => {
    // if(typeof onBefore !== 'function'){
    //     return;
    // }
    const handle = (event) => {
        const { clientY } = event;

        if (clientY <= 0) { onBefore(); }

    }

    useEffect(() => {
        document.addEventListener('mouseleave', handle);
        return () => document.removeEventListener('mouseleave', handle);
    }, []);
}

export default useBeforeLeave;


// import './App.css';
// import React, { useEffect, useState, useRef } from 'react';



// const App = () => {
//     const begForLife = () => console.log('please don\'t leave');
//     useBeforeLeave(begForLife);

//     return (
//         <div className="App">
//             <h1>hi</h1>
//         </div>
//     );
// }

// export default App;
