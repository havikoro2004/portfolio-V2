import React from 'react'
import { motion } from "framer-motion";

function Transition({children}) {
  return (
    <>
    <motion.div
    className="slide-in"
    initial={{ scaleY:0 }}
    animate={{ scaleY:0 }}   
    exit={{ scaleY:1 }}      
    transition ={{ duration : 0.9,ease:[0.22,0,0.36,1] }}     
    />
    <motion.div
    className="slide-out"
    initial={{ scaleY:1 }}
    animate={{ scaleY:0 }}   
    exit={{ scaleY:0 }}      
    transition ={{ duration : 0.9,ease:[0.22,0,0.36,1] }}     
    />
    {children}
    </>
  )
}

export default Transition