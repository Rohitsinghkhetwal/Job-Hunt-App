import { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-native";



 export const useFetch =  async(endPoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": "0e82ba23e1msh777b808b869c6eap12242fjsnd3cf1c7f23a0",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  
    const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      alert("Error", "Something went wrong");
      
    }
  };

  useEffect(() => {
    fetchData();
  },[])

  const reFetch = () => {
    setLoading(true);
    fetchData();
  }

  return { data, loading, error, reFetch };
};