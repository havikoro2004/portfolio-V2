import React from 'react'
import Transition from '../Transition'
import { motion } from "framer-motion";
import profil from "../images/futur.png";
import open from "../images/open.png";
function Home() {
  return (
    <Transition >
    <div className='h-screen flex flex-col sm:flex-row justify-center items-center container max-w-screen-xl p-5 sm:gap-3'>
      <div className='order-2 sm:order-1 text-white w-full h-1/2 text-center flex flex-col justify-center '>
        <div className='flex justify-center sm:justify-start items-center gap-2'>
         <div>
            <img className='w-20 sm:w-28 h-auto animate-spin-slow' src={open} alt="" />
         </div>
        <div>
          <h1 className='text-6xl sm:text-7xl text-chakra'>Najib Flata</h1>
          <h2 className='text-xl sm:text-2xl mb-3'>Développeur web et web mobile</h2>
        </div>
        </div>
        <p className='p-5 sm:p-0 text-justify sm:text-center text-md text-raleway'>
          En reconversion professionnelle, je suis passionné par le développement web et web mobile. Ma détermination
           à acquérir de nouvelles compétences et à contribuer à des projets innovants fait de moi un candidat 
           enthousiaste. Mon objectif est de mettre en pratique ces compétences au sein d'une équipe dynamique 
           pour contribuer au succès de projets web et mobiles.
        </p>
      </div>
      <div className='order-1 sm:order-2 w-full h-full flex items-center '>
          <img className='w-full' src={profil} alt="" />
      </div>
    </div>
    </Transition>
  )
}

export default Home