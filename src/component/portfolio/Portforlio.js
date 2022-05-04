import React from "react";
import './portforlio.css';

const data = [

    {
        img: "IMG1",
        name: "Task Tracker",

    },

    {
        img: "IMG2",
        name: "Task ",

    }
]

const Portforlio = () => {

    return (
        <section id="portforlio">
            <h5>My Recent Work</h5>
            <h2>Portforlio</h2>

            <div className="container portforlio__container">
                {
                    data.map(({name , img},  index) => (

                        <article key={index} className="portforlio__item">  
                        <div className="portforlio__item-image"></div>
                            <h3>{name}</h3>
                            <div className="portforlio__item-cta">
                                <a href="https://github.com" className="btn">Github</a>
                                <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                    </article>

                    ))
                    
                    

                }
             

                
            </div>
        </section>
    )
}


export default Portforlio;