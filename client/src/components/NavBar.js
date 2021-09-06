const NavBar = () => {
    return (
     <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active link-primary" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-primary" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-primary" href="#contact">Contact</a>
        </li>
      </ul>
    )
}

export default NavBar;

