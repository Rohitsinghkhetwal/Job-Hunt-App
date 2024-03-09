import { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-native";



const useFetch =  (endPoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      'X-RapidAPI-Key': '080b7d71c1msh5f6b3ff4d005b9ep15da6cjsna3ef46817911',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      console.log("this is inside the response", response.data)
      setLoading(false);
    } catch (err) {
      setError(err);
      Alert.alert("Error", "Something went wrong");
      console.log("Error", err);
    } finally {
      setLoading(false);
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

export default useFetch;