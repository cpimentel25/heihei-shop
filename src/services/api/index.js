const API = process.env.apiPublicUrl;

const endPoints = {
  auth: {
    login: `${API}/auth/login`,
    profile: `${API}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/products/${id}/`,
    getProducts: () => `${API}/products/data/}`,
  },
  categories: {
    getCategoriesList: `${API}/categories/`,
    getCategoryItems: (id) => `${API}/categories/${id}/products/`,
  },
};

export default endPoints;
