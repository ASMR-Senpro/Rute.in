import { useContext } from "react";
import {PackageContext} from "../../context/PackagesContext";

export const usePackageContext = () => {
    const context = useContext(PackageContext);
    if (!context) {
        throw Error('Something bad occured on useDestinationContext')
    };

    return context;
}