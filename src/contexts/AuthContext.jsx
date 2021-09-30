import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/UserService";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../storage/AccessTokenStorage";
import { login } from "../services/AuthService";

export const AuthContext = React.createContext({
  user: undefined,
  token: undefined,
});

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(getAccessToken());
  const [user, setUser] = useState();

  useEffect(() => {
    if (token) {
      if (!user) {
        getCurrentUser()
          .then((user) => setUser(user))
          .catch(() => {
            removeAccessToken();
            setToken(undefined);
          });
      }
    } else {
      setUser(undefined);
    }
  }, [token, user]);

  const loginFn = (email, password) => {
    return login(email, password).then((response) => {
      setAccessToken(response.access_token)
      setToken(response.access_token);
    });
  };

  const logout = () => {
    removeAccessToken();
    setToken(undefined);
    setUser(undefined);
  }

  const value = { user: user, token: token, login: loginFn, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
