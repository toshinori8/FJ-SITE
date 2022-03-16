import { ReactNode, useEffect } from 'react';

import Banner from '@/layout/Elements/Banner';
import Footer from '@/layout/Elements/Footer';
import Menu from '@/layout/Elements/menu/Menu';
import MenuItems from '@/layout/Elements/menu/MenuItems';
import MenuOver from '@/layout/Elements/menu/MenuOver';
import useRouter from 'next/router';
import React from 'react';
import LogoFJ from '@/layout/Elements/LogoFJ';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};



const Main = (props: IMainProps) => (


  <>
    {props.meta}
    <Banner />
 
   
    <header id="header" className="alt">
      <nav id="desktop">

        <div className="wrapperLogo hidden">
          <div className="inner">
            <LogoFJ />
            <MenuItems />
          </div>
        </div>

      <MenuOver />

      </nav>

  
    </header>
    <Menu />
    <section id="wrapper">{props.children}</section>

    <Footer />


    {/* <script type="module" src="js/main.js"></script>

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.scrollex.min.js"></script>
    <script type="module" src="js/browser.min.js"></script>
    <script src="js/breakpoints.min.js"></script>
    <script type="module" src="js/util.js"></script>
    <script type="module" src="js/main.js"></script> */}

  </>

);

export { Main };
