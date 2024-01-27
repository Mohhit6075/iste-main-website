import React from "react";
import { motion } from "framer-motion";
import style from './BreakLine.module.css';
const BreakLine=props=>{
    return(
        <motion.div className={style.breakline}
            animate={{translateX: '0' }} transition={{ type: "tweek", duration: 1.5 }} initial={{ translateX: '-100%' }}
        >   
        </motion.div>
    );
}

export default BreakLine;