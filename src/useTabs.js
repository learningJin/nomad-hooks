import React, { useState } from 'react';

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if(allTabs || Array.isArray(allTabs)){
        return {
            currentItem : allTabs[currentIndex],
            changeItem : setCurrentIndex,
        };
    }
}

export default useTabs;

// import './App.css';
// import React, { useState } from 'react';

// import useInput from './useInput';

// const content = [
//     {
//         tab : 'section 1',
//         content : 'content 1',
//     },
//     {
//         tab : 'section 2',
//         content : 'content 2',
//     }
// ]

// const App = () => {
//     const { currentItem, changeItem } = useTabs(0, content);

//     return (
//         <div className="App">
//             {
//                 content.map( (item, index) => (
//                     <button onClick={()=>changeItem(index)} key={index}>{item.tab}</button>
//                 ))
//             }
//             <p>{ currentItem.content }</p>
//         </div>
//     );
// }

// export default App;
