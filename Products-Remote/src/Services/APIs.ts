import axios, { AxiosResponse } from "axios";
export const GetAllProducts = async () => {
  const response: AxiosResponse = await axios.get(import.meta.env.VITE_Mock_URL)
  const responseData: ProductsList[] = response.data;
  return responseData
}