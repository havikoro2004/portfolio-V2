import React, { useEffect, useState } from 'react'
import Transition from '../Transition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCheck, faEarth, faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import cv from '../images/cv_najib_flata.pdf'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function Experience() {
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
    }, 1000); // Changez le délai en millisecondes selon vos besoins
    return () => clearTimeout(timer);
  }, []);
  return (
    <Transition>
      <div className=' h-screen flex items-end justify-center text-white container max-w-screen-xl flex-col md:flex-row'>

              {showParagraph && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
            <motion.div
              initial={{ opacity: 0, x: -80 }} // Masquer le paragraphe initialement
              animate={{ opacity: 1, x: 0 }} // Faire apparaître le paragraphe avec une animation
              transition={{ duration: 0.5 }} // Durée de l'animation
              className="md:w-[80%] w-full h-full flex justify-center items-start flex-col px-10 md:px-2 mt-[80vh] mb-8 md:mb-0"
            >
 <h1 className="text-4xl text-croissant underline mb-4 mt-32">Contact</h1>
          <ul className='mb-4'>
            <li><FontAwesomeIcon icon={faEnvelope} /> havikoro2004@gmail.com</li>
            <li><FontAwesomeIcon icon={faPhone} /> +33 6 59 00 24 22</li>
            <li><FontAwesomeIcon icon={faMapLocation} />  46 chemin du canada 74800 Amancy</li>
            <li><FontAwesomeIcon icon={faAddressCard} /> Permis B</li>
          </ul>
          <h1 className="text-4xl text-croissant underline mb-4">Formations</h1>
          <ul className='mb-4'>
            <li>
              <FontAwesomeIcon icon={faCheck} /> <strong>Studi </strong> (En ligne) / 2020 -2023
              <p>Titre professionnel niveau 5 Développeur Web & Web Mobile</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> <strong>EFET </strong> (Ecoles Françaises d'Enseignement Technique) / 2011
              <p>Diplôme de gestion des entreprises</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> <strong> Lycée Youssef Ben Tachafine  </strong>Marrakech / 2002
              <p>Baccalauréat Sciences Expérimentales</p>
            </li>
          </ul>
          <h1 className="text-4xl text-croissant underline mb-4">Langues</h1>
          <ul className='mb-4'>
            <li className='flex items-center justify-center gap-5 '>
            <span className='w-[80px]'>Français</span> 
              <div className='bg-gray-500 w-[200px] h-[10px] rounded-xl'>
                <div className='bg-white w-[80%] h-[10px] rounded-xl'></div>
              </div>
            </li>
            <li className='flex items-center justify-center gap-5 '>
              <span className='w-[80px]'>Anglais</span> 
              <div className='bg-gray-500 w-[200px] h-[10px] rounded-xl'>
                <div className='bg-white w-[60%] h-[10px] rounded-xl'></div>
              </div>
            </li>
            <li className='flex items-center justify-center gap-5 '>
            <span className='w-[80px]'>Arabe</span> 
              <div className='bg-gray-500 w-[200px] h-[10px] rounded-xl'>
                <div className='bg-white w-[95%] h-[10px] rounded-xl'></div>
              </div>
            </li>
            <li className='flex items-center justify-center gap-5 '>
            <span className='w-[80px]'>Espagnole</span> 
              <div className='bg-gray-500 w-[200px] h-[10px] rounded-xl'>
                <div className='bg-white w-[30%] h-[10px] rounded-xl'></div>
              </div>
            </li>
          </ul>
            <a target='_blank' href={cv} className=' bg-rose-600 p-2 rounded-xl'>Télécharger le CV</a>
            </motion.div>
          )}
                 {showSlider && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
            <motion.div
              initial={{ opacity: 0, x: 80 }} // Masquer le paragraphe initialement
              animate={{ opacity: 1, x: 0 }} // Faire apparaître le paragraphe avec une animation
              transition={{ duration: 0.5 }} // Durée de l'animation
              className="w-full h-[85%] flex justify-center items-center mt-4 md:mt-0 md:px-0 px-10"
            >
            <div className=' border-2 rounded-xl w-full h-full p-5 overflow-hidden overflow-y-auto'>
              <h1 className="text-4xl text-croissant underline mb-4">Expériences </h1>
                <ul className='mb-4'>
                  <li>
                    <strong>Freelance création sites web / 2022-2023</strong>
                    <p><FontAwesomeIcon icon={faEarth} /> <Link target='_blank' to='https://www.cours-yoga-marrakech.com/'>cours-yoga-marrakech.com</Link></p>
                    <p><FontAwesomeIcon icon={faEarth} /> <Link target='_blank' to='https://www.gestalt-maroc.com/'> gestalt-maroc.com</Link></p>
                  </li>
                </ul>
                <ul className='mb-4'>
                  <li>
                    <strong>Mairie Saint-Sixt / 2023</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Agent technique polyvalent</p>
                  </li>
                </ul>
                <ul className='mb-4'>
                  <li>
                    <strong>Atout (LA ROCHE SUR FORON) / 2021-2023</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Animateur écoles maternelles.</p>
                    <p><FontAwesomeIcon icon={faCheck} /> ATSEM écoles maternelles.</p>
                    <p><FontAwesomeIcon icon={faCheck} /> H&M : Mise en rayons.</p>
                  </li>
                </ul>
                <ul className='mb-4'>
                  <li>
                    <strong>ADECCO (ROUEN / BONNEVILLE) / 2018-2021</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Bagagiste à l’aéroport de Boos (Rouen).</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Facteur chez la Poste : Tri et distribution du courrier.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>LA POSTE (ROUEN) /2017</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Facteur : Tri et distribution du courrier.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>Centre d'Estivage OCP (Marrakech) / 2015</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Responsable d’animation.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>CLUB MARMARA MADINA/TUI (MARRAKECH) / 2012-2015</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Animateur polyvalent.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>RIAD ASSALAM (MARRAKECH) / 2008-2011</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Gérant polyvalent.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>STELLA-SPECTACLES (MARRAKECH) / 2004-2016</strong>
                    <p>Principales responsabilités :</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Danseur professionnel, assistant artistique.</p>
                  </li>
                </ul>
            </div>
            </motion.div>
          )}


          </div>

    </Transition>
  )
}

export default Experience