"use client";

import React ,{Children, useEffect, useRef} from 'react'
import styles from "./styles.module.css";
import { useScroll , motion, useTransform } from 'framer-motion';



export default function Paragraph({value}) {
   
    const words = value.split(" ");
    const element = useRef(null);
    const {scrollYProgress} =useScroll({
        target:element,
        offset:['start 0.5','0.2, start']
    })
    
   
  return (
    // <motion.p className={styles.paragraph} style={{opacity:scrollYProgress}} ref={element}>
    //     {value}
    // </motion.p>
    <p ref={element} className={styles.paragraph}>
        {
            words.map((word, i)=>
            {   
                const start = i/words.length;
                const end = start +(1/words.length)
                const opacity=useTransform(scrollYProgress,[start,end],[0,1]);
                return (
                    <>
                    {/* <span key={i+60} className={styles.shadow}>
                        {word}
                    </span> */}
                    {/* <Word>
                        {word}
                    </Word> */}
                <motion.span className={styles.word} key={i}
                style={{opacity:opacity}} 
                 > {word}</motion.span>
                    </>
            );
                
            })
        }
           
    </p>
);
}


