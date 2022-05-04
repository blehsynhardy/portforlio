import './service.css';
import {BiCheck} from 'react-icons/bi';

const Service = () => {
    return (
        <section id='service'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                       
                    </ul>
                </article>

                {/* End of Ui/Ux */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li> 
                    </ul>
                </article>
            
               {/* End of Ui/Ux */}

               <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                        <li>
                            <BiCheck className='servicelist__icons' /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </li>
                    </ul>
                </article>


            </div>
        </section>
    )
}

export default Service;
