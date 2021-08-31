import { createContext, useState } from "react";
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const isAuthenticated = !!user;

    async function signIn ({ username, password }) {
        fetch('http://www.colabeduc.org/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,password})
          }).then(r => r.json())
            .then(json => {
              console.log(json);
              //setinvalidAccount (false);
              setCookie(null, 'cookieToken', json.access_token, {
                maxAge:60*60*24,
                path:'/',
            });
              setUser({nome: json.username,age: 19});
              Router.push('/');
    
            })
            //.catch(ex => setinvalidAccount (true));
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider> 
    )
}