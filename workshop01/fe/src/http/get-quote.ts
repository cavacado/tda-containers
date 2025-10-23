import {instance as axios} from "./client";
import { ENDPOINTS } from "./constants";

export const getQuote = async () => {
  try {
    return await axios.get(ENDPOINTS.quote);
  } catch (error) {
    console.error(error);
  }
};
