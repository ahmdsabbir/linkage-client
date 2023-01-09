import API from '../../api/api-config';
import { useAuthState } from '../context/AuthProvider';

const useRefreshToken = () => {
    const {setAuth} = useAuthState();

    const refresh = async() => {
        const response = await API.get("/refresh",{
            withCredentials: true,
        });
        setAuth(prev => {
            return {...prev, accessToken:response.data.accesstoken}
        });
        return response.data.accesstoken
    }

    return refresh;
};

export default useRefreshToken;