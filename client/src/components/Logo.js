import { motion } from "framer-motion";

import "./Logo.css";

import LogoPNG from "../media/full-logo.png";

const Logo = () => {
  return (
    <div className="logo col mx-0 my-n5 my-md-n2">
      <img
        src={LogoPNG}
        className="m-0 Splash-logo mx-auto pt-4"
        alt="Piboy Splash Logo"
      ></img>
    </div>
  );
};

export default Logo;
