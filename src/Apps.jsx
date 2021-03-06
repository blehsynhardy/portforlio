import About from './component/about/About';
import Header from './component/header/Header';
import Nav  from './component/nav/Nav';
import Experience from './component/experience/Experience';
import Service from './component/services/Service'
import {BrowserRouter, Routes, Route, link} from 'react-router-dom';
import Link from './Linker';
import Portforlio from './component/portfolio/Portforlio';
import Testimonies from './component/testimonies/Testimonies';
import Contact from './component/contact/Contact';

const Pages = () => {
  return (
    <>
       <Header/>
       <Nav/>
       <About/>
       <Experience/>
       <Service />
       <Portforlio />
       <Testimonies/>
       <Contact />
    </>
  )
}


const Apps = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Pages />} />
            <Route path={'/to-link'} element={<Link/>}/>
        </Routes>
    </BrowserRouter>
  )
}


export default Apps