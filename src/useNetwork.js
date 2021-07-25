
import React, { useEffect, useState, useRef } from 'react';

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);

    const handleChange = () => {
        if (typeof onChange === 'function') {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);

        return () => {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        }
    }, []);
    
    return status;
}

export default useNetwork;

// import React, { useEffect, useState, useRef } from 'react';

// const App = () => {
//     const onChange = (online) => {
//         console.log(online ? 'we just wnet online' : 'we are offline');
//     }
//     const online = useNetwork(onChange);

//     return (
//         <div className="App">
//             <h1>{online ? 'online' : 'offline'}</h1>
//         </div>
//     );
// }

// export default App;
