import axios from "axios";
const BACK_END_URL =import.meta.env.VITE_BACK_END_URL ;

export const addApplication = async (formData: any) => {
  try {

    let res = await axios.post(`${BACK_END_URL}/career/addApplication`, formData,{headers:{
      "Content-Type":"multipart/form-data"
    }});
    return res;
  } catch (error) {
    throw error;
  }
};
