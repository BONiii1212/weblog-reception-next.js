import react,{useState,useEffect} from "react";
import router from "next/router";
export const useLoading = (handleStart) =>{
    const [pageLoading,setPageLoading] = useState(false)
    useEffect(()=>{
        const handleStart = (url,{shallow}) => {
            !shallow&&setPageLoading(true); 
        };
        const handleComplete = (url,{shallow}) => { 
            !shallow&&setPageLoading(false); 
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        }
    },[router])
    return pageLoading
}