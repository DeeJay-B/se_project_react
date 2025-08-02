import { createContext, useState } from "react";
import { useEffect } from "react";
import { checkToken } from "../utils/auth";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser(data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
