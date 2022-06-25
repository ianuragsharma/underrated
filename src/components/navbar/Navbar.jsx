import React, { useState, useLayoutEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import "./navbar.css";
import { useAuth } from "../../context";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const { user } = useAuth();
  // sets the inital state of sidebar based on window width.
  useLayoutEffect(() => {
    function updateSize() {
      window.innerWidth > 756 ? setSidebar(true) : setSidebar(false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const showSidebar = () => setSidebar(!sidebar);
  const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "var(--dim-grey)" : "",
  });

  return (
    <>
      <nav className="nav-container flex-row ">
        <Link to="#" className="menu-bars ">
          <FaBars size={28} onClick={showSidebar} />
        </Link>
        <Link to="/">
          <div className="flex-row">
            <img
              src="/favicon.png"
              class="image-responsive logo-img ml-1"
              alt=""
            />
          </div>
        </Link>
        <ul className="flex-row">
          {user ? (
            <li>
              <Link to="/profile" className="mr-5" title="Profile">
                <i className="fa-solid fa-user "></i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" className="mr-5" title="Login">
                <i className="fa-solid fa-user "></i>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle flex-row" onClick={showSidebar}>
            <Link to="#" className="menu-bars ">
              <FaBars size={28} onClick={showSidebar} />
            </Link>
            <Link to="/">
              <div className="flex-row">
                <h4 className="fw-500 text-xl ml-2">Underrated</h4>
                <img
                  src="/favicon.png"
                  class="image-responsive logo-img ml-5"
                  alt=""
                />
              </div>
            </Link>
          </li>
          <div className="pt-1 sidebar-container">
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className="nav-text mt-1">
                  <NavLink
                    style={getActiveStyle}
                    className="nav-text-link mx-2 text-xl"
                    to={item.path}
                  >
                    <div className="icon-container flex-row">
                      {item.icon}
                      <span className="ml-4">{item.title}</span>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </>
  );
}

export { Navbar };
