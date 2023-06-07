import { createContext, useReducer } from "react";

export const RecommendContext = createContext();

export const recommendReducer = (state, action) => {
    switch (action.type) {
        case 'GET_RECOMMEND':
            return {
                recommends: action.payload
            }
        default:
            return state
    }
}

const RecommendContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recommendReducer, {
        recommends: null
    })

    return (
        <RecommendContext.Provider value={{ ...state, dispatch }}>
            {children}
        </RecommendContext.Provider>
    )
}

export default RecommendContextProvider