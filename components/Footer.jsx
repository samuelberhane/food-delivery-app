import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800  mt-3 px-6 footer">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-white pt-2">
        <div>
          <h1 className="text-2xl font-bold text-yellow-500 mb-1">LEGAL</h1>
          <p>Our Story</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-yellow-500 mb-1">RESOURCES</h1>
          <p>FAQ</p>
          <p>Application </p>
          <p>Overview</p>
          <p>Promotions</p>
          <p>Documentation</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-yellow-500 mb-1">LINKS</h1>
          <p>
            <Link href="/">Home</Link>{" "}
          </p>
          <p>
            <Link href="#reviews">Reviews</Link>{" "}
          </p>
          <p>
            <Link href="#about">About Us</Link>{" "}
          </p>
          <p>
            <Link href="#join">Join Us</Link>{" "}
          </p>
          <p>
            <Link href="#contact">Contacts</Link>{" "}
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-yellow-500 mb-1">SOCIAL</h1>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <div className="flex items-center gap-3 mt-2 text-xl">
            <BsFacebook />
            <BsTwitter />
            <AiFillInstagram />
            <BsLinkedin />
          </div>
        </div>
      </div>
      <h1 className="text-white text-md">Copyright&#169; 2022 Samuel Brhane</h1>
    </div>
  );
};

export default Footer;
