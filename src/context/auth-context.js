import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [encodedToken, setEncodedToken] = useState(null);
  return (
    <AuthContext.Provider
      value={{ user, setUser, encodedToken, setEncodedToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };