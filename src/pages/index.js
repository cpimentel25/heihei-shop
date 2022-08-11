import React, { useContext } from 'react';
import axios from 'axios';
import AppContext from 'context/AppContext';

function Home({ products, error }) {
  const { addToCart } = useContext(AppContext);

  const handleCLick = item => {
		addToCart(item);
	}

  if(error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-tittle font-Roboto tracking-tight text-gray-900">Product Lists</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.data.map(product => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src={""} alt={product.attributes.tittle} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="" />
                      {product.attributes.tittle}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.attributes.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.attributes.price}</p>
              </div>
              <div>
                <button onClick={() => handleCLick(product)} className="origin-center hover:translate-y-0.5 delay-btn duration-150 mt-3 w-full h-10 border-4 border-black bg-pink-300 hover:bg-pink-400 shadow-btn1 font-Roboto text-base">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async() => {
  try {
    const res = await axios.get(`${process.env.apiPublicUrl}/products`)

    console.log(res);

    const products = res.data;
    return { products };

  } catch (error) {
    return { error };
  }
};

export default Home;

/**
axios.get('http://localhost:1338/api/upload/files').then(response => {
  console.log(response.data);
});

axios.get(`${process.env.apiPublicUrl}/products`).then(response => {
  console.log(response.data.data[0].attributes);
});
*/
