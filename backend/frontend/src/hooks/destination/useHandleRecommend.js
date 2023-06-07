import { useAuthContext } from "../auth/useAuthContext";

export const useHandleRecommend = ({url, data, type, dispatch, setLoading, setError}) => {
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

        const json = await response.data;
        console.log(response)
        
        if (json) {
            dispatch({ type: type, payload: json });
            setLoading(false);
            setError(null);
            // notify.info(json.message);
        }
        if (!json) {
            setLoading(false);
            setError(json.error);
            // notify.error(json.error);
        }
    }

    const handleAdd = async (e) => {
        await add();
    }

    return {add, handleAdd};
}