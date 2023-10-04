import React, { useEffect, useState } from "react";
import Transition from "../Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCheck,
  faEarth,
  faEnvelope,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import cv from "../images/cv_najib_flata.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <div className="h-[50px]"></div>
      <div className=" w-full h-full  flex flex-col md:flex-row container max-w-screen-xl text-white items-center pt-20 md:gap-0 gap-10">
        {/* Side left */}
        {showParagraph && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
          <motion.div
            initial={{ opacity: 0, x: +80 }} // Masquer le paragraphe initialement
            animate={{ opacity: 1, x: 0 }} // Faire apparaître le paragraphe avec une animation
            transition={{ duration: 0.5 }} // Durée de l'animation
            className="h-[600px] w-full px-5 md:px-2 py-5 md:mb-0 mb-16  text-center md:text-left"
          >
            <h1 className="text-4xl text-croissant underline mb-4">Contact</h1>
            <ul className="mb-4">
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> havikoro2004@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> +33 6 59 00 24 22
              </li>
              <li>
                <FontAwesomeIcon icon={faMapLocation} /> 46 chemin du canada
                74800 Amancy
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressCard} /> Permis B
              </li>
            </ul>
            <h1 className="text-4xl text-croissant underline mb-4 text-center md:text-left">
              Formations
            </h1>
            <ul className="mb-4">
              <li>
                <FontAwesomeIcon icon={faCheck} /> <strong>Studi </strong> (En
                ligne) / 2020 -2023
                <p>Titre professionnel niveau 5 Développeur Web & Web Mobile</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> <strong>EFET </strong>{" "}
                (Ecoles Françaises d'Enseignement Technique) / 2011
                <p>Diplôme de gestion des entreprises</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />{" "}
                <strong> Lycée Youssef Ben Tachafine </strong>Marrakech / 2002
                <p>Baccalauréat Sciences Expérimentales</p>
              </li>
            </ul>
            <h1 className="text-4xl text-croissant underline mb-4 text-center md:text-left">
              Langues
            </h1>
            <ul className="mb-4 flex flex-col justify-center items-center md:items-start">
              <li className="flex items-center gap-5 ">
                <span className="w-[80px] text-left">Français</span>
                <div className="bg-gray-500 w-[200px] h-[10px] rounded-xl">
                  <div className="bg-white w-[80%] h-[10px] rounded-xl"></div>
                </div>
              </li>
              <li className="flex items-center gap-5 ">
                <span className="w-[80px] text-left">Anglais</span>
                <div className="bg-gray-500 w-[200px] h-[10px] rounded-xl">
                  <div className="bg-white w-[60%] h-[10px] rounded-xl"></div>
                </div>
              </li>
              <li className="flex items-center gap-5 ">
                <span className="w-[80px] text-left">Arabe</span>
                <div className="bg-gray-500 w-[200px] h-[10px] rounded-xl">
                  <div className="bg-white w-[95%] h-[10px] rounded-xl"></div>
                </div>
              </li>
              <li className="flex items-center gap-5 ">
                <span className="w-[80px] text-left">Espagnole</span>
                <div className="bg-gray-500 w-[200px] h-[10px] rounded-xl">
                  <div className="bg-white w-[30%] h-[10px] rounded-xl"></div>
                </div>
              </li>
            </ul>
            <a
              target="_blank"
              href={cv}
              className="bg-pink-500 p-2 rounded-xl hover:bg-pink-800"
            >
              Télécharger le CV
            </a>
          </motion.div>
        )}

        {/* Side right */}

        {showParagraph && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
          <motion.div
            initial={{ opacity: 0, x: -80 }} // Masquer le paragraphe initialement
            animate={{ opacity: 1, x: 0 }} // Faire apparaître le paragraphe avec une animation
            transition={{ duration: 0.5 }} // Durée de l'animation
            className="h-[600px] w-full px-5 md:px-2"
          >
            <div className=" border-2 rounded-xl w-full h-full p-5 overflow-hidden overflow-y-auto mb-10">
              <h1 className="text-4xl text-croissant underline mb-4">
                Expériences{" "}
              </h1>
              <div className="w-[32rem] text-white pt-3">
                <Timeline>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        Freelance création sites web / 2022-2023
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faEarth} />{" "}
                            <Link
                              target="_blank"
                              to="https://www.cours-yoga-marrakech.com/"
                            >
                              cours-yoga-marrakech.com
                            </Link>
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faEarth} />{" "}
                            <Link
                              target="_blank"
                              to="https://www.gestalt-maroc.com/"
                            >
                              {" "}
                              gestalt-maroc.com
                            </Link>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        Mairie Saint-Sixt / 2023
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Agent technique
                              polyvalent
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        Atout (LA ROCHE SUR FORON) / 2021-2023
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Animateur
                              écoles maternelles.
                            </p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> ATSEM écoles
                              maternelles.
                            </p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> H&M : Mise en
                              rayons.
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        ADECCO (ROUEN / BONNEVILLE) / 2018-2021
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Bagagiste à
                              l’aéroport de Boos (Rouen).
                            </p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Facteur chez la
                              Poste : Tri et distribution du courrier.
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        LA POSTE (ROUEN) /2017
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Facteur : Tri
                              et distribution du courrier.
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        Centre d'Estivage OCP (Marrakech) / 2015
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Responsable
                              d’animation.
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        CLUB MARMARA MADINA/TUI (MARRAKECH) / 2012-2015
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Animateur
                              polyvalent.
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        RIAD ASSALAM (MARRAKECH) / 2008-2011
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Gérant
                              polyvalent.
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon color="white" />
                      <Typography
                        variant="h6"
                        color="white"
                        className="leading-none"
                      >
                        STELLA-SPECTACLES (MARRAKECH) / 2004-2016
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                      <Typography
                        variant="small"
                        color="gary"
                        className="text-white"
                      >
                        <ul>
                          <li>
                            <p>Principales responsabilités :</p>
                            <p>
                              <FontAwesomeIcon icon={faCheck} /> Danseur
                              professionnel, assistant artistique.
                            </p>
                          </li>
                        </ul>
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Transition>
  );
}

export default Experience;
