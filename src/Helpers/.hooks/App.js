/**
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [error, setError] = useState(null);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1338/api/')
      .then(({ data }) => setproducts(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return products;
};

export default App;
 */
