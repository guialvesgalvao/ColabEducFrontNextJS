import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const isAuthenticated = false;

    async function signIn ({ username, password }) {
        fetch('http://www.colabeduc.org/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,password})
          }).then(r => r.json())
            .then(json => {
              console.log(json);
              setinvalidAccount (false);
              setCookie(null, 'cookieToken', json.access_token, {
                maxAge:60*60*24,
                path:'/',
            });
              router.push('/');
              setUser     
            })
            .catch(ex => setinvalidAccount (true));
    }

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider> 
    )
}