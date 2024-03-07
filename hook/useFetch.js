import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY, RAPID_API_HOST } from "@env";
import { Alert } from "react-native";

const ApiKey = RAPID_API_KEY;
const ApiHost = RAPID_API_HOST;

const useFetch = async (endPoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    headers: {
      "X-RapidAPI-Key": ApiKey,
      "X-RapidAPI-Host": ApiHost,
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
      Alert.alert("Error", "Something went wrong");
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

  return {data, loading, error, reFetch };
};

export default useFetch;