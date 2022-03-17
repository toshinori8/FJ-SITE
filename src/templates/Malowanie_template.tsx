import { ReactNode } from 'react';

import Banner from '@/layout/Elements/Banner';
import Footer from '@/layout/Elements/Footer';
import Menu from '@/layout/Elements/menu/Menu';
import MenuOver from '@/layout/Elements/menu/MenuOver';
import MenuItems from '@/layout/Elements/menu/MenuItems';
import LogoFJ from '@/layout/Elements/LogoFJ';
import LogoFJ_white from '@/layout/Elements/LogoFJ';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};


const Malowanie_template = (props: IMainProps) => (
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

    <section id="wrapper">{props.children}</section>




    {/* <script type="module" src="js/main.js"></script>

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.scrollex.min.js"></script>
    <script type="module" src="js/browser.min.js"></script>
    <script src="js/breakpoints.min.js"></script>
    <script type="module" src="js/util.js"></script>
    <script type="module" src="js/main.js"></script> */}
  </>
);

export { Malowanie_template };
