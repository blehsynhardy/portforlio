import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';
import { useState } from 'react';

const Nav = () => {
    const  [activeNav,  setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#expirence" onClick={() => setActiveNav('#expirence')} className= { activeNav === '#expirence' ? 'active' : ''}><BiBook/></a>
            <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact"><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default  Nav;