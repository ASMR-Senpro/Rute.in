import {useEffect} from "react"

const useFetch = ({url, type, dispatch, setError, setLoading, })=>{
    useEffect(()=>{
        setLoading(true);
        const getData =  async()=>{
            try{
                const response = await fetch(url,{
                    headers:{

                    }
                });
                const json = await response.json();

                if(json.success){
                    dispatch({type, payload: json.data});
                    setLoading(false);
                    setError(null);
                }
                if(!json.success){
                    setLoading(false);
                    setError(json.error);
                }
            }
            catch(err){
                setLoading(false);
                setError(err)
            }
        }
        getData();
    },[dispatch])
}

export default useFetch;