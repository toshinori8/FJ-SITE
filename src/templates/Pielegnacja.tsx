import { ReactNode } from 'react';

import Banner from '@/layout/Elements/Banner';
import Footer from '@/layout/Elements/Footer';
import Menu from '@/layout/Elements/menu/Menu';
import MenuOver from '@/layout/Elements/menu/MenuOver';
import MenuItems from '@/layout/Elements/menu/MenuItems';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};


const Pielegnacja = (props: IMainProps) => (
  <>
    {props.meta}
  


      Pielegnacja

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

export { Pielegnacja };
