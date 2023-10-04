import React, { useEffect, useState } from "react";
import Transition from "../Transition";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  // Utilisez useEffect pour déclencher l'affichage du paragraphe après un certain délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000); // Changez le délai en millisecondes selon vos besoins
    return () => clearTimeout(timer);
  }, []);

  const removeSpace = (event) => {
    if (
      event.keyCode === 32 &&
      (event.target.selectionStart === 0 ||
        event.target.value.charAt(event.target.selectionStart - 1) === " ")
    ) {
      event.preventDefault();
    }
  };
  const [sendSuccess, setSendSuccess] = useState(false);
  const [load, setLoad] = useState(false);
  const [arrowBtn, setArrowBtn] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mail: "",
    sujet: "",
    message: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true);
    setSendSuccess(false);
    emailjs
      .sendForm(
        "service_ypo7ytf",
        "template_j6c5jnt",
        e.target,
        "wyj0X_BOKLUbELBA2"
      )
      .then(
        (result) => {
          setLoad(false);
          setForm({ ...form, name: "", mail: "", sujet: "", message: "" });
          setSendSuccess(true);
          setTimeout(() => {
            setSendSuccess(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Transition>
      {showForm && ( // Condition pour afficher le paragraphe lorsque showParagraph est true
        <motion.div
          initial={{ opacity: 0, x: -80 }} // Masquer le paragraphe initialement
          animate={{ opacity: 1, x: 0 }} // Faire apparaître le paragraphe avec une animation
          transition={{ duration: 0.5 }} // Durée de l'animation
          className="h-screen w-full flex items-center justify-center flex-col gap-3 mb-5 container max-w-screen-xl"
        >
          <div className="h-[80%] md:w-full w-[90%] mt-32 ">
            <h1 className="text-5xl text-croissant text-white text-center pb-10">
              Contact
            </h1>
            <form onSubmit={sendEmail} action="" className="px-2 text-white">
              {load ? (
                <div className="w-full border-2 py-2 rounded mx-auto my-5 text-center flex justify-center items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleNotch}
                    className="text-2xl  animate-spin"
                  />{" "}
                  <span>Envoie en cours</span>
                </div>
              ) : (
                ""
              )}
              {sendSuccess ? (
                <div className="w-full border-2 py-2 rounded mx-auto my-5 text-center flex justify-center items-center gap-3">
                  <span>Message envoyé avec success</span>
                </div>
              ) : (
                ""
              )}
              <div className="flex gap-3 flex-col md:flex-row mb-5">
                <input
                  onKeyDown={removeSpace}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                  value={form.name}
                  name="name"
                  type="text"
                  placeholder="Nom"
                  className="bg-transparent border-2 rounded p-2 md:w-1/2 w-full focus:outline-none focus:border-white focus:ring-white focus:ring-1"
                  required
                />
                <input
                  onKeyDown={removeSpace}
                  value={form.mail}
                  onChange={(e) => {
                    setForm({ ...form, mail: e.target.value });
                  }}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-2 rounded p-2 md:w-1/2 w-full focus:outline-none focus:border-white focus:ring-white focus:ring-1"
                  required
                />
              </div>
              <input
                onKeyDown={removeSpace}
                value={form.sujet}
                onChange={(e) => {
                  setForm({ ...form, sujet: e.target.value });
                }}
                name="sujet"
                type="text"
                placeholder="Sujet"
                className="mb-5 bg-transparent border-2 rounded p-2  w-full focus:outline-none focus:border-white focus:ring-white focus:ring-1"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onKeyDown={removeSpace}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                }}
                className="mb-5 bg-transparent border-2 rounded p-2  w-full focus:outline-none focus:border-white focus:ring-white focus:ring-1"
                rows="10"
                required
              />
              <button
                onMouseLeave={() => {
                  setArrowBtn(false);
                }}
                onMouseOver={() => {
                  setArrowBtn(true);
                }}
                className="border-2 text-white py-2 rounded-xl w-[120px] h-[45px]"
              >
                {arrowBtn ? (
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="text-2xl"
                  />
                ) : (
                  "Valider"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </Transition>
  );
}

export default Contact;
