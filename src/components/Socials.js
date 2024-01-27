import React from 'react';

import {LogoLinkedin} from 'react-ionicons';
import {LogoInstagram} from 'react-ionicons';
import {LogoFacebook} from 'react-ionicons';

import {motion} from 'framer-motion';

import styles from './Socials.module.css';

const Socials=props=>{
    return(
        <motion.div className={styles.container}
            animate={{ translateY: '0', opacity:1, scale: 1}} transition={{ type: "tweek", duration: 1.6 }} initial={{ translateY: '100%', opacity:0, scale:0 }}
        >
            <div className={styles.line}></div>
            <a
                href="https://www.linkedin.com/company/iste-sc-manit"
                target="_blank"
            >
                <LogoLinkedin color={'aliceblue'} height="40px" width="40px" />
            </a>
            <a
                href="https://www.instagram.com/istemanit"
                target="_blank"
            >
                <LogoInstagram color={'aliceblue'} height="40px" width="40px" />
            </a>
            <a
                href="https://www.facebook.com/ISTESCMANIT"
                target="_blank"
            >
                <LogoFacebook color={'aliceblue'} height="40px" width="40px" />
            </a>
            <div className={styles.line}></div>
        </motion.div>
    );
}

export default Socials