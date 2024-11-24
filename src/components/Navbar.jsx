import logo from "../assets/adibs-icon.webp"
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="" width={50} height={33} alt="Logo"/>
                </a>
            </div>

            <div className="mx-8 flex items-center justify-center gap-4 text-2xl">
                <a 
                    href="https://www.linkedin.com/in/adib550/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="http://github.com/adib-the-noob"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://www.instagram.com/adib_the_noob/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
                <a 
                    href="https://x.com/Adib70980567/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                >
                    <FaXTwitter />
                </a>
                <a 
                    href="https://www.facebook.com/noob.adib/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebook />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;