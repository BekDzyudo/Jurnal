import React, { useEffect, useState } from "react";

function useGetFetch(url, language) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url, {
          method: "GET",
          headers: {
            "Accept-Language": language,
            "Content-Type": "application/json"
          }
        });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPending(false);
      }
    };
    fetchData();
    
  }, [url, language]);

  return { data, isPending, error };
}

export default useGetFetch;