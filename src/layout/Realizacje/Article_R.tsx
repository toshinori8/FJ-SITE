import { Component, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {useRouter} from 'next/router';
import { motion, useAnimation } from 'framer-motion';

type ArtProps = {
  title: string;
    image: string;
    content:string;
    href: string;
};


const Article_R = (props: ArtProps) => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return(


    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 }
    }}
 // transition={{ ease: "easeOut", duration: 2 }}
  >
  
    <a href="#" className="image">
      <img
        src={props.image}
        alt="FJ Malowanie Dachów - Wadowice, Małopolska"
      />
    </a>
    <h3 className="major">{props.title}</h3>
    <p>
      {props.content}
    </p>
    <a href={props.href} className="special">
      Zobacz więcej
    </a>

  </motion.div>
  )

}

export { Article_R };
