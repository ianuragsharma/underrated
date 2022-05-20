import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth } from "../../context";

const ProfilePage = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="continer">
        <button
          className="btn btn-solid-primary logout-btn text-base text-white"
          onClick={logoutHandler}
        >
          Logout
        </button>
        This is Profile page
      </div>
    </div>
  );
};

export { ProfilePage };
