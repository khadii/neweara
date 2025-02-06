import { instance } from "./instance";

export const fetchProducts = async (page:any) => {
    const limit=100
    const response = await instance.get(`/products/get-all-product?page=${page}&limit=${limit}`);
    return response.data;
  };
  
  
  
  export const fetchOrders = async (page:any) => {
    const limit=40
    const response = await instance.get(`/products/get-all-product?page=${page}&limit=${limit}`);
    return response.data;
  };
  
  export const createProduct = async (productData:any) => {
    const response = await instance.post('/products', productData);
    return response.data;
  };