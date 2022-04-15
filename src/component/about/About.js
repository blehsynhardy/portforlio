import React from 'react'
import {FaAward} from 'react-icons/fa';
import ME from './../../assets/me.jpg';
import './about.css';

const About = () => {
  return (
    <section id="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className='container container__about'>
            <div className='about__me'>
                <div className='about__image'>
                    <img src={ME} alt="my image" />
                </div>
            </div>
           <div className='about__content'>
                <div className='about__cards'>
                        <figures className='about__card'>
                            <FaAward className='about__award' />
                            <h5>Expirence</h5>
                            <small>5+</small>
                        </figures>

                        <figures className='about__card'>
                            <FaAward className='about__award' />
                            <h5>Expirence</h5>
                            <small>5+</small>
                        </figures>

                        <figures className='about__card'>
                            <FaAward className='about__award' />
                            <h5>Expirence</h5>
                            <small>5+</small>
                        </figures>

                    </div>
                 <p>
                    My name is Atomicity i live in a house with 2 sibling am very angry right noe
                 </p>
                 <button className='btn btn-primary'>SHOW MORE</button>
           </div>
        </div>
    </section>
  )
}

export default About