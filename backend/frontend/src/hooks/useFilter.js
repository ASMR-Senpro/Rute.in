import { useState, useRef } from "react";

export const useFilter = (data, data2) => {
    const [filterTerm, setFilterTerm] = useState("");
    const inputEl = useRef("");
    const [filterResult, setFilterResult] = useState([]);
    const [category, setCategory] = useState([]);

    const filterHandler = (filterTerm) => {
        setFilterTerm(filterTerm);
        if (filterTerm !== "") {
            const newDataList = data.filter((item) => {
                return item.category === filterTerm;
            });
            setFilterResult(newDataList)
            console.log(newDataList);
            const choosedCategory = data2.filter((item)=>{
                return item.name === filterTerm;
            });
            setCategory(choosedCategory);
            console.log(choosedCategory);
        }
        else {
            setFilterResult(data)
            setCategory(data2)
        }
        console.log(filterTerm)
    };
    const getFilterTerm = () => {
        if (inputEl.current.value !== "") {
            const val = JSON.parse(inputEl.current.value);
            const valFilter = val.name
            filterHandler(valFilter);
        }
        else{
            filterHandler("")
        }
    }
    return { filterResult, category, filterHandler, getFilterTerm, inputEl, filterTerm }
}
