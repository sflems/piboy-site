import {Link} from 'react-scroll'
import LogoSVG from "../media/logo.svg"
import "./NavBar.css"

const NavBar = () => {
    return (
      <div id="NavBar" className="row m-0 pt-2 mb-lg-n5">
        <div className="col-2 mx-auto">
          <a className="nav-link active link-primary" href="/"><img id="navLogo" src={LogoSVG} className="navLogo float-left" alt="Piboy Technical Solutions Ltd."/></a>
        </div>
        <div className="col-10 my-auto h-4">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active link-success" aria-current="page" activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-success" to="main2" spy={true} smooth={true} offset={-75}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-success" to="main2" spy={true} smooth={true}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default NavBar;

