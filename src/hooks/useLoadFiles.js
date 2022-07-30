import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingFiles } from "../store/files/thunks";

export const useLoadFiles = () => {
    const { loading, data } = useSelector( state => state.files );
    const dispatch = useDispatch();

    useEffect(() => {
      
        dispatch( startLoadingFiles() );
        
    }, [])
    

    return {
        loading, 
        data
    }
}