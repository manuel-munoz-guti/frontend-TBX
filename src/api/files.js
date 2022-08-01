import { API_PATHS } from "../config/apiPaths";
import api from "./apiConnection";

export const fetchFilesList =  async () => {
    try {
      const response  = await api.get(API_PATHS.files.getAll);
      return response;
    } catch (error) {
      console.log(`Error fetching all formatted files, response from backend with status ${error.response.status}`, error);
    return error.response;
    }
}

export const fetchFile =  async (fileName) => {
  try {
    const response = await api.get(`${API_PATHS.files.getSingle}${fileName}`);
    return response;
  } catch (error) {
    console.log(`Error fetching the file named ${fileName}, response from backend with status ${error.response.status}`);
    return error.response;
  }
}