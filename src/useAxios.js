import defaultAxios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);

    // if (!opts.url) {
    //     return;
    // }

    const refetch = () => {
        setState({
            ...state,
            loading : true,
        });
        setTrigger(Date().now);
    }
    useEffect(() => {
        axiosInstance(opts).then(response => {
            setState({
                ...state,
                loading : false,
                data : response,
            })
        }).catch(err=>{
            setState({
                ...state,
                loading : false,
                error : err,
            })
        })
    }, [trigger]);

    return {
        ...state,
        refetch,
    };
}

export default useAxios;