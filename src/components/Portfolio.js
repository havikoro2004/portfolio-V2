import React, { useState ,useEffect} from 'react'
import Transition from '../Transition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as solidCircle} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import studi1 from '../images/studi1.png'
import studi2 from '../images/studi2.png'
import studi4 from '../images/studi4.png'
import studi6 from '../images/studi6.png'
import sql from '../images/sql.svg'


import tailwind from '../images/tailwind.svg'
import ecf from '../images/ecf.png'
import yoga from '../images/yoga.png'
import gestion from '../images/gestion.png'
import gestalt from '../images/gestalt.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faPhp, faReact, faSquareJs, faSymfony, faWordpress } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  // Utilisez useEffect pour déclencher l'affichage du paragraphe après un certain délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 1000); // Changez le délai en millisecondes selon vos besoins
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 1200); // Changez le délai en millisecondes selon vos besoins
    return () => clearTimeout(timer);
  }, []);
  const [carousPage,setCarousPage]=useState(1)
  return (
    <Transition>
      <div className='flex container max-w-screen-xl px-2 h-screen md:flex-row flex-col gap-4'>
        <div className='md:w-[40%]  md:h-full h-[70%] flex justify-center md:items-center md:pb-32 pb-0 items-end '>
          <div className='text-white'>
          {showParagraph && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
            <motion.div
              initial={{ opacity: 0, x: +80 }} // Masquer le paragraphe initialement
              animate={{ opacity: 1, x: 0 }} // Faire apparaître le paragraphe avec une animation
              transition={{ duration: 0.5 }} // Durée de l'animation
              className="p-5 sm:p-0 text-justify sm:text-center text-md text-raleway"
            >
            <div className="flex justify-center sm:justify-center items-center gap-2">
              <h1 className="text-5xl lg:text-7xl text-croissant text-center md:pt-0 mt-10">Portfolio</h1>
            </div>
            </motion.div>
          )}

          {showParagraph && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Masquer le paragraphe initialement
              animate={{ opacity: 1, y: 0 }} // Faire apparaître le paragraphe avec une animation
              transition={{ duration: 0.5 }} // Durée de l'animation
              className="p-5 sm:p-0 text-justify sm:text-center text-md text-raleway"
            >
            <p>
            Explorez mon portfolio pour découvrir mes réalisations professionnelles et les compétences que 
            j'ai acquises au cours de ma formation
            </p>
            <h1 className="text-4xl text-croissant underline text-center py-3">Compétences</h1>
            <div>
              <div className='flex items-center justify-center gap-3'>
                <div className='w-[16.6%] flex justify-center'>
                  <FontAwesomeIcon className='text-6xl svg' icon={faHtml5} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <FontAwesomeIcon className='text-6xl svg' icon={faCss3} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <FontAwesomeIcon className='text-6xl svg' icon={faBootstrap} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <img className='w-24 text-white svg' src={tailwind} alt="" />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <FontAwesomeIcon className='text-6xl svg' icon={faSquareJs} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <FontAwesomeIcon className='text-6xl svg' icon={faReact} />
                </div>

              </div>
              <div className='flex items-center justify-center gap-3'>
              <div className='w-[16.6%] flex justify-center'>
                <FontAwesomeIcon className='text-6xl svg' icon={faPhp} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <FontAwesomeIcon className='text-6xl svg' icon={faSymfony} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <img className='w-24 text-white svg' src={sql} alt="" />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                  <FontAwesomeIcon className='text-6xl svg' icon={faWordpress} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                <FontAwesomeIcon className='text-6xl svg' icon={faGithub} />
                </div>
                <div className='w-[16.6%] flex justify-center'>
                <FontAwesomeIcon className='text-6xl svg' icon={faGit} />
                </div>
              </div>
            </div>

            </motion.div>
          )}
          </div>
        </div>
      <div className='md:w-[60%] flex flex-col  h-full justify-center '>

      {showSlider && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
            <motion.div
              initial={{ opacity: 0, x: 80 }} // Masquer le paragraphe initialement
              animate={{ opacity: 0.9, x: 0 }} // Faire apparaître le paragraphe avec une animation
              transition={{ duration: 0.5 }} // Durée de l'animation
              className="md:h-[75%]  w-full h-full overflow-hidden flex flex-wrap gap-3"
            >
 <div className='flex justify-center items-end '>
              <div className={`transition-all ease-out duration-300 flex flex-none w-full gap-2 ${ carousPage===1? 'translate-x-[50%]':'translate-x-[-50%]'}`}>
                <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={yoga} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faBootstrap} className='icone-techno' />
                      </div>
                      <div className='flex gap-3'>
                          <FontAwesomeIcon icon={faSquareJs} className='icone-techno' />
                          <FontAwesomeIcon icon={faPhp} className='icone-techno' />
                          <FontAwesomeIcon icon={faSymfony} className='icone-techno' />
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                      <Link target='_blank' to='https://www.cours-yoga-marrakech.com/'>Voir le site</Link>
                    </div>
                  </div>
                </div>
                <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={gestion} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faBootstrap} className='icone-techno' />
                      </div>
                      <div className='flex gap-3'>
                          <FontAwesomeIcon icon={faSquareJs} className='icone-techno' />
                          <FontAwesomeIcon icon={faPhp} className='icone-techno' />
                          <FontAwesomeIcon icon={faSymfony} className='icone-techno' />
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                      <Link target='_blank' to='https://gestion.flata-tech.com/'>Voir le site</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all ease-out duration-300 flex flex-none w-full gap-2 ${ carousPage===1? 'translate-x-[50%]':'translate-x-[-50%]'}`}>
              <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={gestalt} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faBootstrap} className='icone-techno' />
                      </div>
                      <div className='flex gap-3'>
                          <FontAwesomeIcon icon={faSquareJs} className='icone-techno' />
                          <FontAwesomeIcon icon={faPhp} className='icone-techno' />
                          <FontAwesomeIcon icon={faSymfony} className='icone-techno' />
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                      <Link target='_blank' to='https://www.gestalt-maroc.com/'>Voir le site</Link>
                    </div>
                  </div>
                </div>
                <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={studi1} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faBootstrap} className='icone-techno' />
                        <Link target='_blank' to='https://github.com/havikoro2004/studi-eva1'> <FontAwesomeIcon icon={faGithub} className='icone-techno' /></Link>
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                      <Link target='_blank' to='https://studi1.flata-tech.com/'>Voir le site</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='flex justify-center items-start '>
              <div className={`transition-all ease-out duration-300 flex flex-none w-full gap-2 ${ carousPage===1? 'translate-x-[50%]':'translate-x-[-50%]'}`}>
              <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={studi4} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faWordpress} className='icone-techno' />
                        <Link target='_blank' to='https://github.com/havikoro2004/studi-eva4'> <FontAwesomeIcon icon={faGithub} className='icone-techno' /></Link>
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                      <Link target='_blank' to='https://studi4.flata-tech.com/'>Voir le site</Link>
                    </div>
                  </div>
                </div>
                <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={studi6} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faBootstrap} className='icone-techno' />
                      </div>
                      <div className='flex gap-3'>
                          <FontAwesomeIcon icon={faSquareJs} className='icone-techno' />
                          <FontAwesomeIcon icon={faPhp} className='icone-techno' />
                          <FontAwesomeIcon icon={faSymfony} className='icone-techno' />
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                      <Link target='_blank' to='https://github.com/havikoro2004/studi-eva6'> <FontAwesomeIcon icon={faGithub} className='icone-techno' /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all ease-out duration-300 flex flex-none w-full gap-2 ${ carousPage===1? 'translate-x-[50%]':'translate-x-[-50%]'}`}>
              <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={studi2} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faBootstrap} className='icone-techno' />
                        <FontAwesomeIcon icon={faSquareJs} className='icone-techno' />
                        <Link target='_blank' to='https://github.com/havikoro2004/studi-eva2'> <FontAwesomeIcon icon={faGithub} className='icone-techno' /></Link>
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                    <Link target='_blank' to='https://studi2.flata-tech.com/'>Voir le site</Link>
                    </div>
                  </div>
                </div>
                <div className={`relative transition-all ease-out duration-300 w-1/2 h-full flex items-center justify-center  border-2 rounded-md p-2`}>
                  <img className='h-[90%]'  src={ecf} alt="" />
                  <div className='flex-col opacity-0 hover:opacity-90 transition-all ease-out duration-300 absolute top- bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white h-full flex items-center justify-center rounded'>
                    <div className='md:mb-5 p-3 md:p-0 flex justify-center flex-wrap gap-3'>
                      <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faHtml5} className='icone-techno' />
                        <FontAwesomeIcon icon={faCss3} className='icone-techno' />
                        <FontAwesomeIcon icon={faBootstrap} className='icone-techno' />
                      </div>
                      <div className='flex gap-3'>
                          <FontAwesomeIcon icon={faSquareJs} className='icone-techno' />
                          <FontAwesomeIcon icon={faPhp} className='icone-techno' />
                          <FontAwesomeIcon icon={faSymfony} className='icone-techno' />
                      </div>
                    </div>
                    <div className='rounded-xl p-3 bg-rose-600'>
                      <Link target='_blank' to='https://github.com/havikoro2004/studi-eva-ecf'> <FontAwesomeIcon icon={faGithub} className='icone-techno' /></Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='mb-10 w-full flex gap-3 h-[10%] justify-center '>
              <button onClick={()=>{setCarousPage(1)}} disabled={carousPage === 1} ><FontAwesomeIcon icon={ carousPage===2 ? solidCircle  :  faCircle } className='text-white' /></button>
              <button onClick={()=>{setCarousPage(2)}} disabled={carousPage === 2}><FontAwesomeIcon icon={ carousPage===2 ? faCircle  : solidCircle  }  className='text-white' /></button>
            </div>
            </motion.div>
          )}

   

           
          </div>

      </div>

    </Transition>
  )
}

export default Portfolio