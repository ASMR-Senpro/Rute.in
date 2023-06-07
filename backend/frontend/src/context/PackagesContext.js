import { createContext, useReducer } from "react";

export const PackageContext = createContext();

export const packageReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PACKAGE':
            return {
                packages: action.payload
            }
        case 'ADD_PACKAGE':
            return {
                packages: [action.payload, ...state.plans]
            }
        case 'EDIT_PACKAGE':
            return {
                packages: state.packages.map((item) => {
                    return item.id !== action.payload.id ? item : action.payload
                })
            }
        case 'DELETE_PACKAGE':
            return {
                packages: state.packages.filter((item) => {
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const PackageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(packageReducer, {
        packages: null
    })

    return (
        <PackageContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PackageContext.Provider>
    )
}

export default PackageContextProvider