import { useState, useRef } from "react"

export const useFilter=(data)=>{
    const [filterTerm, setFilterTerm] = useState("");
    const filterEl = useRef("");
    const [filterResult, setFilterResult] = useState([]);
    const [renderFilter, setRenderFilter] = useState(false);

    const filterHandler = (filterTerm)=>{
        setFilterTerm(filterTerm);
        if(filterTerm!==""){
            console.log(data)
            const newDataList = data.filter((item)=>{
                return item.City.toLowerCase().includes(filterTerm.toLowerCase());
            });
            setFilterResult(newDataList)
            console.log(newDataList)
        }
        else{
            setFilterResult(data)
        }
    };
    const getFilterTerm=()=>{
        filterHandler(filterEl.current.value);
        setRenderFilter(false)
    }
    return{filterResult, filterHandler, getFilterTerm, filterEl, filterTerm, renderFilter, setRenderFilter};
}