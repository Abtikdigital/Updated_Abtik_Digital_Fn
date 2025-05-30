import axios from "axios";
const BACK_END_URL =import.meta.env.VITE_BACK_END_URL


export const addQuote = async (formData: any) => {
  try {
    let res = await axios.post(`${BACK_END_URL}/quote/addQuote`, formData);
    return res
  } catch (error) {
    throw error;
  }
};


