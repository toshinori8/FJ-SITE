import { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect } from "react";
import '../styles/global.css';
import handleScroll from '@/layout/Elements/HandleScroll';


const sendTrigger = useEffect



export default function MyApp({ Component, pageProps }: AppProps) {

  sendTrigger(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  })

  return (

    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
         <AnimateSharedLayout>

         <Component {...pageProps} />

         </AnimateSharedLayout>
     
    </motion.div>
  )


};


