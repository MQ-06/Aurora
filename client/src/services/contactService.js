import axios from "axios";

const API_URL = "http://127.0.0.1:3000/api/v1/contact_messages"; // Adjust if deployed

export const sendContactMessage = async (data) => {
  return await axios.post(API_URL, {
    contact_message: data,
  });
};
