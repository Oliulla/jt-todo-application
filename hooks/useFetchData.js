import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                if (!abortController.signal.aborted) {
                    setError(error);
                    setLoading(false);
                }
            }
        };

        fetchData();

        // Clean-up function
        return () => {
            abortController.abort();
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
