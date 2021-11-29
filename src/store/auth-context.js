import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  onLogin: () => {},
  onLogout: () => {},
  isLoggedIn: false,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("isLoggedIn");
    if (+login === 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const value = {
      isLoggedIn: isLoggedIn,
      onLogin: loginHandler,
      onLogout: logoutHandler
  }

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
