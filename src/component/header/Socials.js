import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FaDribbble } from 'react-icons/fa';


const Socials = () => {
  return (
    <div className="Socials__media">
        <a href="www.linkedn.com/" alt="linkedn" target='_blank'><BsLinkedin/></a>
        <a href="www.linkedn.com/" alt="Github" target='_blank'><FaGithub /></a>
        <a href="www.linkedn.com/" alt="Facebook" target='_blank'><BsFacebook /></a>
        <a href="www.linkedn.com/" alt="Instaagram" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default Socials