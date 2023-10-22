import { useState, useEffect } from "react";

export const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.log("Error en la solicitud:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return { data, isLoading };
};