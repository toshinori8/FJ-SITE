import { useEffect } from 'react';
import HamMenu from './HamMenu';
import {motion } from 'framer-motion'
import { useRouter } from 'next/router';


function Menu() {
  useEffect(() => {

    

    document.addEventListener('keydown', function e(event) {
      if (event.keyCode === 27) {
        document.body.classList.remove('is-menu-visible');
        //  console.log('ESC');
      }
      // console.log(event.keyCode);
    });
    


  }, []);

  const showMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log('showMobileMenu');
    document.body.classList.toggle('is-menu-visible');
    
  };

  const variants = {
    visible: { opacity: 1,
      transition :{
      delay : 2
      }  
    },
    hidden: { opacity: 0 },
    
  }


  return (
    <>
      <h1>
        <a href="index.html">Solid State</a>
      </h1>
      <nav id="burger">

      

        <a href="#" onClick={(e) => showMobileMenu(e)}>


        <motion.div 
             initial="hidden"
             animate="visible"
             variants={variants}
             
        >
        <HamMenu csState={"close"}/>
        </motion.div>
        </a>
      </nav>
    </>
  );
}

export default Menu;
