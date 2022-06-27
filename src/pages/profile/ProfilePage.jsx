import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth } from "../../context";
import { useDocumentTitle } from "../../hooks";
import "./profilePage.css";
const ProfilePage = () => {
  useDocumentTitle("Playlist");
  const { user, setUser } = useAuth();
  const { firstName, lastName, email } = user;
  const navigate = useNavigate();
  const logoutHandler = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="profile-conatiner flex-row justify-center">
          <div className="profile-info p-4">
            <h5 className="fw-500">Profile Info</h5>
            <p className="my-1">Name : {firstName + " " + lastName}</p>
            <p className="my-1">Email : {email} </p>
            <button
              className="btn btn-solid-primary logout-btn text-base text-white"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
