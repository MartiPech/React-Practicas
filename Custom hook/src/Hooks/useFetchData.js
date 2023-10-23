import { useState, useEffect } from "react";
import { FetchData } from '../helpers/FetchData'

export const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Establece isLoading en true al comenzar la solicitud
    FetchData(endPoint)
      .then((res) => {
        setData(res.data);
        setIsLoading(res.isLoading);
      })
      .catch((error) => {
        console.log("Error en useFetchData:", error);
        setIsLoading(false); // Asegúrate de manejar el estado en caso de error   
      });
  }, [endPoint]);

  return { data, isLoading };
};