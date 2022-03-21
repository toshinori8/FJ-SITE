import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type FuturesHomeProps = {
  enny: string;
};

const FuturesHome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="#" className="image">
            <img src={'/assets/images/1.jpg'} alt="" />
          </a>

          <div className="content">
            <h2 className="major">Profesjnalne malowanie i renowacja dachów</h2>
            <p>
              Zajmujemy się kompleksową renowacją, impregnacją pokryć dachowych oraz elementów systemu kominowego
            </p>
            <a href="/oferta/malowanie-dachow" className="special">
              Poznaj szczegóły, zamów usługę
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          {/* <a href="#" className="image">
          <img src={'/assets/images/2.jpg'} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Tempus adipiscing</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
           
          </div> */}

            <div className="contentvc">
            <h2 className="major">Pielęgnacja ogrodów</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
         
        



          <div id="slider_images_futures">
            <div id="figure">
              <img src="/assets/images/pielegnacja-ogrodow/6.jpg" />
              <img src="/assets/images/pielegnacja-ogrodow/2.jpg" />
              <img src="/assets/images/pielegnacja-ogrodow/3.jpg" />
              <img src="/assets/images/pielegnacja-ogrodow/4.jpg" />
              <img src="/assets/images/pielegnacja-ogrodow/5.jpg" />
            </div>
          </div>

          <a href="#" className="special">
              POZNAJ SZCZEGÓŁY
            </a>
        </div>

  </div> 


      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="#" className="image">
            <img src={'/assets/images/3.jpg'} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nullam dignissim</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="#" className="special">
              POZNAJ SZCZEGÓŁY
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FuturesHome;
