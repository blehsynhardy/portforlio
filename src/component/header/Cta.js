import {Link } from "react-router-dom";


const Cta = () => {
  return (
    <div className='cta'>
        <a href='#' className='btn'>Download Cv</a>  
        <Link to='/to-link' className='btn btn-primary'>Lets Talk</Link>  
    </div>
  )
}

export default Cta; 