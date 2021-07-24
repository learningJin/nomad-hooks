import React, { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }

    useEffect(updateTitle, [title])
    return setTitle;
};

export default useTitle;

// import './App.css';
// import React, { useEffect, useState } from 'react';

// import useInput from './useInput';
// import useTabs from './useTabs';



// const App = () => {
//     const titleUpdater = useTitle("Loading");
//     setTimeout(()=>{titleUpdater("Home")}, 2000);
//     return (
//         <div className="App">
//             <h1>hi</h1>
//         </div>
//     );
// }

// export default App;
