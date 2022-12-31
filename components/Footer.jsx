import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-800  mt-3 px-6 footer">
      <div className="flex justify-between text-white pt-2">
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
          <p>Home</p>
          <p>Reviews</p>
          <p>About Us</p>
          <p>Join Us</p>
          <p>Contacts</p>
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
