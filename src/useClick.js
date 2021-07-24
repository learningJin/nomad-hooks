import React, { useEffect, useState, useRef } from 'react';

const useClick = (onClick) => {
    const element = useRef();

    useEffect( () => {
        if(element.current){
            element.current.addEventListener('click', onClick);
        }
        return ()=>{
            if(element.current){
                element.current.removeEventListener('click', onClick);
            }
        }
    },[])
    
    return element;
}


export default useClick;

// import './App.css';
// import React, { useEffect, useState, useRef } from 'react';



// const App = () => {
//     const onClick = () => {
//         console.log('say Hello');
//     }
//     const title = useClick(onClick);

//     return (
//         <div className="App">
//             <h2 ref={title}>hi</h2>
//         </div>
//     );
// } 

// export default App;
