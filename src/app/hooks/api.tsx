import { useQuery } from "@tanstack/react-query";
import { instance } from "./instance";
import axios from "axios";

// export const getProduct = async (productId: any): Promise<any> => {
//     const token = await localStorage.getItem("token");
//     if (!token) {
//       throw new Error("No authentication token found");
//     }
  
//     const response = await instance.get(`/products/${productId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });
//   return response.data;
//   };
  
//   export default function GetProductById( productId:any){
//       return useQuery({
//         queryKey:['product',productId],
//         queryFn:()=>getProduct(productId),
//         staleTime: 5000,
//         retry: 3,
//         refetchOnWindowFocus: true,
//       })
//   }



  export const getCards = async (): Promise<any> => {
   
  
    const response = await axios.get('https://credbevyinterview.jbenergyservices.com/public/api/user/interview/cards');
  return response.data;
  };
  
  export default function getmyCards(){
      return useQuery({
        queryKey:['product'],
        queryFn:()=>getCards(),
        staleTime: 5000,
        retry: 3,
        refetchOnWindowFocus: true,
      })
  }
  export const getgraph = async (): Promise<any> => {
   
  
    const response = await axios.get('https://credbevyinterview.jbenergyservices.com/public/api/user/interview/myexpenses');
  return response.data;
  };
  
  export  function getMygraph(){
      return useQuery({
        queryKey:['getgraph'],
        queryFn:()=>getgraph(),
        staleTime: 5000,
        retry: 3,
        refetchOnWindowFocus: true,
      })
  }


  export const getdata = async (): Promise<any> => {
   
  
    const response = await axios.get('https://credbevyinterview.jbenergyservices.com/public/api/user/interview/myexpenses');
  return response.data;
  };
  
  export  function getMydata(){
      return useQuery({
        queryKey:['getdata'],
        queryFn:()=>getdata(),
        staleTime: 5000,
        retry: 3,
        refetchOnWindowFocus: true,
      })
  }
//   const { data: response, isLoading, isError, error, refetch } = Orders(storeId);
//   const orders = response?.orders; 
// https://credbevyinterview.jbenergyservices.com/public/api/user/interview/cards