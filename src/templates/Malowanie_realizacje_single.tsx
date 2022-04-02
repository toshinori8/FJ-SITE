import { ReactNode } from 'react';

import Banner from '@/layout/Elements/Banner';
import Footer from '@/layout/Elements/Footer';
import Menu from '@/layout/Elements/menu/Menu';
import MenuOver from '@/layout/Elements/menu/MenuOver';
import MenuItems from '@/layout/Elements/menu/MenuItems';
import LogoFJ from '@/layout/Elements/LogoFJ';
import LogoFJ_white from '@/layout/Elements/LogoFJ';
import { motion } from 'framer-motion';
import { Malowanie_template } from './Malowanie_template';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Malowanie_realizacje_single = (props: IMainProps) => (
  <>
    {props.meta}
  
    <header id="header" className="alt">
      <nav id="desktop">

        <div className="wrapperLogo ">
          <div className="inner">
            <LogoFJ_white />
            <MenuItems />
          </div>
        </div>

      <MenuOver />

      </nav>

  
    </header>
    <Menu />

    
<section id="wrapper">
  
  
  <motion.main
      variants={variants} // Pass the variant object into Framer Motion 
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className=""
  >
    {props.children}
    
    </motion.main>
    </section>


    {/* <script type="module" src="js/main.js"></script>

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.scrollex.min.js"></script>
    <script type="module" src="js/browser.min.js"></script>
    <script src="js/breakpoints.min.js"></script>
    <script type="module" src="js/util.js"></script>
    <script type="module" src="js/main.js"></script> */}
  </>
);

export { Malowanie_realizacje_single };
