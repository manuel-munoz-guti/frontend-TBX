import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingFiles } from "../store/files/thunks";

export const useLoadFiles = () => {
    const { response } = useSelector( state => state.files );
    const { isLoading, isTyping } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    useEffect(() => {
      
        dispatch(startLoadingFiles());
        
    }, [])
    

    return {
      isLoading,
      isTyping,
      response
    }
}