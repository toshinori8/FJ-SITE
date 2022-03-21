import Link from 'next/link';
import HamMenu from './HamMenu';
import { motion } from 'framer-motion';
import MenuItems from './MenuItems';


function MenuOver() {

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 2
      }
    },
    hidden: { opacity: 0 },

  }
  return (
    <>
      <nav id="menu" className="mobile">


        <div className="inner">


          <ul className="links">

          <MenuItems />

          </ul>

          <motion.div

            initial="hidden"
            animate="visible"
            variants={variants}


          >
            <HamMenu csState={"open"} />
          </motion.div>


        </div>
      </nav>
    </>
  );
}

export default MenuOver;
