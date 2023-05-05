import { useState, useRef } from "react"

export const useSearch=(data)=>{
    const [searchTerm, setSearchTerm] = useState("");
    const searchEl = useRef("");
    const [searchResult, setSearchResult] = useState([]);
    const [renderSearch, setRenderSearch] = useState(false);

    const searchHandler = (searchTerm)=>{
        setSearchTerm(searchTerm);
        if(searchTerm!==""){
            console.log(data)
            const newDataList = data.filter((item)=>{
                return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResult(newDataList)
            console.log(newDataList)
        }
        else{
            setSearchResult(data)
        }
    };
    const getSearchTerm=()=>{
        searchHandler(searchEl.current.value);
        setRenderSearch(false)
    }
    return{searchResult, searchHandler, getSearchTerm, searchEl, searchTerm, renderSearch, setRenderSearch};
}