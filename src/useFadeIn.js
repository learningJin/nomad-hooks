import React, { useEffect, useState, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
    // if(typeof duration !== 'number'){
    //     return;
    // }

    const element = useRef();

    useEffect(() => {
        
        if (element.current) {
            console.log(element);
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;;
            current.style.opacity = 1;
        }
    }, []);

    return {
        ref: element,
        style: { opacity: 0 },
    }
}

export default useFadeIn;

// import './App.css';
// import React, { useEffect, useState, useRef } from 'react';

// const App = () => {

//     const fadeInH1 = useFadeIn(1, 2);
//     const fadeInP = useFadeIn(10, 5);

//     return (
//         <div className="App">
//             <h1 {...fadeInH1} >Hello</h1>
//             <p {...fadeInP}>asdfsdf gdggss sdffsdfdfsdf</p>
//         </div>
//     );
// }

// export default App;
