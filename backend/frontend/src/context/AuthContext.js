import { createContext, usereducer, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                user: action.payload
            }
        default:
            return state
    }
}

const AuthContextProvider=({children})=>{
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user)dispatch({type: 'Login', payload: user});
    },[]);

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;