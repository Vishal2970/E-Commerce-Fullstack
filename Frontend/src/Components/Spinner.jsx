import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location=useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    if (count === 0) {
      navigate("/login/eb5e34",{
        state:location.pathname,
      });
    }
    return () => clearInterval(interval);
  }, [count, navigate,location]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
      <div className="text-center">
        <h1>Please Login First...</h1>
        <h2>Redirecting to you in {count} seconds...</h2>
        <div className="spinner-border m-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
