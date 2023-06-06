import { createContext, useReducer } from "react";

export const DestinationContext = createContext();

export const destinationReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DESTINATION':
            return {
                destinations: action.payload
            }
        case 'ADD_DESTINATION':
            return {
                destinations: [action.payload, ...state.destinations]
            }
        case 'EDIT_DESTINATION':
            return {
                destinations: state.destinations.map((item) => {
                    return item.id !== action.payload.id ? item : action.payload
                })
            }
        case 'DELETE_DESTINATION':
            return {
                destinations: state.destinations.filter((item) => {
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const DestinationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(destinationReducer, {
        destinations: null
    })

    return (
        <DestinationContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DestinationContext.Provider>
    )
}

export default DestinationContextProvider