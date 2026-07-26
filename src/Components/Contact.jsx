import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = ()=>{
    return <>
        <div className="flex-1 bg-gradient-to-br from-green-900 via-black to-green-900 flex flex-col gap-15 items-center justify-center">
           
            <a
                href="https://github.com/RajatPandey10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300"
            >
                <FaGithub size={24} />
                
                <span className='text-white'>Explore my GitHub projects</span>
            </a>

            <a href="mailto:pandeyrajat9971@gmail.com"
            className="flex items-center gap-2 text-white hover:text-gray-300">
                <MdEmail size={24} className='text-white'/>
                
                <span className='text-white'>Contact me via Email</span>
            </a>

            <a
                href="https://www.linkedin.com/in/RajatPandey9310"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300"
            >
                <FaLinkedin size={24} className='text-white'/>
                <span className='text-white'>Connect with me on LinkedIn</span>
            </a>

            <a
                href="https://leetcode.com/u/RajatPandey9310/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300"
            >
                <SiLeetcode size={24} className='text-white'/>
                <span className='text-white'>View my LeetCode profile</span>
            </a>
        </div>
    </>
}

export default Contact