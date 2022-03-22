import { useEffect } from 'react';
import HamMenu from './HamMenu';
import {motion } from 'framer-motion'


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
   let el = document.getElementById('nav-icon');
        el?.classList.toggle('open');
        let clos = document.getElementById('nav-icon')?.classList.contains('open');
       if(!clos){ 
         document.body.classList.toggle('is-menu-visible'); 
         el?.classList.remove('open');
        }

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
