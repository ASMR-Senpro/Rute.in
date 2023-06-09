import { useContext } from "react";
import {RecommendContext} from "../../context/RecomendContext";

export const useRecommendContext = () => {
    const context = useContext(RecommendContext);
    if (!context) {
        throw Error('Something bad occured on useRecommendContext')
    };

    return context;
}