import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [encodedToken, setEncodedToken] = useState(null);
  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      setEncodedToken(encodedToken);
      setUser(JSON.parse(localStorage.getItem("underrated-user")));
    }
  }, []);
  console.log(user);
  return (
    <AuthContext.Provider
      value={{ user, setUser, encodedToken, setEncodedToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
