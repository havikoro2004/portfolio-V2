import React, { useState, useEffect } from "react";
import Transition from "../Transition";
import { motion } from "framer-motion";
import profil from "../images/profil.png";
import open from "../images/open.png";

function Home() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showImg, setShowImg] = useState(false);

  // Utilisez useEffect pour déclencher l'affichage du paragraphe après un certain délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 1500); // Changez le délai en millisecondes selon vos besoins
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImg(true);
    }, 1000); // Changez le délai en millisecondes selon vos besoins
    return () => clearTimeout(timer);
  }, []);
  return (
    <Transition>
      <div className="h-[50px]"></div>
      <div className="h-full flex flex-col md:flex-row justify-center items-center container max-w-screen-xl p-5 sm:gap-3">
        <div className="order-2 md:order-1 text-white w-full h-1/2 text-center flex flex-col justify-center items-center">
          {showParagraph && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
            <motion.div
              initial={{ opacity: 0, x: -80 }} // Masquer le paragraphe initialement
              animate={{ opacity: 1, x: 0 }} // Faire apparaître le paragraphe avec une animation
              transition={{ duration: 0.5 }} // Durée de l'animation
              className="p-5 sm:p-0 text-justify sm:text-center text-md text-raleway"
            >
              <div className="flex justify-center sm:justify-start items-center gap-2">
                <div className="hidden xl:block">
                  <img
                    className="w-20 sm:w-24 h-auto animate-spin-slow"
                    src={open}
                    alt=""
                  />
                </div>
                <div className="flex justify-center flex-col items-center">
                  <h1 className="text-4xl mb-2 md:mb-0 lg:text-7xl text-croissant text-center">
                    Najib Flata
                  </h1>
                  <h2 className="text-xl md:text-2xl md:mb-3 mb-0 text-center">
                    Développeur web et web mobile
                  </h2>
                </div>
              </div>
            </motion.div>
          )}

          {showParagraph && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Masquer le paragraphe initialement
              animate={{ opacity: 1, y: 0 }} // Faire apparaître le paragraphe avec une animation
              transition={{ duration: 0.5 }} // Durée de l'animation
              className="p-5 sm:p-0 text-justify sm:text-center text-md text-raleway"
            >
              En reconversion professionnelle, je suis passionné par le
              développement web et web mobile. Ma détermination à acquérir de
              nouvelles compétences et à contribuer à des projets innovants fait
              de moi un candidat enthousiaste. Mon objectif est de mettre en
              pratique ces compétences au sein d'une équipe dynamique pour
              contribuer au succès de projets web et mobiles.
            </motion.p>
          )}
        </div>
        {showImg && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Masquer le paragraphe initialement
            animate={{ opacity: 1, y: 0 }} // Faire apparaître le paragraphe avec une animation
            transition={{ duration: 0.5 }} // Durée de l'animation
            className="order-1 md:order-2 w-full h-full flex items-center justify-center"
          >
            <img className="w-[80%] pt-10 md:w-full" src={profil} alt="" />
          </motion.div>
        )}
      </div>
    </Transition>
  );
}

export default Home;
