import { useState,useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null
  });
  useEffect(()=>{
    const data=localStorage.getItem("auth")
    if(data){
      const parseData=JSON.parse(data);
      setAuth({
        ...auth,
        user:parseData.user,
        token:parseData.token
      })
    }
  },[auth])
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
