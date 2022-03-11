import { ReactNode, useEffect } from 'react';

import Banner from '@/layout/Elements/Banner';
import Footer from '@/layout/Elements/Footer';
import Menu from '@/layout/Elements/menu/Menu';
import MenuItems from '@/layout/Elements/menu/MenuItems';
import MenuOver from '@/layout/Elements/menu/MenuOver';
import router, { useRouter } from 'next/router';
import React from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

useEffect(() => {
  const clasS=router.asPath.replace('/([/])+/g','',);
  
});
function routerClass(){

  const clasS='xxxx'

 
  
  return clasS;

}

const Main = (props: IMainProps) => (


  <>
    {props.meta}
    <div id="container" className={routerClass()}>
    <header id="header" className="alt">
      <nav id="desktop">
        <MenuItems />
      </nav>

      <Menu />
    </header>
    <MenuOver />
    <Banner />
    <section id="wrapper">{props.children}</section>
    
    <Footer />
    
    
    {/* <script type="module" src="js/main.js"></script>

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.scrollex.min.js"></script>
    <script type="module" src="js/browser.min.js"></script>
    <script src="js/breakpoints.min.js"></script>
    <script type="module" src="js/util.js"></script>
    <script type="module" src="js/main.js"></script> */}
 </div>
  </>
  
);

export { Main };
