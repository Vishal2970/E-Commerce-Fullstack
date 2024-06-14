import { useEffect, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const PrivateRoute = () => {
  const URI = "http://localhost:5000/api/auth/user_auth";
  const [ok, setOk] = useState(false);
  const { auth, setAuth } = useAuthContext();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(URI, {
        headers: {
          Authorization: auth?.token,
        },
      });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner/>;
};

export default PrivateRoute;
