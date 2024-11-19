import axios from 'axios';
axios.defaults.baseURL="http://localhost:8081/";
const CONTACT_API_URL ="add_contactus";




export const ContactusApi= async (data)=>{
    try {
        const response = await axios.post(CONTACT_API_URL, data);
        return response.data; 
      } catch (error) {
        throw error;
      }
  }