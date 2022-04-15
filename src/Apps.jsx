import About from './component/about/About';
import Header from './component/header/Header';
import Nav  from './component/nav/Nav';
import {BrowserRoute, Routes, Route, link} from 'react-router';


const Apps = () => {
  return (
    <>
       <Header/>
       <Nav/>
       <About/>
    </>
  )
}

export default Apps