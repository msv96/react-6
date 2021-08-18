import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faLaughWink,
  faTachometerAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon={faLaughWink} size="2x"></FontAwesomeIcon>
        </div>
        <div className="sidebar-brand-text mx-3">MSV96</div>
      </div>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <FontAwesomeIcon icon={faTachometerAlt} className="text-white-50"></FontAwesomeIcon>
          <span> Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/user">
          <FontAwesomeIcon icon={faCog} className="text-white-50"></FontAwesomeIcon>
          <span> Users</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/product">
          <FontAwesomeIcon icon={faWrench} className="text-white-50"></FontAwesomeIcon>
          <span> Products</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
