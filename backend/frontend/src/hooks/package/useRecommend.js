import { useState, useRef } from "react"

export const useRecommend=(data)=>{
    const [recTerm, setRecTerm] = useState("");
    const recEl = useRef("");
    const [recResult, setRecResult] = useState([]);
    const [renderRec, setRenderRec] = useState(false);

    const recHandler = (recTerm)=>{
        setRecTerm(recTerm);
        if(recTerm!==""){
            console.log(data)
            console.log(recTerm)
            const newDataList = data?.filter((item)=>{
                return Object.values(item)
                    .join(" ")
                    .toLowerCase()
                    .includes(recTerm.toLowerCase());
            });
            setRecResult(newDataList)
            console.log(newDataList)
        }
        else{
            setRecResult(data)
        }
    };
    const getRecTerm=(place)=>{
        console.log(place)
        setRecTerm(place)
        recHandler(place);
        setRenderRec(false)
    }
    return{recResult, recHandler, getRecTerm, recEl, recTerm, setRecTerm, renderRec, setRenderRec};
}