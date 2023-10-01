import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [active,setActive]=useState('home')
  const toggleMenuBurger =()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <div className=' text-white container max-w-screen-xl fixed top-0 left-0 right-0'>
      <div className={`absolute flex justify-between flex-col md:flex-row ${ menuOpen ? 'top-0' : 'top-[-490px]'} md:top-0 md:bg-opacity-0 bg-black w-full py-4 md:px-0 px-4 transition-all ease-out duration-300 md:transition-none max-h-[60vh] overflow-auto md:overflow-hidden` }>
        <div className='mb-3 md:mb-0'>
            <ul className='flex gap-4 flex-col md:flex-row text-xl max-w-[90%]'>
              <li  className={`transition-all ease hover:bg-slate-50 hover:text-black p-2 hover:rounded-md ${active=='home' ? 'menuUnder' : ''}`}>
                <Link to='/' onClick={()=>{setActive('home');setMenuOpen(!menuOpen)}}>Home</Link>
              </li>  
              <li   className={`transition-all ease hover:bg-slate-50 hover:text-black p-2 hover:rounded-md ${active=='portfolio' ? 'menuUnder' : ''}`}>
                <Link to='/portfolio' onClick={()=>{setActive('portfolio');setMenuOpen(!menuOpen)}}>Portfolio</Link>
              </li>
              <li  className={`transition-all ease hover:bg-slate-50 hover:text-black p-2 hover:rounded-md ${active=='experience' ? 'menuUnder' : ''}`}>
                <Link to='/experience' onClick={()=>{setActive('experience');setMenuOpen(!menuOpen)}} >Experience</Link>
              </li>
              <li  className={`transition-all ease hover:bg-slate-50 hover:text-black p-2 hover:rounded-md ${active=='contact' ? 'menuUnder' : ''}`}>
                <Link to='/contact' onClick={()=>{setActive('contact');setMenuOpen(!menuOpen)}}>Contact</Link>
              </li>
            </ul>
        </div>

        <div className='relative right-2 md:absolute py-3'>
            <ul className='flex gap-4 md:flex-row items-center justify-center p-4 md:p-0'>
              <li><Link target='_blank' to='https://www.linkedin.com/in/najib-flata'><FontAwesomeIcon icon={faGithub} className='text-2xl transition-all duration-300 ease-in-out hover:text-3xl' /></Link></li>
              <li><Link target='_blank' to='https://github.com/havikoro2004'><FontAwesomeIcon icon={faLinkedinIn} className='text-2xl transition-all duration-300 ease-in-out hover:text-3xl' /></Link></li>
            </ul>
        </div>
      </div>
      <div className='md:hidden p-4 w-full'>
          { menuOpen ? <button onClick={toggleMenuBurger}><FontAwesomeIcon icon={faXmark} className='text-2xl  absolute top-4 right-4' /></button>
           : <button onClick={toggleMenuBurger}><FontAwesomeIcon icon={faBars} className='text-2xl  absolute top-4 right-4' /></button>}
        </div>
    </div>
  )
}

export default NavBar