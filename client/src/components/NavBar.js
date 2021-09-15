import LogoSVG from "../media/logo.svg"

const NavBar = () => {
    return (
      <div id="NavBar" className="row m-0 pt-2 mb-lg-n5">
        <div className="col-2 mx-auto">
          <a className="nav-link active link-info" aria-current="page" href="/"><img id="NavLogo" src={LogoSVG} className="float-left" alt="Piboy Technical Solutions Ltd."/></a>
        </div>
        <div className="col-10 my-auto h-4">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active link-info" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-info" href="#main2">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-info" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default NavBar;

