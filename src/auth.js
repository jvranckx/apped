import authentication from 'react-azure-b2c';

import decodeJWT from 'jwt-decode';

class Auth {

    isLoggedIn() {

        if (authentication.getAccessToken()) {

            return true;

        }

        return false;

    };

    logout() {

        authentication.signOut();

    };

    getToken() {
        return authentication.getAccessToken();

    };

    currentUser() {

        const token = authentication.getAccessToken();

        const decoded = decodeJWT(token.accessToken);

        return {

            ...decoded

        };

    };

}

export default Auth; 