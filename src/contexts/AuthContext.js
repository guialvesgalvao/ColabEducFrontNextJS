import { createContext, useState } from "react";
import Router from "next/router";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined);

    const [invalidAccount, setinvalidAccount] = useState(false);

    const isAuthenticated = !!user;

    async function signIn ({ username, password }) {
        fetch('http://www.colabeduc.org/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,password})
          })
            .then(r => r.json())
            .then(json => {
              setinvalidAccount (false);
              setUser({nome: json.username,token: json.access_token});
              Router.push('/');
            })
            .catch(ex =>setinvalidAccount (true))
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn,invalidAccount}}>
            {children}
        </AuthContext.Provider> 
    )
}