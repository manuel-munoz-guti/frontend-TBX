import { fecthFilesList } from "../../api/files"
import { setData } from "./filesSlice";


export const startLoadingFiles = () => {
    return async(dispatch) => {

        const response = await fecthFilesList();
        
        const data = response.data;

        dispatch(setData(data));
    }
}