import { fetchFile, fetchFilesList } from "../../api/files"
import { setNotLoading } from "../ui/uiSlice";
import { setData, setActiveData, setResponse } from "./filesSlice";


export const startLoadingFiles = () => {
    return async(dispatch) => {

        const response = await fetchFilesList();
        
        if(response.status === 200){
            const { ok, data } = response.data;
            dispatch(setResponse({
                ok,
                status: response.status,
                code: response.statusText,
                message: 'OK'
            }));

            dispatch(setData(data));

            dispatch(setNotLoading());
            
        } else {
            dispatch(setResponse({
                ok: false,
                status: response.status,
                code: response.status,
                message: response.statusText
            }));
        }
    }
}

export const startLodingFile = (fileName) => {
    return async(dispatch) => {

        const response = await fetchFile(fileName);
        
        if(response.status === 200){
            const { ok, data } = response.data;
        
            dispatch(setResponse({
                ok,
                status: response.status,
                code: response.statusText,
                message: 'OK'
            }));
   
            dispatch(setActiveData(data));  
        }  else {
            dispatch(setResponse({
                ok: false,
                status: response.status,
                code: response.data.data.code,
                message: response.statusText
            }));
        }
    }
}