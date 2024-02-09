import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            try {
                const jsonData = localStorage.getItem("tasks");
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
