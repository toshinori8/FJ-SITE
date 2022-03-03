import { ReactNode } from 'react';

import Banner from '@/layout/Banner';
import Footer from '@/layout/Footer';
import Menu from '@/layout/Menu';
import MenuOver from '@/layout/MenuOver';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    <header id="header" className="alt">
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
  </>
);

export { Main };
