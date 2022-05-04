import './experience.css';
import { BsPatchCheckFill}  from 'react-icons/bs';

const Experience  = () => {
    return (
       <section id='experience'>
           <h5>What Skill i have</h5>
           <h2>My Experience</h2>

           <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill  className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' /> 
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                              <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                              <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                <h3>Backend Development</h3>
                <div className='experience__content'>
                        <article className='experience__details'>
                             <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>LARAVEL</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                                 <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                                 <BsPatchCheckFill className='experience__details-icon'/> 
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>experienced</small>
                            </div>
                        </article>
                    </div>
                
                </div>
           </div>
       </section>
    )
}


export default Experience;