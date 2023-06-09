import { useAuthContext } from "../auth/useAuthContext";

export const useHandleDelete = ({url, data, type, dispatch, setLoading, setError, closeDetailPopup}) => {
    const { user } = useAuthContext();

    const remove = async () => {
        if (!user) {
            // notify.info('You must be logged in');
            return;
        }

        setLoading(true);
        const response = await fetch(url + data._id, {
            method: 'DELETE',
            headers: {
                // 'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if (json.success) {
            closeDetailPopup();
            setLoading(false);
            setError(null);
            dispatch({ type: type, payload: json.data });
            // notify.info(json.message);
        }
        if (!json.success) {
            setLoading(false);
            setError(json.error);
            // notify.error(json.error);
        }
    }

    const handleRemove = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await remove();
    }

    return { remove, handleRemove };
}