import { Link } from "react-router-dom";
import LogoSVG from "../media/logo.svg";
import "./NavBar.css";
import Spacer from "./Spacer.js";

const NavBar = () => {
  return (
    <>
      <div id="NavBar" className="row container-md mx-auto my-0 pt-2 mb-n2 mb-sm-n4">
        <div className="col-2 mx-auto p-0">
          <a className="nav-link" href="/">
            <img
              id="navLogo"
              src={LogoSVG}
              className="navLogo float-left"
              alt="Piboy Technical Solutions Ltd."
            />
          </a>
        </div>
        <div className="col-10 my-auto h-4 p-0">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link link-success" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-success" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-success" to="/about">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Spacer spacerId="0" className="my-md-n4"/>
    </>
  );
};

export default NavBar;
