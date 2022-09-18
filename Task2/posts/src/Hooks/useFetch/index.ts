import { useState, useCallback, useEffect } from "react";
import { IApiData, IData, TUseFech } from "./types";

function useFetch(endpoint: string): TUseFech {
  const [postData, setPostData] = useState<IData[]>([]);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setMessage("Loading...");
      const response = await fetch(endpoint);
      const apiData: IApiData[] = await response.json();

      apiData.forEach(({ title, body, id }: IApiData) => {
        setPostData((prevData) => [...prevData, { title, body, id }]);
      });
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    if (!isError) return;

    const timeout = setTimeout(() => {
      setIsError(false);
      setMessage("");
    }, 5000);

    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isError, isLoading, postData, message };
}

export { useFetch };
