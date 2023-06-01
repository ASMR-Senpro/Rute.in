import { useContext } from "react";
import {DestinationContext} from "../context/DestinationContext";

export const useDestinationContext = () => {
    const context = useContext(DestinationContext);
    if (!context) {
        throw Error('Something bad occured on useDestinationContext')
    };

    return context;
}