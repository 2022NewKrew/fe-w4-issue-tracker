import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    setErrorMsg(`response error. status code: ${res.status}`);
                }
                const { data } = await res.json();
                setData(data);
                setLoading(false);
            } catch (e) {
                let message = 'Unknown Error';
                if (e instanceof Error) message = e.message;

                console.error('exception occured!!', message);
                setErrorMsg(message);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, errorMsg, loading };
};
