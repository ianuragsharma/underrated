import React, { useState, useLayoutEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import "./navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  useLayoutEffect(() => {
    function updateSize() {
      window.innerWidth > 756 ? setSidebar(true) : setSidebar(false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="nav-container flex-row ">
        <Link to="#" className="menu-bars ">
          <FaBars size={28} onClick={showSidebar} />
        </Link>
        <Link to="/">
          <h4 className="fw-500 text-xl ml-2">Underrated</h4>
        </Link>
        <ul className="flex-row">
          <li>
            <Link to="/login" className="mr-5">
              <i className="fa-solid fa-user "></i>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle flex-row" onClick={showSidebar}>
            <Link to="#" className="menu-bars ">
              <FaBars size={28} onClick={showSidebar} />
            </Link>
            <Link to="/">
              <h4 className="fw-500 text-xl ml-2">Underrated</h4>
            </Link>
          </li>
          <div className="pt-1 sidebar-container">
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className="nav-text mt-1">
                  <Link className="nav-text-link mx-2 text-xl" to={item.path}>
                    <div className="icon-container flex-row">
                      {item.icon}
                      <span className="ml-4">{item.title}</span>
                    </div>
                  </Link>
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
