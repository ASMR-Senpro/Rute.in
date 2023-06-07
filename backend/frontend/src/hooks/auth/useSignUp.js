import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignUp = () => {
    const { dispatch } = useAuthContext();
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState("");
    const url = 'http://localhost:3100/api/users/';

    const signup = async (email, name, username, password, province, city, birth) => {
        setIsPending(true);
        setError('');

        console.log(email, name, username, password, province, city, birth);

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, name, username, password, province, city, birth })
        });
        const user = await response.json();
        
        if (user.success) {
            // use local storage to save email and JWT token
            localStorage.setItem('user', JSON.stringify(user.data));
            dispatch({ type: 'LOGIN', payload: user.data });
            setIsPending(false);
            setError(null);
            return {
                isError: false,
                message: 'Sign Up Success!'
            }
        }

        if (!user.success) {
            setError(user.error);
            setIsPending(false);
            return {
                isError: true,
                message: user.error
            }
        }

    }

    return { signup, isPending, error };
}