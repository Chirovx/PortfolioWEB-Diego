import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import logo from "../assets/DVDlogo.webp"

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} 
                alt="Logo"/>
            </a>
        </div>
        <div  className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/diego-valdes-diaz/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin className="text-yellow-400" />
    </a>

            <a href="https://www.youtube.com/watch?v=4NpuQKW6Z3Q" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube">
                <FaYoutube />
            </a>

            <a href="https://github.com/Chirovx" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
                <FaGithub className="text-yellow-400" />
            </a>


        </div>
        
    </nav>
  )
}

export default Navbar