import React from "react";
import { Link } from "react-router-dom";
import brand from "../../../assets/images/brand.png";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light navbar-expand-sm">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={brand} alt=""/>
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/events/free" className="nav-link">Free Events</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events/pro" className="nav-link">Pro Events</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events/upload" className="nav-link">Upload</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/users/login" className="nav-link">
                    <i className="fa fa-sign-in-alt text-muted"/> Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/users/register" className="nav-link">
                    <i className="fa fa-user-cog text-muted"/> Register</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
