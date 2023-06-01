import { createContext, useReducer } from "react";

export const PlanContext = createContext();

export const planReducer = (state, action) => {
    switch(action.type){
        case 'GET_PLAN':
            return{
                plans: action.payload
            }
        case 'ADD_PLAN':
            return{
                plans:[action.payload, ...state.plans]
            }
        case 'EDIT_PLAN':
            return{
                plans: state.plans.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_PLAN':
            return{
                plans: state.plans.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const PlanContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(planReducer, {
        plans: null
    })

    return(
        <PlanContext.Provider value={{ ...state, dispatch}}>
            {children}
        </PlanContext.Provider>
    )
}

export default PlanContextProvider