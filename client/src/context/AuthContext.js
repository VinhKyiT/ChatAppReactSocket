import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  useEffect(() => {
    // getCookies();
    if (!token) setIsLogin(false);
    else {
      jwt.verify(token, process.env.REACT_APP_SECRET_JWT, (err, decode) => {
        if (err) {
          localStorage.removeItem("access_token");
          setIsLogin(false);
          console.log(err);
        } else setIsLogin(true);
      });
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
