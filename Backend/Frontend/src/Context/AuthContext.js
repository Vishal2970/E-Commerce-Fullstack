import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
        {props.children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
