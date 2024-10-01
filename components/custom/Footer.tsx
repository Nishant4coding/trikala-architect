
import logo from "../../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col lg:gap-20 gap-10">
      <hr className="relative -mx-[5vw]" />
      <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center gap-6">
        <div className="flex flex-col lg:w-[20vw] w-full items-center text-center">
          <img src={logo} alt="" className="lg:w-[20vw] w-[30vw]" />
          <span>
            Learn to build a fashion startup from someone who has been there and
            done that.
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[1.5em] font-bold">COURSE</h1>
          <a href="">Home</a>
          <a href="">Featured</a>
          <a href="">Process</a>
          <a href="">Solutions</a>
          <a href="">Price Estimate</a>
          <a href="">Clients</a>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[1.5em] font-bold">SUPPORT</h1>
          <a href="">Contact</a>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[1.5em] font-bold">LEGAL</h1>
          <a href="">Terms of Use</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
      <div className="flex flex-row lg:justify-end justify-center items-center gap-10 h-20">
        <a href="" className="text-[6vw] lg:text-[2vw]">
          <FaLinkedinIn />
        </a>
        <a href="" className="text-[6vw] lg:text-[2vw]">
          <ImInstagram />
        </a>
        <a href="" className="text-[6vw] lg:text-[2vw]">
          <FaFacebookF />
        </a>
        <a href="" className="text-[6vw] lg:text-[2vw]">
          <FaTwitter />
        </a>
        <a href="" className="text-[6vw] lg:text-[2vw]">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

export default Footer;
