import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useLogin = ({setError, setLoading}) => {
    const { dispatch } = useAuthContext();
    const [isPending, setIsPending] = useState(null);
    const url = 'http://localhost:3100/api/users/signin';

    const login = async (username, password) => {
        setIsPending(true);
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const user = await response.json();
        console.log(user)

        if (user.success) {
            // use local storage to save email and JWT token
            localStorage.setItem('user', JSON.stringify(user.data));
            dispatch({ type: 'LOGIN', payload: user.data });
            setLoading(false);
            return {
                isError: false,
                message: 'Login success!'
            }
        }

        if (!user.success) {
            setLoading(false);
            return {
                isError: true,
                message: user.error
            }
        }

    }

    return { login, isPending};
}