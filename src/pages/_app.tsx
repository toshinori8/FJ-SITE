import { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect } from "react";
import '../styles/global.css';
import handleScroll from '@/layout/Elements/HandleScroll';
import router from 'next/router';


const sendTrigger = useEffect



export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('553933202522472') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])


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


