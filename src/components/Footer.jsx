import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/all";

const Footer = () => {
  return (
    <footer className=" mt-20 px-6 py-3 uppercase grid md:grid-cols-4 md:place-items-center gap-5">
      <div className="md:border-r-2 grid place-content-center w-full h-full">
        <img className="w-56 md:w-fit" src="/logo.png" alt="" />
      </div>

      <div className="w-full hidden md:border-r-2 md:grid  place-items-center font-semibold  space-y-2">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Technologies</a>
        <a href="#">How to</a>
        <a href="#">Join Hyndra</a>
      </div>

      <div className="w-full h-full hidden md:border-r-2 md:grid place-items-center font-semibold  space-y-2">
        <a href="#">Faq</a>
        <a href="#">sitemap</a>
        <a href="#">conditions</a>
        <a href="#">licenses</a>
      </div>

      <div className="grid place-items-center font-semibold space-y-5 mt-7 md:mt-0">
        <h1>Socialize with hyndra</h1>
        <div className="flex space-x-3">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
          <FaInstagram />
          <FaPinterest />
        </div>
        <a
          className="block w-full text-center md:w-fit font-semibold px-5 py-3 rounded-full text-black bg-gradient-to-r from-primary-700 to-primary-500 "
          href="#"
        >
          Build Your World
        </a>
      </div>
    </footer>
  );
};

export default Footer;
