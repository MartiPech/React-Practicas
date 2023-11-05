import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error.message,
      });
    }
  };

  useEffect(() => {
    getFetch();
    // Agregar lógica de cancelación si es necesario
    return () => {
      // Cancelar la solicitud en curso, si aplicable
    };
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};