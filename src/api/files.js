import { API_PATHS } from "../config/apiPaths";
import api from "./apiConnection";

export const fecthFilesList =  async () => {
    try {
      const {data} = await api.get(API_PATHS.files.getAll);
      return data;
    } catch (error) {
      console.error('error on fecth Files List ', error);
      return null;
    }
}