import { useAuthContext } from "../auth/useAuthContext";

export const useHandleAdd = ({url, data, type, dispatch, setLoading, setError, closeAddPopup}) => {
    const { user } = useAuthContext();

    const add = async () => {
        if (!user) {
            // notify.info('You must be logged in');
            return;
        }

        setLoading(true);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(data),
        })

        const json = await response.json();
        
        if (json.success) {
            dispatch({ type: type, payload: json.data });
            closeAddPopup();
            setLoading(false);
            setError(null);
            // notify.info(json.message);
        }
        if (!json.success) {
            setLoading(false);
            setError(json.error);
            // notify.error(json.error);
        }
    }

    const handleAdd = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await add();
    }

    return {add, handleAdd};
}