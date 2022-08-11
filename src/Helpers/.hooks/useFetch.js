/**
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useFetch;

/**
const useFetch = (endpoint) => {
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(endpoint)
            .then(({data}) => setProducts(data))
            .catch((error) => setError(error))
    }, [])

    if (error) {
        return <div>An error ocurred: {error.message}</div>;
    }

    return products;
};

export default useFetch; 
*/
