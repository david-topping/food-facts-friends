import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../../assets/images/fff_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="row">
      <div className="col d-flex align-items-center justify-content-center">
        <Link
          to="/"
          className="d-flex align-items-center text-decoration-none text-dark"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Logo" className="logo me-3" />
          <h1 className="heading heading-1 mb-0">Food Facts Friends</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
