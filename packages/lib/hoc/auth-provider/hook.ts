import { useContext } from 'react';
import KodAuthContext from './context';

const useKodAuth = () => {
    const session = useContext(KodAuthContext);

    if (!session) {
        throw new Error('You probably forgot to put <KodAuthProvider> around your app');
    }

    return session
};

export default useKodAuth;