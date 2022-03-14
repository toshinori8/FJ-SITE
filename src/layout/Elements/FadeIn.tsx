import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ReactNode } from 'react';



import { FC } from "react";


// interface Props {
//   username: string;
// }

const FadeIn: FC = ({ children }) => {


  const controls = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, delay: 0.5, left: 'auto' }}

      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1, left: 200 }
      }}
    >
      {children}
    </motion.div>
  );
}





export default FadeIn




