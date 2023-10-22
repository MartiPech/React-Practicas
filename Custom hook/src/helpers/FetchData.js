export const FetchData =  async(endPoint) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const data = await response.json();
      return{
        data,
        isLoading:false
      };
    } catch (error) {
      console.log("Error en la solicitud:", error);
      throw error;
    }
  };

