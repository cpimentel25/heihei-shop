/**
import { useState, useEffect } from 'react';
import axios from 'axios';

function apiApp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const listProducts = async () => {
      const urlApi = 'http://localhost:1338/api/';
      const result = await axios.get(urlApi);

      setData(result.data);
    };
    listProducts();
  }, []);

  return data;
}

export default apiApp;
 */
