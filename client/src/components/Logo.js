import { useLayoutEffect, useRef } from "react";
import KUTE from "kute.js";

import "./Logo.css";

import LogoPNG from "../media/full-logo.png";

const Logo = () => {
  const svgRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useLayoutEffect(() => {
    var svgBB = svgRef.current.getBBox();
    var translation = [0,0]
    var OriginX = svgBB.width * 50/100 - translation[0]
    var OriginY = svgBB.height * 50/100 - translation[1]

    var tween = KUTE.fromTo(
      blob1Ref.current,
      { path: blob1Ref.current },
      { path: blob2Ref.current },
      { morphPrecision: 3, repeat: Infinity, duration: 3000, yoyo: true },
    );
    tween.start();
  }, []);


  return (
    <div className="logo col mx-0 my-n5 my-md-n2">
      <div className="row m-0 p-0 pb-3 container-fluid d-flex justify-content-center align-middle">
        <img
          src={LogoPNG}
          className="m-0 Splash-logo mx-auto pt-4"
          alt="Piboy Splash Logo"
        ></img>
        <svg
          ref={svgRef}
          className="blob rotate"
          viewBox="0 0 450 450"
          width="450px"
          height="450px"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(225 225), scale(0.8)">
            <path
              id="blob1"
              ref={blob1Ref}
              d="M77.2 -105.6C112.9 -80.3 163.4 -74.9 168.1 -55.8C172.8 -36.6 131.6 -3.6 112.6 30.9C93.5 65.4 96.7 101.5 81.7 120.6C66.6 139.7 33.3 141.8 3.7 136.7C-25.9 131.6 -51.7 119.2 -81.7 104.9C-111.6 90.7 -145.7 74.5 -152.9 50.2C-160.1 25.9 -140.4 -6.7 -118.7 -27.8C-97.1 -48.9 -73.3 -58.6 -53.2 -88.9C-33.1 -119.2 -16.5 -170.1 2.1 -173C20.8 -175.9 41.5 -130.8 77.2 -105.6"
              fill="#212121"
            ></path>
            <path
              id="blob2"
              ref={blob2Ref}
              d="M114.5 -158.1C140.8 -138.5 149.3 -94.9 158.5 -54.4C167.7 -13.9 177.5 23.5 159.5 43.4C141.4 63.3 95.5 65.8 64.3 72C33.1 78.2 16.5 88.1 -7.5 98.4C-31.5 108.8 -63.1 119.5 -85.1 110.3C-107.2 101.2 -119.7 72.1 -118.6 45.6C-117.6 19.1 -103 -4.8 -89.7 -24C-76.4 -43.2 -64.4 -57.6 -49.6 -81C-34.9 -104.3 -17.4 -136.7 13.3 -155C44.1 -173.3 88.2 -177.7 114.5 -158.1"
              fill="#2f4f4f"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
