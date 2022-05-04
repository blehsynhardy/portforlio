import React from "react";
import { Link } from "react-router-dom";


const Linker = () => {
    return (

        <div>
               <p>Welcome to the next page</p>
               <nav>
                <Link to='/'>Lets Talk</Link>  
                </nav>
        </div>
    )
}


export default Linker;