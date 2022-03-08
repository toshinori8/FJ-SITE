import { AppProps } from 'next/app';
import {motion} from 'framer-motion';

import '../styles/global.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => (
 
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
    <Component {...pageProps} />
  </motion.div>


  );

export default MyApp;
