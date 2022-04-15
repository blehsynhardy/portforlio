import './header.css';
import Cta from './Cta';
import ME from './../../assets/me.jpg'
import Socials from './Socials';

const Header = () => {
  return (
    <header>
        <div className='container container__header'>
                <h5>Hello I'm</h5>
                <h1>Atomicity</h1>
                <h5 className='text-light'>Full Stack Developer</h5>
                <Cta />
                <Socials/>
                <div className='my_photo'>
                  <img src={ME} alt="my photo" />
                </div>
                <div className='scroll'>
                 <a href=''>Scroll Down</a>
                </div>
               
        </div>
    </header>
  )
}

export default Header;