import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  //
  //
  //

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.status);
        }
        const data = await res.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };

    //
    //
    //

    fetchData();
  }, [url]);

  //
  //
  //

  return { data, isPending, error };
};
