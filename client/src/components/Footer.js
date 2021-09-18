import { ChevronDoubleUp } from "react-bootstrap-icons";
import { animateScroll as scroll } from "react-scroll";
import LogoSVG from "../media/logo.svg";
import Spacer from "./Spacer.js";

var d = new Date();

const Footer = (props) => {
  const scrollToTop = scroll.scrollToTop;
  return (
    <>
      <Spacer spacerId="1" flip />
      <footer
        id="footer"
        className="row row-cols-1 container mx-auto mb-0 mt-auto text-white-50 p-3"
      >
        <div className="col p-2">
          <img
            id="footerLogo"
            src={LogoSVG}
            className="navLogo"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            alt="Piboy Technical Solutions Ltd."
          />
        </div>
        <p className="col">
          Copyright &copy; {d.getFullYear()} Piboy Technical Solutions Ltd.
          <br /> All rights reserved.
        </p>
        <div className="col">
          <ChevronDoubleUp
            className="m-1 p-3 chevron text-dark green rounded-circle"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            width="4em"
            height="4em"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
