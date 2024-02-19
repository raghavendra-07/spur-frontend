//import Popup from 'reactjs-popup'
// import { withRouter} from 'react-router'
//import { useRef,useEffect } from 'react'
import {Link} from 'react-router-dom'
//import {GiHamburgerMenu} from 'react-icons/gi'
//import {IoMdClose} from 'react-icons/io'
//import {AiFillHome} from 'react-icons/ai'
//import {BsInfoCircleFill} from 'react-icons/bs'



function Header () {
  return (
  <div className="flex flex-col top-0 sticky">
    <div className="flex flex-row justify-between shadow-md shadow-cyan-500/50">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <div  className='flex flex-row justify-between self-center'>
      <Link  className='mx-2' to="/"><h1>Emotions</h1></Link>
      <Link  className='mx-2' to="/about"><h1>Manifesto</h1></Link>
      <Link  className='mx-2'><h1>Self-awareness test</h1></Link>
      <Link  className='mx-2'><h1>Work with us</h1></Link>
      </div>
      
      <button className='bg-gray-900 text-white rounded-lg h-10 p-2 self-center' type='button'>
        Download App
      </button>
      
    </div>
  </div>
);
  }

export default Header