import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie,parseCookies } from "nookies";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined);

    const [invalidAccount, setinvalidAccount] = useState(false);

    const isAuthenticated = !!user;

    useEffect(() => {
      const cookies = parseCookies();
      const userName = cookies.cookieName;

      if(userName){
        /*fetch('http://www.colabeduc.org/public/').then(res =>
          res.json()
        ).then(
          response => response.find( tab => tab.username == `${userName}`)
        ).then(ex => setUser({nome: ex.username,token: ex.username,email: ex.email}))*/
        getUserData (userName);
      }
    }, []);

    async function getUserData (name) {
      const res = await fetch('http://www.colabeduc.org/public/');
      const resJson = await res.json();
      const load = resJson.find( tab => tab.username == `${name}`);
      setUser({nome: load.username,token: load.username,email: load.email,id: load.id,userImg: load.profileImageUrl})
    }

    async function signIn ({ username, password }) {
        fetch('http://www.colabeduc.org/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,password})
          })
            .then(r => r.json())
            .then(json => {      
            setinvalidAccount (false);
              setCookie(null, 'cookieName', json.username, {
                maxAge:60*60*24,
                path:'/',
            });
            setCookie(null, 'cookieToken', json.access_token, {
              maxAge:60*60*24,
              path:'/',
          });
            setUser({nome: json.username,token: json.access_token});
              getUserData (json.username);
              Router.push('/');
            })
            .catch(ex =>setinvalidAccount (true))
    }

    return (
        <AuthContext.Provider value={{ user,setUser, isAuthenticated, signIn,invalidAccount}}>
            {children}
        </AuthContext.Provider> 
    )
}